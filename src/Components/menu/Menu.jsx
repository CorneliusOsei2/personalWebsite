import './menu.scss';

const Menu = ({menuOpen, setMenuOpen}) => {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={() => setMenuOpen(!menuOpen)}>
                    <a href="#intro">Intro</a>
                </li>
                <li onClick={() => setMenuOpen(!menuOpen)}>
                    <a href="#project">Projects</a>
                </li>
                <li onClick={() => setMenuOpen(!menuOpen)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}

export default Menu
