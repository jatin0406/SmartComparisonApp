import React, { Component } from 'react';
// import fire from './config/Fire';
// import React from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Contact from '../../components/Contact';
import About from '../../Containers/About';
import Categories from '../../components/Categories';
import Deals from '../../components/Deals';




  function Home()
    // render() 
    {
        return (
            <>
            <Header/>
                <Deals/>
                <Categories/>
                <About/>
                <Contact/>
                <Footer/>
            </>
            
           
);

    }



export default Home;




