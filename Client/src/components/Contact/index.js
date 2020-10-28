import { Button, TextField } from '@material-ui/core'
import React from 'react'
import './index.css'

function Contact() {
    return (
        <>
         <div className="contact">
         <h1 className="primary center">Contact Us</h1>
        <div className="contact-box">
             <form className='form-group center' noValidate autoComplete="off">
                <TextField id="standard-basic" label="E-mail" />
                <TextField id="standard-basic" label="Subject" />
                <TextField  id="standard-basic" label="Message" />
                <div className="form-group">
                    <Button type="submit" variant="contained" color="primary">
                    Submit
                    </Button>
                    
                </div>
            </form>
            {/* <form>
                <div className="form-group">
                    <label for="name">E-mail :</label>
                    <input type="email"  placeholder="Enter your E-mail" required=""/>
                </div>
                <div className="form-group">
                    <label for="name">Subject :</label>
                    <input type="text"  placeholder="Enter Subject" required=""/>
                </div>
                <div className="form-group">
                    <label for="message">Message :</label>
                    <textarea name="text"  placeholder="Please type your message" required="" cols="30" rows="10"></textarea>
                 
                </div>
                <div className="form-group">
                    <Button type="submit" variant="contained" color="primary">
                    Submit
                    </Button>
                    
                </div>
            </form> */}
        </div>
         </div>
        
    
        </>
    )
}

export default Contact
