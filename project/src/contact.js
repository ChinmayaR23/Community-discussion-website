import React from 'react'
import './contact.css'
class Contact extends React.Component{
    render(){
        return(
            <div>
      <h2 style={{"marginLeft":"750px"}}>Contact us</h2>
      <br></br>
      <section>
  <div class="container">
    <form action="https://formspree.io/f/xoqbzbkn" method="POST" id="my-form">

      <div class="form-group">
        <label for="firstName"> First Name</label>
        <input type="text" id="firstName" name="firstName"/>
      </div>

      <div class="form-group">
        <label for="latsName">Last Name</label>
        <input type="text" id="lastName" name="lastName"/>
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email"/>
      </div>

      <div class="form-group">
        <label for="massage">Message</label>
        <textarea name="massage" id="massage" cols="30" rows="10"></textarea>
      </div>

      <button className='cont_but'style={{"marginLeft":"20px","borderRadius":"2rem"}} type="submit">Submit</button>
    </form>
  </div>
  <div id="status"></div>
</section>
    </div>
        )
    }
}
export default Contact;