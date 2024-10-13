import './App.css';
import GameCarousel from './components/Carousel/Carousel';
import { GamePage } from './components/gamePage/GamePage';
import { Ps2 } from './components/virtualConsole/Ps2';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const screen = useSelector((state) => state.ui.screen); 
  return (
    <div className="App">
    {screen === 1 && <Ps2 />} 
      {screen === 2 && <GameCarousel />}  
      {screen === 3 && <GamePage />}  
    </div>
  );
}
export default App;