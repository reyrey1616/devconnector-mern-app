import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './components/layout/navbar.component';
import Landing from './components/layout/landing.component';
import Alert from './components/layout/alert.component';

import Register from './components/auth/register.component';
import Login from './components/auth/login.component';

import Dashboard from './components/dashboard/dashboard.component';
import CreateProfile from './components/profile-form/create-profile.component';
import EditProfile from './components/profile-form/edit-profile.component';
import AddExperience from './components/profile-form/add-experience.component';
import AddEducation from './components/profile-form/add-education.component';
import Profiles from './components/profiles/profiles.component';
import Profile from './components/profile/profile.component';

import Posts from './components/posts/posts.component';
import Post from './components/post/post.component';

import PrivateRoute from './components/routing/PrivateRoute.component';

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
              <Route path='/profiles' exact component={Profiles} />
              <Route path='/profile/:id' exact component={Profile} />
              <PrivateRoute path='/dashboard' exact component={Dashboard} />
              <PrivateRoute
                path='/create-profile'
                exact
                component={CreateProfile}
              />
              <PrivateRoute
                path='/edit-profile'
                exact
                component={EditProfile}
              />
              <PrivateRoute
                path='/add-experience'
                exact
                component={AddExperience}
              />
              <PrivateRoute
                path='/add-education'
                exact
                component={AddEducation}
              />

              {/* Post routes */}
              <PrivateRoute path='/posts' exact component={Posts} />
              <PrivateRoute path='/posts/:id' exact component={Post} />
            </Switch>
          </section>
        </Router>
      </Provider>
    </Fragment>
  );
};

export default App;
