import "./app.scss";
import Topbar from "./components/Topbar/Topbar";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Menu from "./components/Menu/Menu";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='app'>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className='sections'>
        <Intro />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
