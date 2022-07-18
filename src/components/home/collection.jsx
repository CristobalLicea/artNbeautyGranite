import React from "react";
import { useNavigate } from "react-router-dom";

const Collection = ({title, img}) => {
  let navigate = useNavigate()
  return(
    <div style={{textAlign: 'center'}} onClick={() => navigate('/granite')}>
      <h3>{title}</h3>
      <div className="collection">
        <img src={img} alt="" /> 
      </div>
    </div>
  )
}

export default Collection