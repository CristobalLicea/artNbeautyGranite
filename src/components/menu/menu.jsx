import React from "react";

import './menu.css'

const Menu = ({isOpen, close}) => {


  return (
  <div className={!isOpen ? "menuu" : "menuu isVisible"} data-animation="effect">
    {isOpen ? 
    <div className="tester">
      <div className="menuHeader">
        <button onClick={close}>&times;</button>
      </div>

      <div className="form">
        <form>
          <h2>Contact Us:</h2>
          <input type="text" name="name" placeholder="Name" autoComplete="off" required/>
          <input type="text" name="email" placeholder="Email" autoComplete="off" required/>
          <input type="text" name="phone" placeholder="Phone" autoComplete="off" required/>
          <textarea name="message" id="" placeholder="Enter your message here, and we'll get back to you as soon as possible. Thank you."></textarea>
          <div>
            <button id="registerBtn">Submit</button>
          </div>
        </form>
      </div>
      
      
    </div>
    : null}
  </div> 
  )
}

export default Menu