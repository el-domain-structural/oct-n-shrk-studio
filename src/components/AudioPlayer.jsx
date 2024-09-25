import React, { useState, useRef } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2 } from 'lucide-react';
import Playlist from './Playlist';
import '../styles/WinampSkin.css';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const audioRef = useRef(null);

  const playlist = [
    { title: 'Track 1', src: 'https://example.com/track1.mp3' },
    { title: 'Track 2', src: 'https://example.com/track2.mp3' },
    { title: 'Track 3', src: 'https://example.com/track3.mp3' },
  ];

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const playNext = () => {
    setCurrentTrack((currentTrack + 1) % playlist.length);
  };

  const playPrevious = () => {
    setCurrentTrack((currentTrack - 1 + playlist.length) % playlist.length);
  };

  return (
    <div className="winamp-player">
      <div className="winamp-main">
        <audio
          ref={audioRef}
          src={playlist[currentTrack].src}
          onEnded={playNext}
        />
        <div className="winamp-info">
          <div className="winamp-title">{playlist[currentTrack].title}</div>
        </div>
        <div className="winamp-controls">
          <button onClick={playPrevious} className="winamp-button">
            <SkipBack size={16} />
          </button>
          <button onClick={togglePlay} className="winamp-button">
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
          </button>
          <button onClick={playNext} className="winamp-button">
            <SkipForward size={16} />
          </button>
          <div className="winamp-volume">
            <Volume2 size={16} />
            <input type="range" min="0" max="1" step="0.1" defaultValue="1" />
          </div>
        </div>
      </div>
      <Playlist playlist={playlist} currentTrack={currentTrack} setCurrentTrack={setCurrentTrack} />
    </div>
  );
};

export default AudioPlayer;