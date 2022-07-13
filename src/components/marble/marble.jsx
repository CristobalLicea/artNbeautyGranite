import React from "react";
import './marble.css';
import { TERRA, CLASSIC, BLACK } from "../../constants";
import Nav from '../nav/nav'

const MarblePage = () => {
  return (
    <div id="marblePage">
      <Nav />

      <div className="marbleHeader">
        <h1>Marble Collection</h1>
        <p>We offer Granite Fabrication and Installation to San Antonio and the surrounding areas.</p>
      </div>
      
      <div className="showBox">
        <h1>Terra Series</h1>
        <div className="showIcons">
        {TERRA.map((set) => (
          <div className="showCard">
          <div className="showIcon">
            <img src={set.img} alt="" />
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
          <div className="showCard">
          <div className="showIcon">
            <img src={set.img} alt="" />
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
          <div className="showCard">
          <div className="showIcon">
            <img src={set.img} alt="" />
          </div>
          <h4>{set.name}</h4>
        </div>
          ))}
        </div>
      </div>
      
    </div>
  )
}

export default MarblePage