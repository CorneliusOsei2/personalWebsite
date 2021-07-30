import './topbar.scss'
import {Person, Mail} from '@material-ui/icons'

import React from 'react'

const Topbar = ({menuOpen, setMenuOpen}) => {
    return (
        <div className= {"topbar " + (menuOpen && 'active')}>
            <div className="wrapper d-flex justify-content-between">
                <div className="left">
                    <a href="#intro" className="logo">Cornelius</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>(646)247-7478</span>
                    </div>
                    {/* <div className="itemContainer">
                        <Mail className="icon" />
                        <span>iooiwjeowji</span>
                    </div> */}
                </div>

                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line2"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
