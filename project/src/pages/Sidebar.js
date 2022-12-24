
import React from "react";
import './sidebar.css'
import AI from './images/ai.jpeg'
import APP from './images/app.jpeg'
import BUISNESS from './images/buisness.jpeg'
import C from './images/C++.jpeg'
import UI from './images/ui.jpeg'
import WEB from './images/web.jpeg'

function SidebarOptions() {
  return (
 
    <div className="sidebarOptions">
      <h2>Communities   
      </h2>
      <div className="sidebarOption">
        <img
          src={C}
          alt=""
        />

        <p>C/C++</p>
      </div>
      

      

      <div className="sidebarOption">
        <>
        <img src={AI}/>
        <p>AI/ML</p>
        </>
      </div>

      <div className="sidebarOption">
        <img
          src={APP}
          alt=""
        />
        <p>APP dev</p>
      </div>

      <div className="sidebarOption">
        <img
          src={UI}
          alt=""
        />
        <p>UI/UX</p>
      </div>

      
    </div>
  
  );
}

export default SidebarOptions;