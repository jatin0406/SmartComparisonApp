import React from 'react';
import './style.css'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'



const Deals = () => {
  return (
    <div className="slide-container">
      <Fade>
        <div className="each-fade">
          <div className="image-container">
          <img src={require('../../Images/s1.png')} />
        
          </div>
          {/* <h2>First Slide</h2> */}
        </div>
        <div className="each-fade">
          <div className="image-container">
          <img src={require('../../Images/s2.png')} />
          </div>
          {/* <h2>Second Slide</h2> */}
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={require('../../Images/s3.jpg')} />
          </div>
          {/* <h2>Third Slide</h2> */}
        </div>
      </Fade>
    </div>
  )
}

export default Deals







