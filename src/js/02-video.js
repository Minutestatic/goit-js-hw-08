import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const PLAYBACK_TIME_KEY = 'videoplayer-current-time';

function updatePlaybackTime(data) {
  localStorage.setItem(PLAYBACK_TIME_KEY, JSON.stringify(data.seconds));
}

player.on('timeupdate', throttle(updatePlaybackTime, 1000));

const currentTime = JSON.parse(localStorage.getItem(PLAYBACK_TIME_KEY));

player.setCurrentTime(0 || currentTime);
