import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import { Route, Switch, NavLink } from 'react-router-dom';
import MyProfile from './MyProfile';
import AboutUs from './AboutUs';
import Home from './Home';
import Products from './Products';
import Product from './Product';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <header>
            <NavLink className="headerLink" exact to='/' activeClassName="select">Home</NavLink>
            <NavLink className="headerLink" to='/products' activeClass="select">Products</NavLink>
            <NavLink className="headerLink" to='/my-profile' activeClassName="select">My Profile</NavLink>
            <NavLink className="headerLink" to='/about-us' activeClassName="select">About Us</NavLink>
          </header>
          <main>
            <Switch>
              <Route path='/my-profile' component={MyProfile}></Route>
              <Route path='/about-us' component={AboutUs}></Route>
              <Route path='/products/:id' component={Product}></Route>
              <Route path='/products' component={Products}></Route>
              <Route path='/goods' component={Products}></Route>
              <Route path='/' component={Home}></Route>
            </Switch>
          </main>
          
        </Router>
      </div>
    );
  }
}

export default App;
