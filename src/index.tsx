import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/variables.css';
import './styles/global.css';
import '@ansira/ui-kit';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);