import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './assets/fonts/ps2.ttf';
import './assets/fonts/ps2_1.ttf'
import './assets/fonts/Chalice.ttf'
import './assets/fonts/Johnny.otf'
import './assets/fonts/MyGirlIsRetro.ttf'
import './assets/fonts/rimouski.otf'
import { Provider } from 'react-redux';
import { store } from './components/store/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
