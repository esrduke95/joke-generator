import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App/App';
import OneJoke from './components/oneJoke';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <OneJoke />
  </React.StrictMode>,
  document.getElementById('root'),
);
