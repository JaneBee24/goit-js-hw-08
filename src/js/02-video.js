import VimeoPlayer from 'vimeo-player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);

const storedTime = localStorage.getItem('videoplayer-current-time');
if (storedTime !== null) {
  const currentTime = parseFloat(storedTime);
  player.setCurrentTime(currentTime);
}

player.on('timeupdate', throttle(function(event) {
  const currentTime = event.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime);
}, 1000));

window.addEventListener('beforeunload', function() {
  player.getCurrentTime().then(function(currentTime) {
    localStorage.setItem('videoplayer-current-time', currentTime);
  });
});
