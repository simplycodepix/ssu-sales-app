import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import HomePage from '../pages/home';
import LoginPage from '../pages/login';
import RegistrationPage from '../pages/registration';
import { AuthContext } from '../store/AuthProvider';
import Header from '../components/Header/Header';
import StatsPage from '../pages/stats';
import ProfilePage from '../pages/profile';

function App() {
  const { authenticated, user } = useContext(AuthContext);
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/"><HomePage /></Route>
          <Route exact path="/stats"><StatsPage /></Route>
          <Route exact path="/profile" render={(props) => !authenticated || !user ? <Redirect to="/" /> : <ProfilePage {...props} />} />
          <Route exact path="/registration" render={(props) => authenticated ? <Redirect to="/" /> : <RegistrationPage {...props} />} />
          <Route exact path="/login" render={(props) => authenticated ? <Redirect to="/" /> : <LoginPage {...props} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
