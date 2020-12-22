import React, { useRef, useState } from "react"
import { Form, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import  { Component } from 'react';
// import { Link } from 'react-router-dom';
// import fire from './config/Fire';
// import fire from '../../config/fire';

import { Button, Grid, TextField } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
// import React from 'react'
import LockOpenIcon from '@material-ui/icons/LockOpen';
import "../Containers/Login/login.css"
import { NavLink } from 'react-router-dom';

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to log in "+emailRef.current.value +passwordRef.current.value)
    }

    setLoading(false)
  }

  return (
    <>

      <div className="main-container">
        <div className="container">
        <h1>Login</h1>
        {error && <Alert variant="danger">{error}</Alert>}
        <form className="form" onSubmit={handleSubmit}>
       <div className="form-main">
       <Grid container spacing={2} alignItems="center">
          <Grid item>
            <AccountCircle />
            
          </Grid>
          <Grid item>
            {/* <TextField id="email" type="email" ref={emailRef} required label="E-mail"  /> */}
            <input id="email" type="email" ref={emailRef} required placeholder="E-mail" />          
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <LockOpenIcon/>
            
          </Grid>
          <Grid item>
            {/* <TextField id="password" name="password"  type="password" ref={passwordRef} required label="Password" /> */}
            <input id="password" name="password"  type="password" ref={passwordRef} required placeholder="Password" />
          </Grid>
        </Grid>
       </div>
        <Button disabled={loading}  type="submit" size="large"  variant="contained" color="primary" >
            Login
        </Button>
        </form>
        <div className="forgot">
        <Link to="/forgot-password">Forgot Password?</Link>
        </div>
        {/* <h3>Or</h3> */}
        <NavLink exact  activeClassName='active_class' to='/signup'><h4>Sign Up</h4></NavLink>
        </div>
        </div>
    </>
  )
}