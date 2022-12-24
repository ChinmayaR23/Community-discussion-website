import React from "react";
import "./about.css"
class About extends React.Component{
    render(){

  
  return (
  <>
	<div className="mainContent">
		<div>	
		<h2 className="about">About Us</h2>
			<p>
        Community box is an locally available freeware, cross-platform, centralized instant messaging(IM) service.It allows users to send text  and share images, documents and other content.The service requires a cellular email to sign up.
        Here 
      </p>
      <br></br>
		<h3 className="head3">Our Team</h3>
				<div><p>COMMUNITY BOX is comprised of a small team with experience in commercial renovations in connecting people and other specialized settings.</p>
								<ul>
									<p><h6 className="head2">Chinmaya R -- PES2UG21CS144 </h6></p>
									<p><h6 className="head2">Chandan D -- PES2UG21CS133</h6></p>
									<p><h6 className="head2">C Dhruva --PES2UG21CS128</h6></p>			
								</ul>
                </div>
			<h3 className="head3">Our Associates</h3>
							<p>In addition to our team of experts, we have long standing relationships with professors and lecturers </p>

	</div>
    </div>
  </>

  );
}
};
export default About;