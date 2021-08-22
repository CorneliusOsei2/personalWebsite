import './menu.scss';

import resume from '../../media/resume.pdf'

const Menu = ({menuOpen, setMenuOpen}) => {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={() => setMenuOpen(!menuOpen)}>
                    <a href="#intro">About Me</a>
                </li>
                <li onClick={() => setMenuOpen(!menuOpen)}>
                    <a href="#project">Projects</a>
                </li>
                <li onClick={() => setMenuOpen(!menuOpen)}>
                    <a href={resume}>Resume</a>
                </li>
            </ul>
        </div>
    )
}

export default Menu
