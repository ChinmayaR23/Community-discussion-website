import React from "react";
import './signup.css'
class Signup extends React.Component {
    render(){
  return (
    <div className="container">
  <div className="row justify-content-center">
  <div className="col-md-5">
   <div className="card">
     <h2 className="card-title text-center">Register <a href="http://opensnippets.com">open snippets</a></h2>
      <div className="card-body py-md-4">
       <form _lpchecked="1">
          <div className="form-group">
             <input type="text" className="form-control" id="name" placeholder="Name"/>
        </div>
        <div className="form-group">
             <input type="email" className="form-control" id="email" placeholder="Email"/>
                            </div>
                            <p>asdf</p>
                          
   <div className="form-group">
     <input type="password" className="form-control" id="password" placeholder="Password"/>
   </div>
   
   <div className="d-flex flex-row align-items-center justify-content-between">
      <a href="#">Login</a>
                                <button className="btn btn-primary">Create Account</button>
          </div>
       </form>
     </div>
  </div>
</div>
</div>
</div>
  );
}
}
export default Signup