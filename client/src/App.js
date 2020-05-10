import React, { Fragment } from 'react';
import Navbar from './components/layout/navbar.component';
import Landing from './components/layout/landing.component';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

const App = () => (
  <Fragment>
    <Router>
      <Navbar />
      <Route path='/' exact component={Landing} />
    </Router>
  </Fragment>
);

export default App;
