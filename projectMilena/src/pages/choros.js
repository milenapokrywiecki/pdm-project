// import React, { Component } from 'react';
// import Sound from 'react-native-sound';
const Sound = require('react-native-sound')

const sound = new Sound('choro.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
        console.log('failed to load the sound', error);
    } else { // loaded successfully
        console.log('duration in seconds: ' + sound.getDuration() +
            'number of channels: ' + sound.getNumberOfChannels());
    }
})

sound.play((success) => {
    if (success) {
        console.log('successfully finished playing');
    } else {
        console.log('playback failed due to audio decoding errors');
    }
});

sound.setNumberOfLoops(-1);

//sound.stop();