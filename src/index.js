import React from 'react';
import ReactDOM from 'react-dom';
import Game from './Components/Game';
import './index.css';
import "./CSS/App.css";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Game/>, document.getElementById('root'));
registerServiceWorker();
