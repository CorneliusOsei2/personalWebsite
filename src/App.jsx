import Topbar from './Components/topbar/Topbar'
import Intro from './Components/intro/Intro'
import Portfolio from './Components/portfolio/Portfolio'
import Works from './Components/works/Works'
import Contact from './Components/contact/Contact'
import Menu from './Components/menu/Menu'

import {useState} from 'react'

import './app.scss'
const App = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio />
        <Works />
        <Contact />
      </div>
      
    </div>
  );
}

export default App;
