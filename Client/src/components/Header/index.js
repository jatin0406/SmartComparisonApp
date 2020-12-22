import React from 'react'
// import {Link} from 'react-dom'
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Logo from '../Logo'
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import { withRouter } from 'react-router-dom'
import './index.css'
import { NavLink, Route } from 'react-router-dom';
import { Button } from '@material-ui/core';
import  { useState } from "react"
// import "../../contexts/AuthContext"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
// import { search } from '../../../../backend/routes/products';
import Search from "../Search"
import page from "../../Containers/Pages/page"



class Header extends React.Component  {
    
    constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);
    // return(
    // <Route path="/this.state.value" component={page}/>
    // )
    event.preventDefault();
    this.props.history.push(`/page?${this.state.value}`);
  }
    render(){
    return (<>
            <div className='header' >
        <div ><Logo /></div>
        <ul>
            <li className="form">
                {/* <input type="text"  onChange={this.handleChange} placeholder="Search here.."/> */}
                {/* <button type="submit"><i class="fa fa-search"/></button> */}
                {/* <button type="submit" className="fa fa-search" onClick={() => alert('click')}>
       {this.props.value}
     </button> */}
                {/* <Search value={this.state.value}/> */}
                {/* <button className="square" onClick = {() => this.props.history.push(`/page/?${this.props.value}`)} > */}
          {/* {this.props.value} */}
              {/* </button> */}
              <form onSubmit={this.handleSubmit}>
                <label>
                  Name:
                  <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
              </form>
            
            </li>

            {/* <li><NavLink exact className='item' activeClassName='active_class' to='/register'><i className="fa fa-user-plus"></i>Register</NavLink></li> */}
            <li><NavLink exact className='item' activeClassName='active_class' to='#'><i className="fa fa-exchange" style={{fontSize:'30px'}}></i></NavLink></li>
            <li><NavLink exact className='item' activeClassName='active_class' to='#'><i className="fa fa-shopping-cart" style={{fontSize:'30px'}} ></i></NavLink></li>
            <li><NavLink exact className='item' activeClassName='active_class' to='#'><i className="fa fa-sign-out"  aria-hidden="true" style={{fontSize:'30px'}}></i></NavLink></li>
            {/* <li> */}
                 {/* <button className="butto"  onClick={handleLogout} >
          Log Out
        </button> */}
        {/* <Button className="bold" onClick={handleLogout}>Logout</Button> */}
    
        {/* </li> */}
        {/* <button></button> */}
        
        </ul>
    </div>
    </>
    )
    }
}

export default withRouter(Header); 