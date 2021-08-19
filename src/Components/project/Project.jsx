import React from 'react'
import './project.scss'

import roster_automator from '../../media/roster-automator.mp4'
import snake_game from '../../media/snake-game.mp4'


function Project() {
    return (
        <div className="project" id="project">
            <h2>PROJECTS</h2>

            <div className="proj-container">
                <div className="proj">
                    <div className="top">
                        <div className="vid">
                            {/* <video className="vid" autoPlay loop muted defaultMuted>
                                <source src={snake_game} type="video/mp4"/>
                            </video> */}
                        </div>

                    </div>
                    
                    <div className="bottom">
                        <div className="title">StudyPot Learning Website</div>
                            <div className="description">
                                Developed to host organized learning materials on the medical sciences
                                to expose students to selected topics and help them make up for class lessons lost to the pandemic.
                            </div>
                        
                        <div className="tech">
                            <div>Built with:</div>
                            Node JS |MongoDB |EJS |CSS3 |Passport | Cloudinary | Bootstrap 5
                            <br />
                            <a className="visit-btn" href="http://www.studypot.org"> Visit </a>
                        </div>
                        
                    </div>
                </div>

                <div className="proj">
                    <div className="top">
                        <div className="vid">
                            <video className="vid" playsinline autoPlay loop muted defaultMuted>
                                <source src={roster_automator} type="video/mp4"/>
                            </video>
                        </div>

                    </div>
                    
                    <div className="bottom">
                        <div className="title">Cornell Roster Automator</div>
                            <div className="description">
                                Developed to host organized learning materials on the medical sciences
                                to expose students to selected topics and help them make up for class lessons lost to the pandemic.
                            </div>
                        
                        <div className="tech">
                            <div>Built with:</div>
                            Python
                            <br />
                            <a className="visit-btn" href="http://www.studypot.org"> Demo </a>
                        </div>
                    </div>
                </div>

                <div className="proj">
                    <div className="top">
                        <div className="vid">
                            <video className="vid" autoPlay loop muted defaultMuted>
                                <source src={snake_game} type="video/mp4"/>
                            </video>
                        </div>

                    </div>
                    
                    <div className="bottom">
                        <div className="title">Box Snake Game</div>
                            <div className="description">
                                A 2D 'Snake' Game built to have practice with game development. Has keyboard support for the arrow
                                and 'ASDW' keys. Cool sound effect and background (one of my night shots) added!
                            </div>
                        
                        <div className="tech">
                            <div>Built with:</div>
                            HTML | CSS | JavaScript | Firebase
                            <br />
                            <a className="visit-btn" href="https://box-snake-game-e79e8.web.app"> Try it! </a>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    )
}


<script>
    document.getElementByClass('vid').play();
</script>

export default Project
