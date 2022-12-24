import React from "react";
import './answer.css'
class Ans extends React.Component{
    constructor(props){
        super(props);
        this.state={
            answer:[],
            answer_by_user : ""
        }
        
      
    }
    Handleclick = ()=>{
        fetch('http://127.0.0.1:5000/stored_answer',{
            method:"POST",
            body:JSON.stringify(this.state.answer_by_user),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(res =>res.json())
        .then(data=>console.log(data))
    }
    
    handleChange =(event)=>{
        const collection = document.getElementsByTagName("h1");
        const idText = collection[0].id
        console.log(idText)
        this.setState({
            answer_by_user:event.target.value
        })
        console.log(this.state.answer_by_user)
        
    }
    

    render(){
        return(
            <>

                 {this.state.answer.map((answer,index) => ( 
                <div className="answer" key={index.toString()}>
                <h1>question :{ answer.ques }</h1>
                
                <textarea placeholder="type your answer"   onChange= {this.handleChange}>{ answer.ques }</textarea>
                <button onClick={this.Handleclick} >Answer</button>
                </div>
                ))} 
            </>
        )
    }
}
export default Ans;