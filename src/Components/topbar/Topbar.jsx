import './topbar.scss'

import React from 'react'

function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper d-flex justify-content-between">
                <div className="left">
                    <a href="#intro" className="logo">Cornelius</a>
                    <a href="#portfolio"> Portfolio</a>
                    <a href="#works">Works</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </div>
    )
}

export default Topbar
