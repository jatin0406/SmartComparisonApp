import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import fire from './config/Fire';
// import fire from '../../config/fire';

import { Button, Grid, TextField } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
// import React from 'react'
import LockOpenIcon from '@material-ui/icons/LockOpen';
import './login.css'
import { NavLink } from 'react-router-dom';

function Login() {
    return (
      <>
        <div className="main-container">
        <div className="container">
        <h1>Login</h1>
        <form className="form">
       <div className="form-main">
       <Grid container spacing={2} alignItems="center">
          <Grid item>
            <AccountCircle />
            
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="E-mail"  />
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <LockOpenIcon/>
            
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Password"  name="password"  id="exampleInputPassword1"  />
          </Grid>
        </Grid>
       </div>
        <Button  size="large"  variant="contained" color="primary" >
            Login
        </Button>
        </form>
        <h3>Or</h3>
        <NavLink exact  activeClassName='active_class' to='/register'><h4>Sign Up</h4></NavLink>
        </div>
        </div>
        </>

    );
  }

export default Login;
