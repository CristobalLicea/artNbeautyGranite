import React from "react";
import { useEffect, useState } from "react";
import { INTRO } from "../../constants";
import './introCard.css'

let i = 0

const IntroCard = () => {
  const [img, setImg] = useState(INTRO[i])

  useEffect(() => {
    setInterval(change, 4000)
  }, [])

  const change = () => {
    if ( i === INTRO.length - 1) {
      i = 0
    } else {
      i++
    }
    setImg(INTRO[i])
  }
  
  return(

    <div className="introCard">

      <h1>Art & Beauty Granite</h1>
      <p>The Best Prices in San Antonio</p>

    <div className="intro">
      <img src={img} alt="" />
    </div>
    </div>
  )
}

export default IntroCard