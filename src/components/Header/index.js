import React from 'react'
import Logo from '../Logo'
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import './index.css'

export default function Header() {
    return (<>
            <div className='header' >
        <div ><Logo /></div>
        {/* <div ><a href="#"><img src={window.location.origin + ''} alt="Smart Comaprison" srcset=""/></a></div> */}
        <ul>
            <li><form>
                <input type="text" placeholder="Search here.."/>
                <button type="submit"><i class="fa fa-search"/></button>
            </form></li>
            <li className="item"><a href="#"><i className="fa fa-fw fa-user"></i>Login</a></li>
            <li className="item"><a href="#"><i className="fa fa-user-plus"></i>Register</a></li>
            <li className="item"><a href="#"><i className="fa fa-exchange" style={{fontSize:'30px'}}></i></a></li>
            <li className="item"><a href="#"><i className="fa fa-shopping-cart" style={{fontSize:'30px'}} ></i></a></li>
        </ul>
    </div>
    </>
    )
}
