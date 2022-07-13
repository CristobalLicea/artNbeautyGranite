import React from "react";

const DisplayCard = ({title, img}) => {
  return (
    <div className="displayCardSpace">
      <div className="displayCard">
        <img src={img} alt="" />
      </div>
      <h4>{title}</h4>
    </div>
  )
}

export default DisplayCard