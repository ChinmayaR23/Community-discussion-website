import React from "react";
//import "./styles.css";
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import About from "./about";
import Community from "./community";
import Contact from "./contact";
import './App.css'
import Login from './login'
import {NavLink} from "react-router-dom";
import Home from './pages/Home'
import Ans from './answer'
import Cpp from './pages/Cpp'
import Ai from './pages/Ai.js'
import Ui from './pages/Ui.js'
import App from './pages/App'
import Signup from './signup'
class Navbar extends React.Component{
  render(){
  return(
  <>
      
      <div className="App">
      <div className="navbar">
      <div class="container" style={{"backgroundColor":"#05EA46","marginBottom":"125px","borderRadius":"25px","height":"25px"}}>
 
    <div class="col-md-12 text-center" >
      <h1 class="animate-charcter" > Community Box</h1>
   
  </div>
</div>
      <ul className="nav-links">
        
          <Link to="/">Home</Link>
          <Link to="./about">About</Link>
          <Link to="./community">Community</Link>
          <Link to="./contact">contact</Link>
          
          
          
      </ul>
      <button className="button"><Link to="./login">Register</Link></button>
      </div>
      
        <Routes>
          
          <Route path="/about" element={<About/>} />
          <Route path="/community" element={<Community/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login" element={<Login/>} >
             
          </Route> 
          
          
          <Route path="/" element={<Home />} >
            <Route path="/Cpp" element={<Cpp/>} /> 
            <Route path="/Ai" element={<Ai/>} /> 
            <Route path="/App" element={<App/>} /> 
            <Route path="/Ui" element={<Ui/>} /> 
          </Route>
        </Routes>
        </div>
    
      
  </>
  )
  }
}


export default Navbar;