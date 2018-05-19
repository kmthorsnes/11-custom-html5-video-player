// get elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('[player__slider]');

// Build functions //
function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}
// alternative 
/* function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
} */


// Hook up event listeners
video.addEventListener('click', togglePlay);