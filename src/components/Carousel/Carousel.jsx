import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "./Carousel.css"; 
import GTA from './../../assets/images/GTA.jpg';
import Final_Fantasy from './../../assets/images/Final Fantasy.jpg';
import God_of_War from './../../assets/images/God of War.jpg';
import Burnout_3 from './../../assets/images/Burnout_3.jpg';
import ResidentEvil1 from './../../assets/images/ResidentEvil1.jpg';
import Metal_Gears_Solid_3 from './../../assets/images/Metal Gears Solid 3.jpg';
import Modal from './Modal';

const games = [
  { title: "GTA San Andreas", description: "An action-adventure game.", imgSrc: GTA },
  { title: "Final Fantasy X", description: "A role-playing video game.", imgSrc: Final_Fantasy },
  { title: "Burn Out 3", description: "A racing video game.", imgSrc: Burnout_3 },
  { title: "God of War", description: "An action-adventure game based on Greek mythology.", imgSrc: God_of_War },
  { title: "Resident Evil", description: "A survival horror video game.", imgSrc: ResidentEvil1 },
  { title: "Metal Gears Solid 3", description: "A stealth action video game.", imgSrc: Metal_Gears_Solid_3 },
];

const GameCarousel = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  const [focusedGame, setFocusedGame] = useState(games[0]); 
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
    focusOnSelect: true,
    cssEase: "ease-in-out",
    fade: false,
    afterChange: (current) => {
      const focusedIndex = current % games.length;
      setFocusedGame(games[focusedIndex]);
    }, 
  };

  const handleImageClick = (game) => {
    setSelectedGame(game);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedGame(null);
  };

  return (
    <div 
      className="background" 
      style={{ backgroundImage: `url(${focusedGame.imgSrc})`, backgroundSize: 'cover' }}
    > 
      <div className="carousel-background">
        <div className="carousel-container" tabIndex="0" ref={sliderRef}>
          <Slider ref={sliderRef} {...settings}>
            {games.map((game, index) => (
              <div key={index} className="game-slide" onClick={() => handleImageClick(game)}>
                <div className="game-info">
                  <img src={game.imgSrc} alt={game.title} className="game-image" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <Modal isOpen={modalOpen} onClose={handleCloseModal} game={selectedGame} />
      </div>
    </div>
  );
};

export default GameCarousel;
