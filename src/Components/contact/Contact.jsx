import React from 'react'
import './contact.scss'

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Contact() {
    return (
        <div className= "contact" id="contact">
            <div className="left">
                <GitHubIcon style={{ fontSize: 60 }} />
                <LinkedInIcon />

            </div>

            <div className="right">
                <form action="">
                    <input type="text" />
                </form>
            </div>
            
        </div>
    )
}

export default Contact
