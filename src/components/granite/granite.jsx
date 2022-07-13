import React from "react";
import './granite.css';
import { TERRA, CLASSIC, BLACK } from "../../constants";
import Nav from '../nav/nav'

const GranitePage = () => {
  return (
    <div id="granitePage">
      <Nav />

  

      <div className="graniteHeader">
        <h1>Granite Collection</h1>
        <p>We offer Granite Fabrication and Installation to San Antonio and the surrounding areas. </p>
      </div>
      
      <div className="showBox">
        <h1>Terra Series</h1>
        <div className="showIcons">
        {TERRA.map((set) => (
          <div className="showCard" key={set.name}>
          <div className="showIcon">
            <img src={"/" + set.img} alt="" />
          </div>
          <h4>{set.name}</h4>
        </div>
          ))}
        </div>

      </div>

      <div className="showBox">
        <h1>Classic Series</h1>
        <div className="showIcons">
        {CLASSIC.map((set) => (
          <div className="showCard" key={set.name}>
          <div className="showIcon">
            <img src={'/' + set.img} alt="" />
          </div>
          <h4>{set.name}</h4>
        </div>
          ))}
        </div>
      </div>

      <div className="showBox">
        <h1>Black Series</h1>
        <div className="showIcons">
        {BLACK.map((set) => (
          <div className="showCard" key={set.name}>
          <div className="showIcon">
            <img src={'/' + set.img} alt="" />
          </div>
          <h4>{set.name}</h4>
        </div>
          ))}
        </div>
      </div>
      
    </div>
  )
}

export default GranitePage