import React from 'react';

const Playlist = ({ playlist, currentTrack, setCurrentTrack }) => {
  return (
    <div className="winamp-playlist">
      <h3>Playlist</h3>
      <ul>
        {playlist.map((track, index) => (
          <li
            key={index}
            className={index === currentTrack ? 'active' : ''}
            onClick={() => setCurrentTrack(index)}
          >
            {track.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;