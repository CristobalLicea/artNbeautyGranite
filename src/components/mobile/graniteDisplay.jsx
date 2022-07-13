import React from "react";
import DisplayCard from "./displayCard";
import'./graniteDisplay.css'

const Display = () => {
  return(
    <div className="display">
      <img src="/KitchenImage.jpeg" alt="" />
      <div className="overlay">
        <h2>SELECT & INSTALL YOUR NEW COUNTERTOPS WITH A TRUSTED, PROVEN, AND PROFFESIONAL COMPANY</h2>
        <DisplayCard title="Granite" img='/Nero-Stella.jpeg'/>
        <DisplayCard title="Marble" img='/marble1.png'/>
        <DisplayCard title="Quartz" img='/quartzIcon.jpeg'/>
        <DisplayCard title="Onyx" img='/onyx1.jpeg'/>
      </div>
    </div>
  )
}

export default Display