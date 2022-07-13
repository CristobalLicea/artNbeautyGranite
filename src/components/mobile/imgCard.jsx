import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { INTRO } from "../../constants";
import './imgCard.css'

const ImgCard = () => {
  let i = 0
  const [image, setImage] = useState(INTRO[i])
  

  const tick = () => {
    console.log('ticked')
    if (i === INTRO.length - 1) {
      console.log(i)
    } else {
      console.log(i)
    } 
  }

  const hello = () => {
    console.log('1')
    console.log(INTRO.length)
    if (i === INTRO.length - 1) {
      console.log(i)
      i = 0
    } else {
      console.log(i)
      i++;
    }
    setImage(INTRO[i])
  }

  const timer = setInterval(hello, 8000)
  
    
  return (
    
    <div className="imgCard">
      <img src={image} alt="" />
      <div className="imgCardOverlay">
        <h2>Redesign your home with Art & Beauty</h2>
        <p>We offer the the best prices in San Antonio! Let us help you reinvent your Kitchen, Restroom, Office, or Any Countertop that needs a new look!</p>
        <button>BROWSE OUR INVENTORY</button>
        <button>VIEW OUR GALLERY</button>
      </div>
    </div>
  )
}

export default ImgCard