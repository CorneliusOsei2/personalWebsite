import './menu.scss';

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
                    <a href="#project">Resume</a>
                </li>
            </ul>
        </div>
    )
}

export default Menu
