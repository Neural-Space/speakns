(()=>{var e={529:e=>{e.exports={onRecieveChunk:(e,t,a,o,i)=>{const s=(e=>{let t=[];for(let a=0;a<e.length;a++){let o=Math.floor(32767*e[a]);o=Math.min(32767,o),o=Math.max(-32768,o),t.push(o)}return t})(((e,t)=>{let a=new Float32Array(t),o=0;for(let t=0;t<e.length;t++)a.set(e[t],o),o+=e[t].length;return Array.prototype.slice.call(a)})(e,t)),n=((e,t,a)=>{if(t===a)return e;if(t>a)return"downsampling rate show be smaller than original sample rate";for(var o=a/t,i=Math.round(e.length/o),s=new Float32Array(i),n=0,r=0;n<s.length;){for(var l=Math.round((n+1)*o),c=0,d=0,m=r;m<l&&m<e.length;m++)c+=e[m],d++;s[n]=c/d,n++,r=l}return s})(s,o,a);i(new Int16Array(n))}}},76:e=>{const t={en:[{modelPath:"stt_model/en/vosk/11-05-2022-06-38-vosk-big-model-light-conf-en-us-0.22.zip",domain:"general",accent:"american",suburl:"en-16",sampleRate:16e3,description:"Select this domain if you need transcriptions that are accurate across domains. This is the recommended default choice."},{modelPath:"stt_model/en/vosk_hub/19-05-2022-03-24-vosk-en-medical-mixed-0.9-us-0.22.zip",accent:"american",domain:"medical",suburl:"en-medical-16",sampleRate:16e3,description:"Select this domain if you need accurate transcriptions especially for medical terms along with commonly spoken words."},{modelPath:"stt_model/en/vosk_hub/13-05-2022-07-11-vosk-en-finance-mixed-0.7-us-0.22.zip",accent:"american",domain:"finance",suburl:"en-finance-16",sampleRate:16e3,description:"Select this domain if you need accurate transcriptions especially for financial terms along with commonly spoken words."},{modelPath:"stt_model/en-in/vosk_hub/19-05-2022-14-18-vosk-model-en-in-0.5.zip",suburl:"en-in-16",domain:"indian",sampleRate:16e3,description:"Select this domain if you need accurate transcriptions for Indian accented speech."}],hi:[{modelPath:"stt_model/hi/vosk_hub/13-05-2022-06-09-vosk-model-hi-0.22.zip",domain:"general",suburl:"hi-16",sampleRate:16e3,description:"Select this domain if you need transcriptions that are accurate across domains."}],sv:[{modelPath:"stt_model/sv/vosk_hub/13-05-2022-07-20-vosk-model-small-sv-rhasspy-0.15.zip",domain:"general",suburl:"sv-16",sampleRate:16e3,description:"Select this domain if you need transcriptions that are accurate across domains."}],ar:[{modelPath:"stt_model/ar/vosk_hub/13-05-2022-05-08-vosk-model-ar-mgb2-0.4.zip",domain:"general",suburl:"ar-16",sampleRate:16e3,description:"Select this domain if you need transcriptions that are accurate across domains."}],ru:[{modelPath:"stt_model/ru/vosk_hub/13-05-2022-07-02-vosk-model-ru-0.22.zip",domain:"general",suburl:"ru-16",sampleRate:16e3,description:"Select this domain if you need transcriptions that are accurate across domains."}],fr:[{modelPath:"stt_model/fr/vosk_hub/13-05-2022-06-38-vosk-model-fr-0.22.zip",domain:"general",suburl:"fr-16",sampleRate:16e3,description:"Select this domain if you need transcriptions that are accurate across domains."}],tl:[{modelPath:"stt_model/ph/vosk_hub/13-05-2022-07-08-vosk-model-tl-ph-generic-0.6.zip",domain:"general",suburl:"ph-16",sampleRate:16e3,description:"Select this domain if you need transcriptions that are accurate across domains."}],uk:[{modelPath:"stt_model/uk/vosk_hub/13-05-2022-07-03-vosk-model-uk-v3.zip",domain:"general",suburl:"uk-16",sampleRate:16e3,description:"Select this domain if you need transcriptions that are accurate across domains."}],de:[{modelPath:"stt_model/de/vosk_hub/13-05-2022-07-01-vosk-model-de-0.21.zip",domain:"general",suburl:"de-16",sampleRate:16e3,description:"Select this domain if you need transcriptions that are accurate across domains."}],el:[{modelPath:"stt_model/el/vosk_hub/13-05-2022-06-35-vosk-model-el-gr-0.7.zip",domain:"general",suburl:"el-16",sampleRate:16e3,description:"Select this domain if you need transcriptions that are accurate across domains."}],fa:[{modelPath:"stt_model/fa/vosk_hub/13-05-2022-06-36-vosk-model-fa-0.5.zip",domain:"general",suburl:"fa-16",sampleRate:16e3,description:"Select this domain if you need transcriptions that are accurate across domains."}],nl:[{modelPath:"stt_model/nl/vosk_hub/19-05-2022-15-16-vosk-model-nl-spraakherkenning-0.6.zip",domain:"general",suburl:"nl-16",sampleRate:16e3,description:"Select this domain if you need transcriptions that are accurate across domains."}],pt:[{modelPath:"stt_model/pt/vosk_hub/20-04-2022-14-18-vosk-model-small-pt-0.3.zip",domain:"general",suburl:"pt-16",sampleRate:16e3,description:"Select this domain if you need transcriptions that are accurate across domains."}],es:[{modelPath:"stt_model/es/vosk_hub/20-04-2022-14-24-vosk-model-small-es-0.22.zip",domain:"general",suburl:"es-16",sampleRate:16e3,description:"Select this domain if you need transcriptions that are accurate across domains."}],ca:[{modelPath:"stt_model/ca/vosk_hub/20-04-2022-14-28-vosk-model-small-ca-0.4.zip",domain:"general",suburl:"ca-16",sampleRate:16e3,description:"Select this domain if you need transcriptions that are accurate across domains."}],cs:[{modelPath:"stt_model/cs/vosk_hub/20-04-2022-14-55-vosk-model-small-cs-0.4-rhasspy.zip",domain:"general",suburl:"cs-16",sampleRate:16e3,description:"Select this domain if you need transcriptions that are accurate across domains."}],eo:[{modelPath:"stt_model/eo/vosk_hub/19-05-2022-15-04-vosk-model-small-eo-0.22.zip",domain:"general",suburl:"eo-16",sampleRate:16e3,description:"Select this domain if you need transcriptions that are accurate across domains."}],ja:[{modelPath:"stt_model/ja/vosk_hub/19-05-2022-15-05-vosk-model-small-ja-0.22.zip",domain:"general",suburl:"ja-16",sampleRate:16e3,description:"Select this domain if you need transcriptions that are accurate across domains."}],kk:[{modelPath:"stt_model/kz/vosk_hub/13-05-2022-06-45-vosk-model-kz-0.15.zip",domain:"general",suburl:"kz-16",sampleRate:16e3,description:"Select this domain if you need transcriptions that are accurate across domains."}],tr:[{modelPath:"stt_model/tr/vosk_hub/19-05-2022-14-53-vosk-model-small-tr-0.3.zip",domain:"general",suburl:"tr-16",sampleRate:16e3,description:"Select this domain if you need transcriptions that are accurate across domains."}],it:[{modelPath:"stt_model/it/vosk_hub/21-04-2022-08-19-vosk-model-small-it-0.4.zip",domain:"general",suburl:"it-16",sampleRate:16e3,description:"Select this domain if you need transcriptions that are accurate across domains."}],vn:[{modelPath:"stt_model/vn/vosk_hub/19-05-2022-14-57-vosk-model-small-vn-0.3.zip",domain:"general",suburl:"vn-16",sampleRate:16e3,description:"Select this domain if you need transcriptions that are accurate across domains."}],zh:[{modelPath:"stt_model/cn/vosk_hub/19-05-2022-14-16-vosk-model-cn-kaldi-multicn-0.15.zip",domain:"general",suburl:"cn-16",sampleRate:16e3,description:"Select this domain if you need transcriptions that are accurate across domains."}],or:[{modelPath:"stt_model/or/vosk_hub/30-05-2022-07-19-in-or-mucs-char-lmor1-musan-8k.zip",domain:"general",suburl:"or-8",sampleRate:8e3,description:"Select this domain if you need transcriptions that are accurate across domains."}]};e.exports={sttLanguageDomainModelMap:t,getSuburl:(e,a)=>{let o="";return t[e].forEach((e=>{e.domain===a&&(o=e.suburl)})),o},getSupportedSampleRate:(e,a)=>{let o=16e3;return t[e].forEach((e=>{e.suburl===a&&(o=e.sampleRate)})),o}}}},t={};function a(o){var i=t[o];if(void 0!==i)return i.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,a),s.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=a(529),t=a(76);window&&(window.VoiceType=class{constructor(e){if(!this.validateInit(e))throw new Error("Invalid initialization");let{authToken:a,language:o,domain:i,elementId:s,onRecordingStart:n,onRecordingStop:r,maxSpeakingDuration:l,platformUrl:c}=e;this.platformUrl=c,this.authToken=a,this.language=o,this.domain=i,this.suburl=(0,t.getSuburl)(o,i),this.streamUrl=`wss://${c||"platform.neuralspace.ai"}/stream/${this.suburl}/v1/live/transcribe/${this.authToken}/${Date.now()}`,this.inputElement=document.getElementById(s),this.maxSpeakingDuration=l||0,this.audioStream=null,this.recorder=null,this.recordingLength=0,this.supportedSampleRate=(0,t.getSupportedSampleRate)(this.language,this.suburl),this.connection=null,this.isConnecting=!1,this.isConnected=!1,this.channel=[],this.onRecordingStartCallback=n,this.onRecordingStopCallback=r,this.transcript="",this.currentValue="",this.startTime=0,console.info("Voice typing is successfully initialized 🎉")}connectStream=e=>{if(!this.isConnecting||!this.isConnecting&&this.isConnected){this.isConnecting=!0,console.info("Connecting...");const t=new WebSocket(this.streamUrl);t.addEventListener("open",(a=>{this.connection=t,e&&this.connection.send(e),this.isConnecting=!1,this.isConnected=!0,console.info("Connected successfully. Stream on 🎉")})),t.addEventListener("message",(e=>{if(e.data){const t=JSON.parse(e.data);if(!t.text)return;this.appendTranscription(t)}}))}};startRecording=()=>{if(navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia,!navigator.getUserMedia)return"getUserMedia not supported in this browser.";navigator.getUserMedia({audio:!0},(e=>{this.audioStream=e,this.onRecordingStart(),this.onRecordingStartCallback()}),(function(e){return"Error capturing audio."}))};onRecordingStart=()=>{this.currentValue=this.inputElement.value?this.inputElement.value+" ":"";let t=this.audioStream;const a=new(window.AudioContext||window.webkitAudioContext),o=a.sampleRate,i=a.createGain();a.createMediaStreamSource(t).connect(i);this.recorder=(a.createScriptProcessor||a.createJavaScriptNode).call(a,2048,1,1);let s=this.channel,n=this.recordingLength;this.recorder.onaudioprocess=t=>{const a=t.inputBuffer.getChannelData(0);let i=new Float32Array(a);s.push(i),n+=2048,n>20480&&((0,e.onRecieveChunk)(s,n,o,this.supportedSampleRate,this.onData),s=[],n=0)},i.connect(this.recorder),this.recorder.connect(a.destination),this.startTime=Date.now()};onData=e=>{this.connection?this.connection.send(e):this.connectStream(e)};appendTranscription=e=>{this.transcript=e.text;let t=this.currentValue+this.transcript;this.inputElement.value=t;const a=(Date.now()-this.startTime)/1e3;e.full&&(this.currentValue=t+" "),(0==this.maxSpeakingDuration&&e.full||this.maxSpeakingDuration>0&&a>this.maxSpeakingDuration)&&(this.transcript="",this.stopRecording(),console.log(`Last 🎤 session lasted for ${a} seconds`))};stopRecording=()=>{this.recorder&&(this.recorder.disconnect(),this.recorder=null,this.channel=[],this.recordingLength=0,this.audioStream.getTracks().forEach((function(e){e.stop()})),this.connection.close(),this.connection=null,this.onRecordingStopCallback())};validateInit=e=>{const{language:a,domain:o,elementId:i,onRecordingStart:s,onRecordingStop:n}=e;if(!t.sttLanguageDomainModelMap[a])throw new Error("Invalid language code");if(t.sttLanguageDomainModelMap[a]&&!(0,t.getSuburl)(a,o))throw new Error("Invalid domain for selected language");if(!document.getElementById(i))throw new Error("Specified input element does not exist");return s&&n||console.warn("No callbacks have been specified for start/stop recording states"),!0}})})()})();