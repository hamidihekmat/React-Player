import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';

import { usePlay } from '../hooks/usePlay';
import { fmtMSS } from '../utils/formatTime';

// Zustand
import { useIsPlaying } from '../store/store';

function Player({ currentSong, forwardHandler, previousHandler }) {
  const isPlaying = useIsPlaying((state) => state.isPlaying);
  const audioRef = useRef(null);
  const [songInfo, playSongHandler, timeUpdateHandler, dragHandler] = usePlay(
    audioRef
  );
  return (
    <div className="player">
      <div className="time-control">
        <p>{fmtMSS(songInfo.currentTime)}</p>
        <input
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          onChange={dragHandler}
          type="range"
        />
        <p>{fmtMSS(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={previousHandler}
          className="skip-back"
          icon={faAngleLeft}
          size="2x"
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          icon={isPlaying ? faPause : faPlay}
          size="2x"
        />
        <FontAwesomeIcon
          className="skip-forward"
          icon={faAngleRight}
          onClick={forwardHandler}
          size="2x"
        />
        <audio
          autoPlay
          onTimeUpdate={timeUpdateHandler}
          ref={audioRef}
          src={currentSong.audio}
        ></audio>
      </div>
    </div>
  );
}

export default Player;
