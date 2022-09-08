import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";
import styles from '../pages/Banner.module.css'

const sources = {
  tournament:
    "https://vod-progressive.akamaized.net/exp=1662679300~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3934%2F19%2F494674979%2F2233580415.mp4~hmac=9b98bb548c5dd232640eaa4adbef7c34b2190ae72aa94d09721168661963dcb9/vimeo-prod-skyfire-std-us/01/3934/19/494674979/2233580415.mp4",
};

const Video = (props) => {
  const ref = useRef();

  const [source, setSource] = useState(sources.tournament);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);

  const play = () => setPlaying(true);
  const pause = () => setPlaying(false);
  const mute = () => setMuted(true);
  const unmute = () => setMuted(false);

  return (
    <div>
      <div>
        <ReactPlayer
          ref={ref}
          url={source}
          playing={playing}
          muted={muted}
          unmute={unmute}
        />
      </div>

      <br />

      <div>
        <button onClick={play}>Play</button>
        <button onClick={pause}>Pause</button>
        <button onClick={mute}>Mute</button>
        <button onClick={unmute}>Unmute</button>
      </div>
    </div>
  );
};

export default Video;
