import {useState} from 'react'

import './contact.scss'

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Contact() {

    const [message, setMessage] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        setMessage(!message)
    };

    return (
        <div className= "contact" id="contact">
            <div className="left">
                <h1>Contact</h1>

                <GitHubIcon style={{ fontSize: 60 }} />
                <LinkedInIcon />

            </div>

            <div className="right">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" />
                    <textarea name="message" id="" cols="40" rows="8"></textarea>
                    <button type="submit" className="">Send</button>
                    <p>
                        {message && "Thanks for your message 😁"}
                    </p>
                </form>
            </div>
            
        </div>
    )
}

export default Contact
