import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './components/layout/navbar.component';
import Landing from './components/layout/landing.component';
import Alert from './components/layout/alert.component';

import Register from './components/auth/register.component';
import Login from './components/auth/login.component';

import Dashboard from './components/dashboard/dashboard';

import store from './store';
import { Provider } from 'react-redux';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Fragment>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Route path='/' exact component={Landing} />

          <section className='container'>
            <Alert />
            <Switch>
              <Route path='/login' exact component={Login} />
              <Route path='/register' exact component={Register} />
              <Route path='/dashboard' exact component={Dashboard} />
            </Switch>
          </section>
        </Router>
      </Provider>
    </Fragment>
  );
};

export default App;
