import "./Carousel.css";
import achievementsIcon from "./../../assets/images/achievements.png";
import psIcon from "./../../assets/images/ps1.png"; 

export const TopBar = () => {
    return (
      <>
        <div className="top-left-info">
        <div className="icon-container">
            <img src={psIcon} alt="PlayStation Icon" className="ps-icon" />
          </div>
          <div className="player-info">Player: RetroGamer1987</div>
        </div>

        <div className="top-right-info">
          <div className="memory-card-info">Free Memory: 4.2 MB</div>
          <div className="achievements">
            <img src={achievementsIcon} alt="Achievements" className="achievements-icon" />
            <span className="achievements-count">3</span>
          </div>
        </div>
      </>
    );
};