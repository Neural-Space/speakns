
![Logo](https://platform.neuralspace.ai/static/media/logo.e09c49e6.svg)


# Speakns

Speakns ( pronounced "Speak NS" ) is a Javascript library that enables Voice typing on any input/textarea element by using Neural Space Speech-To-Text Streaming API.

## Pre-requisites

You need a NeuralSpace platform auth code to be able to initialize the library.

Sign up is free and you get free credits too.

Sign in to the [NeuralSpace platform](https://platform.neuralspace.ai/)

You can copy the auth code on the top right corner of the platform

**Screenshot here**







## Features

- Enable Voice typing on Input/Textarea elements
- Callback events for *onRecordingStart* and  *onRecordingStop* events
- Configurable maximum speaking duration
- Cross browser compatibility


## Installation

### Install speakns 

With npm

```bash
  npm install speakns --save
```
From cdn
```javascript
<script src="https://jsdeliver/neuralspace/speakns/dist/bundle.js">
```

Usage

```javascript
import VoiceType from "speakns";

let voiceType = new VoiceType({
    authToken: "<YOUR_NEURALSPACE_AUTH_TOKEN>",
    language: "en", // Your speaker's language
    domain: "general", // Refer documentation for available domains
    elementId: "mytext", // Id of the input/textarea element on which you want to initialize voice typing
    onRecordingStart : function recordingStarted(){
        // Callback fired once the recording starts
    },
    onRecordingStop : function recordingStopped(){
        // Callback fired once the recording stops
    },
    maxSpeakingDuration: 10 // (In seconds) Automatically stop recording after configuring the interval here
  });
```

Use the `voiceType` object apis to start and stop recording

To Start recording

```javascript
voiceType.startRecording()
```

To Stop recording

```javascript
voiceType.stopRecording()
```