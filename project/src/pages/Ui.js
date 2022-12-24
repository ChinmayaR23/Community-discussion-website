import React from "react";
import './home.css'
class Ui extends React.Component{
    constructor(props){
        super(props);
        this.state={
            answer:[],
            post_by_user:[]
        }
        
      
    }
      componentDidMount(){
        fetch('http://127.0.0.1:5000/find_Ui').then(res =>res.json())
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
            <div className="Cpp">
                {this.state.answer.map((answer,index) => ( 
                <div className="answer" key={index.toString()}>
                  
                <h1> Topic:{ answer.ques }</h1>
                <br></br><br></br><br></br>
                <h2>Post:{answer.post}</h2>
                
                </div>
                ))}
                </div>
            
                
            </>
        )
    }
}
export default Ui