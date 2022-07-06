const onRecieveChunk = (chunk, bufferSize, defaultSampleRate, sampleRate, onData) => {
    const PCM32fSamples = mergeBuffers(chunk, bufferSize);
    const PCM16iSamples = pcmRangeConverter(PCM32fSamples);
    const downsamples = downsampleBuffer(PCM16iSamples, sampleRate, defaultSampleRate);
    const audioBuffer = new Int16Array(downsamples);
    onData(audioBuffer)
}

const downsampleBuffer = (buffer, rate, sampleRate) => {
    if (rate === sampleRate) {
        return buffer;
    }
    if (rate > sampleRate) {
        return "downsampling rate show be smaller than original sample rate";
    }
    var sampleRateRatio = sampleRate / rate;
    var newLength = Math.round(buffer.length / sampleRateRatio);
    var result = new Float32Array(newLength);
    var offsetResult = 0;
    var offsetBuffer = 0;
    while (offsetResult < result.length) {
        var nextOffsetBuffer = Math.round((offsetResult + 1) * sampleRateRatio);
        // Use average value of skipped samples
        var accum = 0, count = 0;
        for (var i = offsetBuffer; i < nextOffsetBuffer && i < buffer.length; i++) {
            accum += buffer[i];
            count++;
        }
        result[offsetResult] = accum / count;
        // Or you can simply get rid of the skipped samples:
        // result[offsetResult] = buffer[nextOffsetBuffer];
        offsetResult++;
        offsetBuffer = nextOffsetBuffer;
    }
    return result;
}

const pcmRangeConverter = (PCM32fSamples) => {
    let PCM16iSamples = []
    for (let i = 0; i < PCM32fSamples.length; i++) {
        let val = Math.floor(32767 * PCM32fSamples[i]);
        val = Math.min(32767, val);
        val = Math.max(-32768, val);

        PCM16iSamples.push(val);
    }
    return PCM16iSamples
}

const mergeBuffers = (channelBuffer, recordingLength) => {
    let result = new Float32Array(recordingLength);
    let offset = 0;

    for (let i = 0; i < channelBuffer.length; i++) {
        result.set(channelBuffer[i], offset);
        offset += channelBuffer[i].length;
    }

    return Array.prototype.slice.call(result);
}
module.exports = {
    onRecieveChunk
}