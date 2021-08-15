import React from 'react'
import './project.scss'

// import snake_game from '../../media/snake-game.mov'

function Project() {
    return (
        <div className="project" id="project">
            <h2>Projects</h2>

            <div className="proj-container">
                <div className="proj">
                    <div className="top">
                        <div className="vid">
                            {/* <video className="vid" autoPlay loop muted>
                                <source src={snake_game} type="video/mp4"/>
                            </video> */}
                        </div>

                    </div>
                    
                    <div className="bottom">
                        <div className="title">Name</div>
                            <div className="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                            </div>
                        
                        <div className="tech">
                            <div>Built with:</div>
                            Python
                        </div>
                    </div>
                </div>

                <div className="proj">
                    <div className="top">
                        <div className="vid">
                            {/* <video className="vid" autoPlay loop muted>
                                <source src={snake_game} type="video/mp4"/>
                            </video> */}
                        </div>

                    </div>
                    
                    <div className="bottom">
                        <div className="title">Name</div>
                            <div className="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                            </div>
                        
                        <div className="tech">
                            <div>Built with:</div>
                            Python
                        </div>
                    </div>
                </div>

                <div className="proj">
                    <div className="top">
                        <div className="vid">
                            {/* <video className="vid" autoPlay loop muted>
                                <source src={snake_game} type="video/mp4"/>
                            </video> */}
                        </div>

                    </div>
                    
                    <div className="bottom">
                        <div className="title">Name</div>
                            <div className="description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi  
                            </div>
                        
                        <div className="tech">
                            <div>Built with:</div>
                            Python
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
