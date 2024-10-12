import React from "react";
import Slider from "react-slick";
import "./Carousel.css"; 
const games = [
  {
    title: "GTA San Andreas",
    highScore: "1638820: AAA",
    description: "Description",
    imgSrc: "path_to_image1", 
  },
  {
    title: "FInal Fantasy X",
    highScore: "999999: BBB",
    description: "Description",
    imgSrc: "path_to_image2", 
  },
  {
    title: "Burn Out 3",
    highScore: "450000: CCC",
    description: "Description",
    imgSrc: "path_to_image3", 
  },
  {
    title: "God of War",
    highScore: "999999: DDD",
    description: "Description",
    imgSrc: "path_to_image4", 
  },
  {
    title: "Resident Evil",
    highScore: "350000: EEE",
    description: "Description",
    imgSrc: "path_to_image5", 
  },
  {
  title: "Metal gears solid 3",
  highScore: "350000: EEE",
  description: "Description",
  imgSrc: "path_to_image5",
},
];

const GameCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 3000, // To simulate PS2 auto-scroll
    cssEase: "ease-in-out",
    fade: false,
  };

  return (
    <div className="carousel-background">
      <div className="carousel-container">
        <Slider {...settings}>
          {games.map((game, index) => (
            <div key={index} className="game-slide">
              <div className="game-info">
                <img src={game.imgSrc} alt={game.title} className="game-image" />
                <h2>{game.title}</h2>
                <p>{game.year}</p>
                <p>{game.players}</p>
                <p>High Score: {game.highScore}</p>
                <p>{game.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default GameCarousel;
