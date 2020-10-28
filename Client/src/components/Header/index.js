import React from 'react'
import {Link} from 'react-dom'
import Logo from '../Logo'
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import './index.css'
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (<>
            <div className='header' >
        <div ><Logo /></div>
        <ul>
            <li><form>
                <input type="text" placeholder="Search here.."/>
                <button type="submit"><i class="fa fa-search"/></button>
            </form>
            </li>
            <li><NavLink exact className='item' activeClassName='active_class' to='/login'><i className="fa fa-fw fa-user"></i>Login </NavLink></li>
            <li><NavLink exact className='item' activeClassName='active_class' to='/register'><i className="fa fa-user-plus"></i>Register</NavLink></li>
            <li><NavLink exact className='item' activeClassName='active_class' to='#'><i className="fa fa-exchange" style={{fontSize:'30px'}}></i></NavLink></li>
            <li><NavLink exact className='item' activeClassName='active_class' to='#'><i className="fa fa-shopping-cart" style={{fontSize:'30px'}} ></i></NavLink></li>
        
        </ul>
    </div>
    </>
    )
}
