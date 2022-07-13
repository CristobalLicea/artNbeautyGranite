import React from "react";
import './home.css'

import Banner from "../banner/banner";
import GenInfo from "../genInfo/genInfo";
import IntroCard from "../introCard/introCard";
import Nav from "../nav/nav";
import Mobile from "../mobile/mobile";
import { useMediaQuery } from 'react-responsive'

const Home = () => {
  const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 480px)",
  });
  
  return (
    <div>
      {!isMobileDevice ? <Mobile /> :
      <div id="homePage">
      <Nav />
      <IntroCard />
      <Banner />
      <GenInfo />
      <div className="space"></div>
      <img src="KitchenImage.jpeg" alt="" className="fixedImage" style={{position: "fixed"}}/>
      </div>}
      
    </div>
    

  )
}

export default Home