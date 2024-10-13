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
  const audioRef = useRef(new Audio());

  const shuffleAndPlay = () => {
    const randomIndex = Math.floor(Math.random() * musicFiles.length);
    const selectedSong = musicFiles[randomIndex];
    setCurrentSong(selectedSong);
    audioRef.current.src = selectedSong;
    // audioRef.current.play();
    // setIsMuted(false);
  };

  const  shuffle = () => {
    const randomIndex = Math.floor(Math.random() * musicFiles.length);
    const selectedSong = musicFiles[randomIndex];
    setCurrentSong(selectedSong);
    audioRef.current.src = selectedSong;
    audioRef.current.play();
    setIsMuted(false);

  }
  useEffect(() => {
    shuffleAndPlay(); 
    audioRef.current.muted = true;  

    const handleKeyDown = (event) => {
      if (event.key.toLowerCase() === 's') {
        shuffle(); 
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      audioRef.current.pause();
    };
  }, []);

  const togglePlay = () => {
    if (isMuted) {
      audioRef.current.muted = false;
      audioRef.current.play();
    } else {
      audioRef.current.muted = true;
      audioRef.current.pause();
    }
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
    </div>
  );
};

export default MusicPlayer;
