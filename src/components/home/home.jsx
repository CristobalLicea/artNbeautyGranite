  import React from "react";
import './home.css'
import IntroCard from "../introCard/introCard";
import Mobile from "../mobile/mobile";
import { useMediaQuery } from 'react-responsive'
import MiddleCard from "./middleCard";
import Reasons from "../reasonsCard/reasonsCard";


const Home = () => {
  const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 480px)",
  });
  
  return (
    <div>
      {!isMobileDevice ? <Mobile /> :
      <div id="homePage">
      <IntroCard />
      <MiddleCard />  

      <div className="back center">
        <div className="colored">
          <div style={{width: '50%', height: '100%'}} className="center">
            <Reasons />
          </div>
          <div className="half" style={{width: '50%', height: "100%"}}>
          </div>
        </div>

      </div>

      <div className="part blank"></div>
      <div className="part blank"></div>

      <div className="part" >
        <div className="cool center">
          <div className="locationImg center">
            <img src="/map.png" alt="" />
          </div>
          
          <div className="location">
            <h1>Servicing San Antonio and the surrounding areas for 15 years</h1>
            <h2> <a className="address" href="https://www.google.com/maps/place/14435+Pleasanton+Rd,+San+Antonio,+TX+78221/">14435 Pleasanton Rd, San Antonio TX 78221</a> </h2>
            <h2>Call <a className="phone" href="tel:2108753913">210-875-3913</a> or <a className="phone" href="tel:2108750314">210-875-3913</a> to schedule a visit <br /> 
            or stop by<br />Monday - Friday 8am - 5pm</h2>
          </div>
        </div>
      </div>
     
      </div>}
      
    </div>
    

  )
}

export default Home