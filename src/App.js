import React from 'react';
import logo from './logo.svg';
import {Route,Switch} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './Containers/About';
import Categories from './components/Categories';

function App() {
  return (
    <>
    <Header/>
    <Categories/>
    <About/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
