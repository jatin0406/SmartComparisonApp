import React, { useRef, useState } from "react"
// import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { Button, Grid, TextField } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
// import React from 'react'
import LockOpenIcon from '@material-ui/icons/LockOpen';
import "../Containers/SignUp/signup.css"
import { NavLink } from 'react-router-dom';
import { Alert } from "@material-ui/lab"

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/login")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <>
     
      <div className="main-container">
        <div className="container">
        <h1>Signup</h1>
        <form className="form" onSubmit={handleSubmit}>
        {error && <Alert variant="danger">{error}</Alert>}
       <div className="form-main">
       <Grid container spacing={2} alignItems="center">
          <Grid item>
            <AccountCircle />
            
          </Grid>
          <Grid item>
            {/* <TextField id="input-with-icon-grid" label="Username" /> */}
            <input id="email" type="email" ref={emailRef} placeholder="Email" required/>
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <LockOpenIcon/>
            
          </Grid>
          <Grid item>
            {/* <TextField id="input-with-icon-grid" label="Password" /> */}
            <input id="password" type="password" ref={passwordRef} placeholder="Password" required/>
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <LockOpenIcon/>
            
          </Grid>
          <Grid item>
            {/* <TextField id="input-with-icon-grid" label="Password" /> */}
            <input id="password-confirm" type="password" ref={passwordConfirmRef} placeholder="ConfirmPassword" required/>
          </Grid>
        </Grid>
       </div>
        <Button disabled={loading} className="w-100" type="submit" size="large"  variant="contained" color="primary" >
            Signup
        </Button>
        </form>
        <div className="forgot">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
        {/* <h3>Or</h3> */}
        {/* <NavLink exact  activeClassName='active_class' to='/login'><h4>Login</h4></NavLink> */}
        </div>
        </div>

    </>

  )
}


//////////////

