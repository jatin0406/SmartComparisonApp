import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import './App.css';
import Home from './Containers/Home';
import Login from './Containers/Login';
import Signup from './Containers/SignUp';
import deals from './components/Deals';


function App() {
  return (
    <>
  {/* <Home/> */}

  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/register" component={Signup}/>
    <Route exact path="/deals" component={deals}/>
    {/* <Route exact path="/register" component={Register}/> */}
  </Switch>


    </>
  );
}

export default App;
