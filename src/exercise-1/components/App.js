import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import { Link, Route, Switch } from 'react-router-dom';
import MyProfile from './MyProfile';
import AboutUs from './AboutUs';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div className="navigation">
            <Link to='/' style={{marginRight:'20px'}}>Home</Link>
            <Link to='/my-profile' style={{marginRight:'20px'}}>My Profile</Link>
            <Link to='/about-us' style={{marginRight:'20px'}}>About Us</Link>
          </div>
          <Switch>
            <Route path='/my-profile' component={MyProfile}></Route>
            <Route path='/about-us' component={AboutUs}></Route>
            <Route exact path='/' component={Home}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
