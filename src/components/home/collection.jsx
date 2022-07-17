import React from "react";

const Collection = ({title, img}) => {
  return(
    <div style={{textAlign: 'center'}}>
      <h3>{title}</h3>
      <div className="collection">
        <img src={img} alt="" /> 
      </div>
    </div>
  )
}

export default Collection