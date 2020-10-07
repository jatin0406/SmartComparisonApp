// import { Card } from '@material-ui/core'
// import Cards from '.'
import React from 'react'
import Cards from '../../components/Cards'
import './style.css'

function About() {
    return (
        <div className='about'>
            <h1 class="primary center">Meet Our Team</h1>
           <Cards/>
           {/* <h1>Hello</h1> */}
        </div>
    )
}

export default About
