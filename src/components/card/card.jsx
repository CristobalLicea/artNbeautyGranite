import React from "react";
import './card.css'

const Card = ({title, image}) => {


  return (
    <div className="cardOuter">
      <div className="card">
        <img src={image} alt="" width={'100%'} height={'100%'} />
      </div>
      <h3>{title}</h3>
    </div>
    
  )
}

export default Card