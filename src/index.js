import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./components/Apresentations/InitialPage/App.js"
import './index.css';
import GameScreen from './components/GameScreen/GameScreen.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GameScreen />
  </React.StrictMode>
);
