import { Button, Grid, TextField } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import React from 'react'
import LockOpenIcon from '@material-ui/icons/LockOpen';
import './signup.css'
import { NavLink } from 'react-router-dom';

function Signup() {
    return (
        <>
        <div className="main-container">
        <div className="container">
        <h1>Signup</h1>
        <form className="form">
       <div className="form-main">
       <Grid container spacing={2} alignItems="center">
          <Grid item>
            <AccountCircle />
            
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Username" />
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <LockOpenIcon/>
            
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Password" />
          </Grid>
        </Grid>
       </div>
        <Button size="large"  variant="contained" color="primary" >
            Signup
        </Button>
        </form>
        <h3>Or</h3>
        <NavLink exact  activeClassName='active_class' to='/login'><h4>Login</h4></NavLink>
        </div>
        </div>
        </>
    )
}

export default Signup
