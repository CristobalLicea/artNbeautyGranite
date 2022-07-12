import React from "react";
import './home.css'

import Banner from "../banner/banner";
import GenInfo from "../genInfo/genInfo";
import IntroCard from "../introCard/introCard";
import Nav from "../nav/nav";

const Home = () => {
  
  return (
    <div id="homePage">
      <Nav />
      <IntroCard />
      <Banner />
      <GenInfo />
      <div className="space"></div>
      <img src="KitchenImage.jpeg" alt="" className="fixedImage" style={{position: "fixed"}}/>
      
    </div>

  )
}

export default Home