import React, { Component } from 'react';
import './App.css';
// import fire from './config/Fire';
// import Home from './Home';
// import Login from './Login';

// import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import './App.css';
import Home from './Containers/Home';
import Login from './Containers/Login';
import Signup from './Containers/SignUp';
import deals from './components/Deals';
import ProductCard from './components/ProductCard';






function App() {
  return (
    <>
  {/* <Home/> */}

  <Switch>
    <Route  path="/" component={Home}/>
    <Route  path="/login" component={Login}/>
    <Route  path="/register" component={Signup}/>
    <Route  path="/deals" component={deals}/>
    {/* <Route exact path="/register" component={Register}/> */}
    <Route path="/productCard" component={ProductCard}/>
  </Switch>


    </>
  );
}

export default App;
