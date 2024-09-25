import React, { useState, useRef } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2 } from 'lucide-react';
import Playlist from './Playlist';
import '../styles/WinampSkin.css';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const audioRef = useRef(null);

  const playlist = [
    { 
      title: 'Vechno 4 (Preview)',
      src: 'https://octoshark.bandcamp.com/track/vechno-4',
      isPreview: true
    },
    { 
      title: 'Summer Smoothie',
      src: 'https://github.com/BelaProDev/playground/raw/refs/heads/main/Summer-Smoothie.mp3'
    },
    { 
      title: 'Bruxelas à Minuit',
      src: 'https://github.com/BelaProDev/playground/raw/refs/heads/main/Bruxelas%20%C3%A0%20Minuit.mp3'
    },
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

  const openPreviewLink = () => {
    if (playlist[currentTrack].isPreview) {
      window.open(playlist[currentTrack].src, '_blank');
    }
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
          {playlist[currentTrack].isPreview && (
            <button onClick={openPreviewLink} className="winamp-preview-button">
              Open Preview
            </button>
          )}
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
