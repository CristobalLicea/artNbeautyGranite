import React from "react";
import './card.css'
import { BsHeart } from "react-icons/bs";

const Card = ({title, image}) => {


  return (
    <div className="cardOuter">
      <div className="card">
        <img src={image} alt="" width={'100%'} height={'100%'} />
      </div>
      <div className="bot">
      <h3>{title}</h3>
      <button className="fave"><BsHeart /></button>
      </div>
      
    </div>
    
  )
}

export default Card