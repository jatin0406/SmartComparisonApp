import React, { Component } from 'react';
// import Header from "./";
// import Footer from '../../components/Footer';
// import Contact from '../../components/Contact';
// import About from '../../Containers/About';
// import Categories from '../../components/Categories';
// import Deals from '../../components/Deals';

import  { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import Home from "../Containers/Home"
import Header from './Header';
import Deals from './Deals';
import Contact from './Contact';
import Footer from './Footer';
import Categories from './Categories';
import About from '../Containers/About';
import { Button } from '@material-ui/core';

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

// //
// function Header(props) {
//   // return <h1>Hello, {props.name}</h1>;
// }
// //
// class Head extends React.Component {
//   render() {
//     return (<>
//     <Header/>
//     {/* <button>KogOut</button> */}
//     </>);
//   }
// }




  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
          <Header />
            <Deals/>
            <Categories/>
            <About/>
            <Contact/>
            <Footer/>
      {/* <div >
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div> */}
    </>
  )
}

