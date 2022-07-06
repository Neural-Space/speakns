import { onRecieveChunk } from "./microphone";
import { sttLanguageDomainModelMap, getSuburl, getSupportedSampleRate } from "./stt-service-helpers";

class VoiceType {
    constructor(initParams) {
        if (!this.validateInit(initParams)) {
            throw new Error("Invalid initialization");
            return;
        }

        let { authToken, language, domain, elementId, onRecordingStart, onRecordingStop, maxSpeakingDuration, platformUrl } = initParams
        this.platformUrl = platformUrl;
        this.authToken = authToken;
        this.language = language;
        this.domain = domain;
        this.suburl = getSuburl(language, domain)
        this.streamUrl = `wss://${platformUrl?platformUrl:`platform.neuralspace.ai`}/stream/${this.suburl}/v1/live/transcribe/${this.authToken}/${Date.now()}`;
        this.inputElement = document.getElementById(elementId);
        this.maxSpeakingDuration = maxSpeakingDuration ? maxSpeakingDuration : 0;
        this.audioStream = null;
        this.recorder = null;
        this.recordingLength = 0;
        this.supportedSampleRate = getSupportedSampleRate(this.language, this.suburl);
        this.connection = null;
        this.isConnecting = false;
        this.isConnected = false;
        this.channel = [];
        this.onRecordingStartCallback = onRecordingStart;
        this.onRecordingStopCallback = onRecordingStop;
        this.transcript = "";
        this.currentValue = "";
        this.startTime = 0;
        console.info("Voice typing is successfully initialized 🎉")
    }
    connectStream = (data) => {

        if (!this.isConnecting || (!this.isConnecting && this.isConnected)) {
            this.isConnecting = true
            console.info("Connecting...")
            const socket = new WebSocket(this.streamUrl);
            socket.addEventListener('open', (event) => {
                this.connection = socket
                if (data) {
                    this.connection.send(data)
                }
                this.isConnecting = false
                this.isConnected = true
                console.info("Connected successfully. Stream on 🎉")
            });

            socket.addEventListener('message', (event) => {
                if (event.data) {
                    const data = JSON.parse(event.data)
                    if (!data.text) {
                        return
                    }
                    this.appendTranscription(data)
                }
            });

        }
    }
    startRecording = () => {
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
        if (navigator.getUserMedia) {
            navigator.getUserMedia({ audio: true }, (stream) => {
                this.audioStream = stream
                this.onRecordingStart()
                this.onRecordingStartCallback()
            }, function (error) {
                return 'Error capturing audio.';
            });
        }
        else {
            return 'getUserMedia not supported in this browser.';
        }
    }


    onRecordingStart = () => {
        this.currentValue = !this.inputElement.value ? "" : this.inputElement.value + " ";
        const chunkSize = 2048;
        let audioStream = this.audioStream;
        const context = window.AudioContext || window.webkitAudioContext;
        const audioContext = new context();
        // retrieve the current sample rate of microphone the browser is using
        const defaultSampleRate = audioContext.sampleRate;
        // creates a gain node
        const volume = audioContext.createGain();

        // creates an audio node from the microphone incoming stream
        const audioInput = audioContext.createMediaStreamSource(audioStream);

        // connect the stream to the gain node
        audioInput.connect(volume);

        /* From the spec: This value controls how frequently the audioprocess event is
        dispatched and how many sample-frames need to be processed each call.
        Lower values for buffer size will result in a lower (better) latency.
        Higher values will be necessary to avoid audio breakup and glitches */
        const bufferSize = chunkSize;
        this.recorder = (audioContext.createScriptProcessor || audioContext.createJavaScriptNode).call(audioContext, bufferSize, 1, 1);

        let channel = this.channel
        let recordingLength = this.recordingLength
        this.recorder.onaudioprocess = (event) => {
            const samples = event.inputBuffer.getChannelData(0);
            let F32 = new Float32Array(samples)
            // console.log(F32)
            // Process and Send chunk data to props
            // this.onRecieveChunk(F32, bufferSize, defaultSampleRate)
            // we clone the samples for the last blob after recording is stopped
            channel.push(F32);
            recordingLength += bufferSize;
            if (recordingLength > bufferSize * 10) {
                onRecieveChunk(channel, recordingLength, defaultSampleRate, this.supportedSampleRate, this.onData)
                channel = [];
                recordingLength = 0
            }
        };
        // we connect the recorder
        volume.connect(this.recorder);

        // start recording
        this.recorder.connect(audioContext.destination);
        this.startTime = Date.now()
    }

    onData = (data) => {
        if (this.connection) {
            this.connection.send(data)
        }
        else {
            this.connectStream(data)
        }
    }

    appendTranscription = (data) => {
        this.transcript = data.text
        let currentValue = this.currentValue + this.transcript
        this.inputElement.value = currentValue
        const duration = (Date.now() - this.startTime)/1000
        if(data.full){
            this.currentValue = currentValue + " "
        }
        if (this.maxSpeakingDuration == 0 && data.full) {
            this.transcript = "";
            this.stopRecording();
            console.log(`Last 🎤 session lasted for ${duration} seconds`)
        }
        else if(this.maxSpeakingDuration>0 && duration > this.maxSpeakingDuration){
            this.transcript = "";
            this.stopRecording();
            console.log(`Last 🎤 session lasted for ${duration} seconds`)
        }
    }

    stopRecording = () => {
        if (!this.recorder) return
        this.recorder.disconnect()
        this.recorder = null
        this.channel = []
        this.recordingLength = 0
        this.audioStream.getTracks().forEach(function (track) {
            track.stop();
        });
        this.connection.close()
        this.connection = null
        this.onRecordingStopCallback()
    }

    validateInit = (initParams) => {
        const { language, domain, elementId, onRecordingStart, onRecordingStop } = initParams;
        if (!sttLanguageDomainModelMap[language]) {
            throw new Error("Invalid language code")
            return false;
        }
        if (sttLanguageDomainModelMap[language] && !getSuburl(language, domain)) {
            throw new Error("Invalid domain for selected language")
            return false;
        }
        if (!document.getElementById(elementId)) {
            throw new Error("Specified input element does not exist")
            return false;
        }
        if (!onRecordingStart || !onRecordingStop) {
            console.warn("No callbacks have been specified for start/stop recording states")
            return true;
        }
        return true;
    }
}


if (window) {
    window.VoiceType = VoiceType
}

export default VoiceType