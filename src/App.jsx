import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Site from "./components/site/Site"
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact" ;
import "./scss/App.scss";
import {useState} from "react";
import Menu from "./components/menu/Menu";

function App() {
    const [menuOpen,setMenuOpen] = useState(false)
  return (
   <div className="App">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
       <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <div className={"sections"}>
        <Intro/>
        <Site/>
        <Works/>
        <Testimonials/>
        <Contact/>
    </div>
   </div>
  );
}

export default App;
