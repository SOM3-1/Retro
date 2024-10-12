import './App.css';
import { Ps2 } from './components/virtualConsole/Ps2';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <Router>
        <Routes>
        <Route path="/" element={<div>Hello</div>} />

          <Route path="/console" element={<Ps2 />} />
          <Route path="/games" element={<Ps2 />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;