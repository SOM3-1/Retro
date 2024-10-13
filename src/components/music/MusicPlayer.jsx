import React, { useState, useRef, useEffect } from 'react';
import { FaMusic } from 'react-icons/fa';
import "./Music.css";

const musicFiles = [
    "/music/1.mp3",
    "/music/2.mp3",
    "/music/3.mp3",
    "/music/4.mp3",
    "/music/5.mp3",
    "/music/6.mp3",
    "/music/7.mp3"
];

const MusicPlayer = () => {
  const [isMuted, setIsMuted] = useState(true); 
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false); // Track if the song is playing
  const audioRef = useRef(new Audio());

  const shuffleAndPlay = () => {
    const randomIndex = Math.floor(Math.random() * musicFiles.length);
    const selectedSong = musicFiles[randomIndex];
    setCurrentSong(selectedSong);
    audioRef.current.src = selectedSong;
    audioRef.current.muted = isMuted;

    // Ensure the audio resource is fully loaded before playing
    audioRef.current.oncanplay = () => {
      audioRef.current.play();
      setIsPlaying(true);
      setIsMuted(false); // Ensure it's unmuted once a song plays
    };
    
    // Load the new song
    audioRef.current.load();
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key.toLowerCase() === 's') {
        shuffleAndPlay(); 
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      audioRef.current.pause();
    };
  }, [isMuted, isPlaying]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className='contain'>
      <div
        onClick={togglePlay}
        style={{
          cursor: 'pointer',
          fontSize: '50px',
          position: 'relative',
          display: 'inline-block',
        }}
      >
        <FaMusic
          style={{
            textDecoration: isMuted ? 'line-through' : 'none', 
          }}
        />
        {isMuted && (
          <div
            style={{
              position: 'absolute',
              top: '30%',
              left: 0,
              width: '130%',
              height: '10px',
              backgroundColor: 'black',
              transform: 'rotate(135deg)',
            }}
          />
        )}
      </div>

      <button onClick={toggleMute}>
        {isMuted ? 'Unmute' : 'Mute'}
      </button>
    </div>
  );
};

export default MusicPlayer;
