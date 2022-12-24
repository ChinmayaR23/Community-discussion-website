import React from 'react'
import './App.css'
import './com.css'
import Side from './pages/Sidebar'
import {BiSearch} from 'react-icons/bi'
class Community extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
            question:'',
            Post:'',
            comm:''
        }
        this.handleChange=this.handleChange.bind(this);
        this.sub = this.sub.bind(this)
    }
    
    handleChange= function(event){
        this.setState({
            question:event.target.value,
            
        })
        console.log(this.state.question)
        
    }
    handleChangeS =(event)=>{
        this.setState({
            comm:event.target.value,
            
        })
        console.log(this.state.comm)
    }
    handleChangeP =(event)=>{
        this.setState({
            Post:event.target.value,
            
        })
        console.log(this.state.Post)
    }
    sub = function(event){
        event.preventDefault()
        const ques = this.state.question;
        const post = this.state.Post;
        const comm = this.state.comm
        const question = {
             ques,post,comm
        }
        console.log(question)
        fetch('http://127.0.0.1:5000/stored',{
            method:"POST",
            body:JSON.stringify(question),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(res =>res.json())
        .then(data=>console.log(data))
    }
    render(){
        return(
            <div className='parent'> 
            <Side></Side>
                       <div className='wrap'>
            <h1 style={{"marginLeft":"50px"}}>Community</h1><br></br>
            <form role="search" id="form" onSubmit={this.sub}>
            <label>Title :</label>
            <input onChange= {this.handleChange} type= "text" value={this.state.question} className="input" placeholder='Title'></input><br></br><br></br><br></br><br></br><br></br>
            <label>Select Community :</label>
            <select onClick= {this.handleChangeS}>
                <option >C++</option>
                <option>AI</option>
                <option>APP</option>
                <option>UI</option>
            </select><br></br><br></br>
            
            <textarea placeholder='Post' onChange= {this.handleChangeP} value={this.state.Post}></textarea><br></br><br></br>
            <button type='submit' style={{"marginLeft":"95px","height":"20px","borderRadius":"3rem"}}>
                Submit
            </button>
            </form>
           
            </div>
            </div>

        )
    }
}
export default Community;