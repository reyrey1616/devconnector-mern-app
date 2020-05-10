import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './components/layout/navbar.component';
import Landing from './components/layout/landing.component';
import Alert from './components/layout/alert.component';

import Register from './components/auth/register.component';
import Login from './components/auth/login.component';

const App = () => (
  <Fragment>
    <Router>
      <Navbar />
      <Route path='/' exact component={Landing} />

      <section className='container'>
        <Alert />
        <Switch>
          <Route path='/login' exact component={Login} />
          <Route path='/register' exact component={Register} />
        </Switch>
      </section>
    </Router>
  </Fragment>
);

export default App;
