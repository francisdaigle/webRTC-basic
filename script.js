/* 
 * script.js
 */

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

var constraints = {audio: true, video: true};
var video       = document.querySelector("video");

function successCallback(stream) {
    
    window.stream       = stream; // stream available to console
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    
    var audioContext = new AudioContext();
    var mediaStreamSource = audioContext.createMediaStreamSource(stream);
  
    if (window.URL) {
        video.src = window.URL.createObjectURL(stream);
    } else {
        video.src = stream;
    }
    
    mediaStreamSource.connect(audioContext.destination);
  
    video.play();
}

function errorCallback(error){
    console.log("navigator.getUserMedia error: ", error);
}

navigator.getUserMedia(constraints, successCallback, errorCallback);