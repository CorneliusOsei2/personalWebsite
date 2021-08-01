import './intro.scss'
import Particles from 'react-particles-js';
import particlesConfig from '../particle/particlesConfig.json'
import { init } from 'ityped'
import {useEffect, useRef} from 'react'

function Intro() {
    const titleRef = useRef()
    const descRef = useRef()

    useEffect(() => {
        init(titleRef.current, {
            typeSpeed: 40,
            showCursor: false,
            strings: ['Computer Science Student'],
            backDelay: 50000,
        })

        init(descRef.current, {
            typeSpeed: 40,
            showCursor: false,
            backDelay: 50000,
            strings: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'],
            
        })
    }, [])

    
    return (
        <div className="intro d-flex row" id="intro">
            <div className="left col-md-6">
                <div className="imgContainer">
                    <img src="" alt="" />
                </div>
            </div>

            <div className="right col-md-6">
                <Particles params={particlesConfig} className='particles-container'/>

                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>Cornelius</h1>
                    <h3 ref={titleRef}></h3>

                    <p ref={descRef}>

                    </p>

                    <a href="#project">
                        <img src="Images/arrow.png" alt="" />
                    </a>

                </div>

                



            </div>
        </div>
    )
}

export default Intro
