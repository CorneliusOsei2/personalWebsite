import './intro.scss'
import Particles from 'react-particles-js';
import particlesConfig from '../particle/particlesConfig.json'
import { init } from 'ityped'
import {useEffect, useRef} from 'react'
import {GitHub, LinkedIn, AssignmentInd} from '@material-ui/icons'


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
            strings: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. consectetur adipiscing elit, sed do eiusmod tempor'],
            
        })
    }, [])

    
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="" alt="" />
                </div>

                <div className="itemContainer">
                    <a aria-label="false" target="_blank" tabIndex="0" rel="noopener noreferr" href="www.google.com"><LinkedIn className="icon"/></a>
                    <a href=""><GitHub className="icon" /></a>
                    <a href="https://www.google.com"><AssignmentInd className="icon" /></a>
                </div>
            </div>

            <div className="right">
                <Particles params={particlesConfig} className='particles-container'/>
                <div className="wrapper">
                    <h4>Hi there, I'm</h4>
                    <h2>Cornelius</h2>
                    <h4 ref={titleRef}></h4>

                    <p ref={descRef}></p>

                </div>

                



            </div>
        </div>
    )
}

export default Intro
