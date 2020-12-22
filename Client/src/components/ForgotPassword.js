import React, { useRef, useState } from "react"
import { Form,  Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, NavLink } from "react-router-dom"
import "../Containers/SignUp/signup.css"
import { Button, Grid, TextField } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
// import React from 'react'
import LockOpenIcon from '@material-ui/icons/LockOpen';

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

  return (
    <>
      {/* <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Password Reset</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Reset Password
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/login">Login</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div> */}


      <div className="main-container">
        <div className="container">
        <h1>Forgot Password</h1>
        {error && <Alert variant="danger">{error}</Alert>}
        <form className="form" onSubmit={handleSubmit}>
       <div className="form-main">
       <Grid container spacing={2} alignItems="center">
          <Grid item>
            <AccountCircle />
            
          </Grid>
          <Grid item>
            {/* <TextField id="email" type="email" ref={emailRef} required label="E-mail"  /> */}
            <input id="email" type="email" ref={emailRef} required label="E-mail" placeholder="Enter your email"/>          
          </Grid>
        </Grid>

       </div>
        <Button disabled={loading}  type="submit" size="large"  variant="contained" color="primary" >
        Reset Password
        </Button>
        </form>
        <div className="forgot">
        <Link to="/login">Login?</Link>
        </div>
        {/* <h3>Or</h3> */}
        <NavLink exact  activeClassName='active_class' to='/signup'><h4>Sign Up</h4></NavLink>
        </div>
        </div>

    </>
  )
}