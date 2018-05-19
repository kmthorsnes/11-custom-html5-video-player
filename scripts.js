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

function updateButton(){
    const icon = this.paused ? '►' : '❚ ❚';
    console.log('icon');
    toggle.textContent = icon;
}

function skip() {
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
}

// Hook up event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));