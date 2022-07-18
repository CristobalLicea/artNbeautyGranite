import React from "react";
import Collection from "./collection";
import './home.css'
import { useNavigate } from "react-router-dom";

const MiddleCard = () => {
  let navigate = useNavigate();

  const navi = () => {
    console.log('hmm?')
    navigate('/granite')
  }


  return(
    <div className="middleCard part">
        <h2>OUR STONE <span >COLLECTION</span></h2>
        <div className="collections">
          <Collection title='GRANITE' img='/intro4.JPG' onClick={navi}/>
          <Collection title='MARBLE' img='/KitchenImage.jpeg'/>
          <Collection title='QUARTZ' img='/quartsIcon.jpeg'/>
          <Collection title='ONYX' img='/intro5.JPG'/>
     
        </div>
      </div>
  )
}

export default MiddleCard