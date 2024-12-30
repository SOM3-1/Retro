import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "./Carousel.css";
import GTA from './../../assets/images/GTA.jpg';
import Final_Fantasy from './../../assets/images/FinalFantasy.jpg';
import God_of_War from './../../assets/images/GodofWar.jpg';
import Burnout_3 from './../../assets/images/Burnout_3.jpg';
import ResidentEvil1 from './../../assets/images/ResidentEvil1.jpg';
import Metal_Gears_Solid_3 from './../../assets/images/MetalGearsSolid3.jpg';
import { TopBar } from "./TopBar";
import { useSelector, useDispatch } from "react-redux";
import { setScreen, setSelected } from "../store/uiSlice";
import MusicPlayer from "../music/MusicPlayer";

const games = [
  { 
    title: "GTA San Andreas", 
    description: "An action-adventure game set in an open world environment, developed by Rockstar Games.",
    imgSrc: GTA,
    releaseDate: "October 26, 2004",
    developer: "Rockstar North",
    genre: "Action-adventure",
    platform: "PlayStation 2",
    rating: "Mature (17+)",
    moreInfo: "San Andreas is set within the fictional U.S. state of San Andreas, which is heavily based on California and Nevada.",
    code:'GA'
  },
  { 
    title: "Final Fantasy X", 
    description: "A role-playing video game that introduced fully 3D backgrounds and voice acting for the first time in the series.",
    imgSrc: Final_Fantasy,
    releaseDate: "July 19, 2001",
    developer: "SquareSoft",
    genre: "Role-playing",
    platform: "PlayStation 2",
    rating: "Teen (13+)",
    moreInfo: "Final Fantasy X marked a significant shift in the series, featuring a rich story set in the world of Spira.",
    code: 'FF'
  },
  { 
    title: "Burn Out 3", 
    description: "A fast-paced racing game with an emphasis on aggressive driving and spectacular crashes.",
    imgSrc: Burnout_3,
    releaseDate: "September 8, 2004",
    developer: "Criterion Games",
    genre: "Racing",
    platform: "PlayStation 2",
    rating: "Everyone (10+)",
    moreInfo: "Burnout 3: Takedown added the popular 'Takedown' feature, which allows players to crash opponents into walls and other obstacles.",
    code: 'BO'
  },
  { 
    title: "God of War", 
    description: "An action-adventure game based on Greek mythology, following the journey of Kratos, a warrior seeking revenge.",
    imgSrc: God_of_War,
    releaseDate: "March 22, 2005",
    developer: "Santa Monica Studio",
    genre: "Action-adventure",
    platform: "PlayStation 2",
    rating: "Mature (17+)",
    moreInfo: "God of War introduced players to Kratos and his brutal fighting style, setting a new standard for action games.",
    code: 'GW'
  },
  { 
    title: "Resident Evil", 
    description: "A survival horror game where players explore a mansion filled with zombies and other terrifying creatures.",
    imgSrc: ResidentEvil1,
    releaseDate: "March 22, 1996",
    developer: "Capcom",
    genre: "Survival horror",
    platform: "PlayStation",
    rating: "Mature (17+)",
    moreInfo: "Resident Evil revolutionized the survival horror genre with its emphasis on resource management and atmosphere.",
    code: 'RE'
  },
  { 
    title: "Metal Gear Solid 3", 
    description: "A stealth action game that takes place during the Cold War, following the mission of Naked Snake.",
    imgSrc: Metal_Gears_Solid_3,
    releaseDate: "November 17, 2004",
    developer: "Kojima Productions",
    genre: "Stealth action",
    platform: "PlayStation 2",
    rating: "Mature (17+)",
    moreInfo: "Metal Gear Solid 3 is renowned for its detailed survival mechanics and deep, intricate storyline.",
    code: 'MS'
  }
];


const GameCarousel = () => {

  const selectedGame = useSelector((state) => state.ui.selectedGame);
  const [focusedGame, setFocusedGame] = useState(selectedGame || games[0]);
  const sliderRef = useRef();
  const dispatch = useDispatch();

  const initialSlideIndex = selectedGame 
  ? games.findIndex(game => game.title === selectedGame.title) 
  : 0;

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
    focusOnSelect: false,
    cssEase: "ease-in-out",
    fade: false,
    initialSlide: initialSlideIndex,
    afterChange: (current) => {
      const focusedIndex = current % games.length;
      setFocusedGame(games[focusedIndex]);
    },
    lazyLoad: false,
    slickDots: false
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (sliderRef.current) {
        if (event.key === "ArrowRight") {
          sliderRef?.current?.slickNext();
        } else if (event.key === "ArrowLeft") {
          sliderRef?.current?.slickPrev();
        }
        else if (event.key.toLowerCase() === "x") {
          if (focusedGame) {
            dispatch(setSelected(focusedGame));
            dispatch(setScreen(3));
          }
        }
        else if (event.key.toLowerCase() === "o") {
        dispatch(setScreen(1))
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [focusedGame]);

  const handleImageClick = (game) =>{
    dispatch(setSelected(game));
    dispatch(setScreen(3))
  }

  return (
    <>
      <div
        className="background"
        style={{
          backgroundImage: focusedGame.imgSrc ? `url(${focusedGame.imgSrc})` : "none",
          backgroundSize: 'cover',
        }}
      ></div>
      <TopBar />
      <div className="carousel-background">
        <div className="carousel-container" tabIndex={initialSlideIndex} ref={sliderRef}>
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
      </div>
      <div className="ps2-text-container">
        <div className="ps2-text">
          Press <span className="ps2-button ps2-button-x"> X</span> to Select
        </div>
        <div className="ps2-close-text">
          Press <span className="ps2-button ps2-button-o"> O</span> to Close
        </div>
      </div>
      <MusicPlayer/>
    </>
  );
};

export default GameCarousel;
