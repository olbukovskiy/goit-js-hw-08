import vimeoPlayer from '@vimeo/player';

const iframeVideo = document.querySelector('#vimeo-player');
const player = new vimeoPlayer(iframeVideo);
const throttler = require('lodash.throttle');

player.on('timeupdate', throttler(onPlay, 1000));

function onPlay(data) {
  localStorage.setItem('videoplayer-current-time', Math.round(data.seconds));
}

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {
    console.log('Current player time: ', seconds);
  })
  .catch(function (error) {
    console.log('Attention mate, we get an' + error.name + 'error here!');
  });
