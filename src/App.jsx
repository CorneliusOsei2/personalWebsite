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
      
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Project />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
