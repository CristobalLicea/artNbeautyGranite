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
        <form action="https://formsubmit.co/artnbeautygranite@gmail.com" method="POST">
          <input type="text" name="name" placeholder="Name" autoComplete="off"/>
          <input type="email" name="email" placeholder="Email" autoComplete="off"/>
          <input type="text" name="phone" placeholder="Phone" autoComplete="off"/>
          <textarea name="message" cols="30" rows="10" placeholder="Your Message"></textarea>
          <br />
          <button type="submit">Submit</button>
          <input type="hidden" name="_next" value="https://www.artandbeautygranite.com/"></input>
        </form>
      </div>
      
      
    </div>
    : null}
  </div> 
  )
}

export default Menu