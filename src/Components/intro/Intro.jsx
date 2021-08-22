import './intro.scss'
import Particles from 'react-particles-js';
import particlesConfig from '../particle/particlesConfig.json'
import { init } from 'ityped'
import {useEffect, useRef} from 'react'
import {GitHub, LinkedIn, AssignmentInd} from '@material-ui/icons'

import Topbar from '../topbar/Topbar'
import person from '../../media/person.jpg'
import resume from '../../media/resume.pdf'


function Intro({menuOpen, setMenuOpen}) {
    const titleRef = useRef()
    const descRef = useRef()

    useEffect(() => {
        init(titleRef.current, {
            typeSpeed: 40,
            showCursor: false,
            strings: ['Cornelius'],
            backDelay: 50000,
        })

        init(descRef.current, {
            typeSpeed: 40,
            showCursor: false,
            backDelay: 50000,
            strings: ['A Computer Science Student at Cornell University interested in solving problems through efficient means! I like learning new stuff and writing code']
        })
    }, [])

    
    return (
        
        <div className="intro" id="intro">
            <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div className="left">
                <div className="imgContainer">
                    <img src={person} alt="" />
                </div>

                <div className="itemContainer">
                    <a  target="_blank" tabIndex="0" rel="noopener noreferrer" href="https://www.linkedin.com/in/cornelius-boateng-29b5b01a5"><LinkedIn className="icon"/></a>
                    <a  target="_blank" tabIndex="0" rel="noopener noreferrer" href="https://github.com/CorneliusOsei2"><GitHub className="icon" /></a>
                    <a  target="_blank" tabIndex="0" rel="noopener noreferrer" href={resume}><AssignmentInd className="icon" /></a>
                </div>
            </div>

            <div className="right">
                <Particles params={particlesConfig} className='particles-container'/>
                <div className="wrapper">
                    <h4>Hi there, I'm</h4>
                    <h2 ref={titleRef} ></h2>

                    <p ref={descRef}></p>
                    <p className="emoji">🧑🏾‍💻</p>

                </div>

                



            </div>
        </div>
    )
}

export default Intro
