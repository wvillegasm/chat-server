"use strict";

const WebRTC2Images = require('webrtc2images');

const rtc = new WebRTC2Images({
    width: 200,
    height: 200,
    frames: 10,
    type: 'image/jpeg',
    quality: 0.4,
    interval: 200
});

const recordBtn = document.getElementById('recordBtn');
console.log(recordBtn);

rtc.startVideo((err)=> {

});


recordBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    // open the computer cam
    rtc.recordVideo((err, frames)=>{

    });
});