import React from "react";
import './granite.css';
import { GRANITE } from "../../constants";
import Card from "../card/card";

const GranitePage = () => {

  return (
    <div id="granitePage">

      <div className="graniteHeader">
        <h1>Granite Collection</h1>
        <p> We offer Granite Fabrication and Installation to San Antonio and the surrounding areas. Our Prices are the best in the area! Please schedule a visit to find out more.</p>
      </div>

      <div className="showBox">
        {GRANITE.map((stone) => (
          <Card title={stone.title} image={stone.img}/>
        ))}
      </div>

    </div>
  )
}

export default GranitePage