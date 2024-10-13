import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { setScreen } from "../store/uiSlice";
import "./GamePage.css"; 
import "./../Carousel/Carousel.css"

export const GamePage = () => {
  const dispatch = useDispatch();
  const selectedGame = useSelector((state) => state.ui.selectedGame);

  const handleStartGame = () => {
    console.log("Start Game", selectedGame?.title);
  };

  const handleCancel = () => {
    dispatch(setScreen(2));
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
        if (event.key.toLowerCase() === "o") {
        dispatch(setScreen(2))
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (!selectedGame) {
    return <div>No game selected!</div>;
  }

  return (
    <div className="game-page" style={{ backgroundImage: `url(${selectedGame.imgSrc})` }}>
      <div className="left-half">
        <div className="game-card">
          <img src={selectedGame.imgSrc} alt={selectedGame.title} className="game-images" />
          <h1 className="game-title">{selectedGame.title}</h1>
          <p className="game-description">{selectedGame.description}</p>
          <ul className="game-details">
            <li><strong>Release Date:</strong> {selectedGame.releaseDate}</li>
            <li><strong>Developer:</strong> {selectedGame.developer}</li>
            <li><strong>Genre:</strong> {selectedGame.genre}</li>
            <li><strong>Platform:</strong> {selectedGame.platform}</li>
            <li><strong>Rating:</strong> {selectedGame.rating}</li>
            <li><strong>More Info:</strong> {selectedGame.moreInfo}</li>
          </ul>
        </div>
      </div>
      <div className="right-half">
        <div className="retro-controls">
          <button className="retro-btn start-btn" onClick={handleStartGame}>
            Start Game
          </button>
          <button className="retro-btn cancel-btn" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
      <div className="ps2-text-container">
        <div className="ps2-text">
        </div>
        <div className="ps2-close-text">
          Press <span className="ps2-button ps2-button-o"> O</span> to Close
        </div>
      </div>
    </div>
  );
};

export default GamePage;
