
import React, { useState } from "react";

import './mainNav.css'

const MainNav = () => {
  const[toggle, setToggle] = useState(false)
  return (
    <div className="mainNav">
      <div className="mainBar">
        <h1>Art & Beauty Granite</h1>
        <p>The Best Prices in San Antonio</p>
        <div className="interact">
          <input type="search" />
          <button onClick={() => { setToggle(!toggle)}}></button>
        </div>
      </div>
      
      
      <div className={!toggle ? "toggle off" : "toggle on"}>
        <button>Products</button>
        <button>Services</button>
        <button>Our Work</button>
        <button>Reach Us</button>
      </div>

      

    </div>
    
  )
}

export default MainNav