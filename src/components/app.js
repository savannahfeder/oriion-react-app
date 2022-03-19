import { Route, Switch } from 'react-router-dom';
import React from 'react';

import FullPage from './full-page';
import Popup from './popup';
import '../css/index.css';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={FullPage} />
        <Route exact path="/popup" component={Popup} />
      </Switch>
    </div>
  );
};

export default App;
