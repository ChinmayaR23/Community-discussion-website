import React from "react";
import './signup.css'
class Signup extends React.Component{
    constructor(props){
        super(props)
        this.state={
            Name:'',
            Email:'',
            password:''

        }
        this.sub = this.sub.bind(this)
    }
    sub = function(event){
        event.preventDefault()
        const Name = this.state.Name
        const Email = this.state.Email;
        const password = this.state.password
        const question = {
             Name,Email,password
        }
        console.log(question)
        fetch('http://127.0.0.1:5000/stored_login',{
            method:"POST",
            body:JSON.stringify(question),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(res =>res.json())
        .then(data=>console.log(data))
    }
    handle=(event)=>{
        
        this.setState({
            Name:event.target.value
        })
        console.log(this.state.Name)
    }
    handle1=(event)=>{
        
        this.setState({
            Email:event.target.value
        })
        console.log(this.state.Email)
    }
    handle2=(event)=>{
        
        this.setState({
            password:event.target.value
        })
        console.log(this.state.password)
    }
    render(){
  return (
    <div  className="container_sign">
  <div  className="row justify-content-center">
  <div  className="col-md-5">
   <div  className="card">
     <h2  className="card-title text-center">Register </h2>
      <div  className="card-body py-md-4">
       <form _lpchecked="1" onSubmit={this.sub}>
          <div  className="form-group">
             <input onChange={this.handle} type="text"   className="form-control" id="name" placeholder="Name"/>
        </div>
        <div  className="form-group">
             <input type="email" onChange={this.handle1}  className="form-control" id="email" placeholder="Email"/>
                            </div>
                            
                          
   <div  className="form-group">
     <input  type="password" onChange={this.handle2}  className="form-control" id="password" placeholder="Password"/>
   </div>
   
   <div  className="d-flex flex-row align-items-center justify-content-between">
      
                                <button  className="btn btn-primary">Create Account</button>
          </div>
       </form>
     </div>
  </div>
</div>
</div>
</div>
  );}
}
export default Signup