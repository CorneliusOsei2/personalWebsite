import React from 'react'
import './project.scss'

import roster_automator from '../../media/roster-automator.mp4'
import snake_game from '../../media/snake-game.mp4'
import study_pot from '../../media/study-pot.mp4'
import focus from '../../media/focus.mp4'

function Project() {
    return (
        <div className="project" id="project">
            <h2>PROJECTS</h2>

            <div className="proj-container">
                <div className="proj">
                    <div className="top">
                        <div className="vid">
                            <video className="vid" playsInline autoPlay loop muted defaultmuted>
                                <source src={study_pot} type="video/mp4"/>
                            </video>
                        </div>

                    </div>
                    
                    <div className="bottom">
                        <div className="title">StudyPot Learning Website</div>
                            <div className="description">
                                Developed to host organized learning materials on the medical sciences
                                to expose students to selected topics to make up for class lessons lost to the pandemic.
                            </div>
                        
                        <div className="tech">
                            <div>Built with:</div>
                            NodeJS |MongoDB |EJS |CSS3 |Passport | AWS S3 | Bootstrap
                            <br />
                            <a target="_blank" tabIndex="0" rel="noopener noreferrer" className="visit-btn" href="http://www.studypot.org"> Visit </a>
                        </div>
                        
                    </div>
                </div>

                <div className="proj">
                    <div className="top">
                        <div className="vid">
                            <video className="vid" playsInline autoPlay loop muted defaultmuted>
                                <source src={roster_automator} type="video/mp4"/>
                            </video>
                        </div>

                    </div>
                    
                    <div className="bottom">
                        <div className="title">Cornell Roster Automator</div>
                            <div className="description">
                                Automates the selection of courses from the Cornell Roster and accounts for course time overlaps and updates.
                            </div>
                        
                        <div className="tech">
                            <div>Built with:</div>
                            Python
                            <br />
                            <a target="_blank" tabIndex="0" rel="noopener noreferrer" className="visit-btn" href="https://www.youtube.com/embed/gyaW1HIyQrI"> Demo </a>
                        </div>
                    </div>
                </div>

                <div className="proj">
                    <div className="top">
                        <div className="vid">
                            <video className="vid" playsInline autoPlay loop muted defaultmuted>
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
                            <a target="_blank" tabIndex="0" rel="noopener noreferrer" className="visit-btn" href="https://box-snake-game-e79e8.web.app"> Try it! </a>
                        </div>
                    </div>
                </div>

                <div className="proj">
                    <div className="top">
                        <div className="vid">
                            <video className="vid" playsInline autoPlay loop muted defaultmuted>
                                <source src={focus} type="video/mp4"/>
                            </video>
                        </div>

                    </div>
                    
                    <div className="bottom">
                        <div className="title">Focus Website (In dev)</div>
                            <div className="description">
                                Fully-responsive website for Focus Inc. in Ghana.
                                Company is focused on enhancing food accessibility in Africa and advertising farm produce!
                            </div>
                        
                        <div className="tech">
                            <div>Built with:</div>
                            Django | SQLite3 | Bootstrap | AWS S3 | Heroku
                            <br />
                            <a target="_blank" tabIndex="0" rel="noopener noreferrer" className="visit-btn" href="https://focus-website-general.herokuapp.com/"> Explore! </a>
                        </div>
                    </div>
                </div>

            </div>

        <div className="footer">
            <h5 className="text">Built with ❤️ from scratch by Cornelius using React and SASS</h5>
        </div>
            
        </div>
    )
}


<script>
    document.getElementByClass('vid').play();
</script>

export default Project
