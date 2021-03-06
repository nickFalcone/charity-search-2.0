import './index.css';

import { worker } from 'mocks/browser';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// mock response when in test
if (process.env.NODE_ENV === 'test') {
  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
