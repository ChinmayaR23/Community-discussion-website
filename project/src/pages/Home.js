import React, { PureComponent } from 'react'
import { FaSearch } from "react-icons/fa";
import './home.css'
import Side from './Sidebar'
import AI from'./images/ai.jpeg' 
import APP from'./images/app.jpeg' 
import C from'./images/C++.jpeg' 
import  UI from'./images/ui.jpeg' 
import Cpp from './Cpp'
import No from './No.js'
import Ai from './Ai.js'
import { BrowserRouter as Router, Routes, Route,Link, Outlet } from "react-router-dom";
class Home extends React.Component{
  constructor(props){
    super(props);
    this.state={
        answer:[],
        post_by_user:[]
    }
    
  
}
  componentDidMount(){
    fetch('http://127.0.0.1:5000/find').then(res =>res.json())
    .then(data=>{
        
        
        console.log(data)
        var newdata = Object.values(data)
       
        console.log(newdata)
        this.setState({answer : newdata[0]})
        console.log(this.state.answer[10])
        console.log(this.state.answer[10].post)
    })
    
    
}
    render(){
    return(
      <>
    
      <div className='home_pag' style={{"backgroundColor":"white"}}>
      <div className='img'>
        
         <Link to="./Cpp"> <img src = {C} className="image_link"></img></Link> 
         <p style={{"marginLeft":"80px"}}>C++</p>
         <Link to="./Ai"><img src = {AI} className="image_link"></img></Link> 
         <p style={{"marginLeft":"80px"}}>AI</p>
         <Link to="./Ui"><img src = {UI} className="image_link"></img></Link> 
         <p style={{"marginLeft":"80px"}}>UI/UX</p>
         <Link to="./App"><img src = {APP} className="image_link"></img></Link>
         <p style={{"marginLeft":"80px"}}>App</p> 
        
        </div>
      
                
              <Outlet/>
      </div>
      
      </>
    )
    }
  }
export default Home;