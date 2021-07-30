import './intro.scss'
import Particles from 'react-particles-js';
import particlesConfig from '../particle/particlesConfig.json'
import { init } from 'ityped'
import {useEffect, useRef} from 'react'

function Intro() {
    const textRef = useRef()

    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            strings: ['Computer Science Student'],
            backDelay: 1300,
            backSpeed: 60
        })
    }, [])
    return (
        <div className="intro d-flex" id="intro">
            <div className="left col-md-6">
                <div className="imgContainer">
                    <img src="" alt="" />
                </div>
            </div>

            <div className="right col-md-6">
                <Particles params={particlesConfig} className='particles-container'/>

                <div className="wrapper">
                    <h2>Hi there, I'm'</h2>
                    <h1>Cornelius</h1>
                    <h3 ref={textRef}></h3>
                </div>

                <a href="#portfolio" className="">
                    <img src="Images/down_arrow.jpeg" alt="" />
                </a>
            </div>
        </div>
    )
}

export default Intro
