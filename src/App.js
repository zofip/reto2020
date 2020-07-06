import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { SLASH } from './util/constants';
import Main from './pages/main/Main';

const App = () => (
  <Router>
    <Route path={SLASH} component={Main} />
  </Router>
);

export default App;
