import Topbar from './Components/topbar/Topbar'
import Intro from './Components/intro/Intro'
import Project from './Components/project/Project'
import Menu from './Components/menu/Menu'
import Footer from './Components/footer/Footer'

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
        <Project />
      </div>
      <Footer />
    </div>
  );
}

export default App;
