import React from "react";
import { useState } from "react";
import { INTRO } from "../../constants";
import './imgCard.css'

const ImgCard = () => {
  const [num, setNum] = useState(0)

  const hello = () => {
    if (num === INTRO.length - 1) {
      setNum(0)
    } else {
      setNum(num + 1)
    }
  }
  return (
    
    <div className="imgCard">
      <img src={INTRO[num]} alt="" />
      <div className="imgCardOverlay">
        <h2>Redesign your home with Art & Beauty</h2>
        <p>We offer the the best prices in San Antonio! Let us help you reinvent your Kitchen, Restroom, Office, or Any Countertop that needs a new look!</p>
        <button onClick={hello}>BROWSE OUR INVENTORY</button>
        <button>VIEW OUR GALLERY</button>
      </div>
    </div>
  )
}

export default ImgCard