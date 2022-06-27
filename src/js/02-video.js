import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframePl = document.querySelector('#vimeo-player');

let videoPlayerCurrentTime;
const player = new Player(iframePl);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(event) {
  console.dir(event.seconds);
  videoPlayerCurrentTime = event.seconds;
  localStorage.setItem('videoPlayerCurrentTime', videoPlayerCurrentTime);
}

const sec = localStorage.getItem('videoPlayerCurrentTime');
if (sec !== null) {
  player.setCurrentTime(sec);
}
