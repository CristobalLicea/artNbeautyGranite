import React from "react";
import Card from "../card/card";
import './banner.css'

const Banner = () => {

  return (
    <div className="banner">
      <div className="bannerContent">
        <h2>Products and Services</h2>
        <div className="cardHolder">
          <Card image='graniteIcon.jpeg' title="Countertop Installation"/>
          <Card image='quartsIcon.jpeg' title="Beautiful Selection"/>
          <Card image='fabricationService.png' title="Stone Fabrication"/>
        </div>
      </div>
    </div>
  )
}

export default Banner