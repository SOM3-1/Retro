import './console.css';
import psLogo from './../../assets/images/psLogo.png'

const VirtualPS2 = () => {
  const handleStartClick = () => {
    console.log('PS2 Start button clicked!');
  };

  return (
    <div className="ps2">
      <div className="ps2Layer topLayer"> <div className='font-face'>PS2</div>
      <div className='logo'>
      <img  className='logo' src={psLogo} alt="Logo" /></div>
        <button className="ps2StartButton" onClick={handleStartClick}>
          <div style={{display:'flex',}}>
          <div style={{marginRight: '10px',fontSize: '5px', fontFamily: ''}}>RESET</div>
          <div style={{fontSize: '5px'}}>&#x7C; / 
          &#x23FB;</div></div>
        </button></div>
      <div className="ps2Layer middleLayer"></div>
      <div className="ps2Layer bottomLayer">
      </div>
    </div>
  );
};

export default VirtualPS2;
