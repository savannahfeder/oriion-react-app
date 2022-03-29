import { HashRouter as Router } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/popup">
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
