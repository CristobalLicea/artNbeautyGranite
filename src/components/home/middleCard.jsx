import React from "react";
import Collection from "./collection";
import './home.css'

const MiddleCard = () => {
  return(
    <div className="middleCard part">
        <h2>OUR STONE <span >COLLECTION</span></h2>
        <div className="collections">
          <Collection title='GRANITE' img='/intro4.JPG'/>
          <Collection title='MARBLE' img='/KitchenImage.jpeg'/>
          <Collection title='QUARTZ' img='/quartsIcon.jpeg'/>
          <Collection title='ONYX' img='/intro5.JPG'/>
     
        </div>
      </div>
  )
}

export default MiddleCard