import './topbar.scss'

import React from 'react'

const Topbar = ({menuOpen, setMenuOpen}) => {
    return (
        <div className= {"topbar " + (menuOpen && 'active')}>
            <div className="wrapper d-flex justify-content-between">
                <div className="left">
                    <a href="#intro" className="logo">Cornelius</a>
                    
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
