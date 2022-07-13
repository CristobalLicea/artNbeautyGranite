import React from "react";
import './introCard.css'

const IntroCard = () => {
  return(
    <div className="introCard">
      <div className="contactCard">
          <h2 className="contactCardTitle">Art & Beauty Granite</h2>
          <p className="slogan">Best Prices in San Antonio</p>
          <h3 className="contactName">Arturo Garcia</h3>
          <div className="contactInfo">
            <div><a className="contactPhone" href="tel:210-875-0314">210-875-0314</a></div>
          </div>
            <h3 className="contactName">Gabriela Miranda</h3>
          <div className="contactInfo">
            <div><a className="contactPhone" href="tel:210-875-3913">210-875-3913</a></div>
          </div>
          <h3 className="contactAddress"><a href="https://www.google.com/maps/place/14435+Pleasanton+Rd,+San+Antonio,+TX+78221">14435 Pleasanton Rd</a></h3>
          <h4>San Antonio, TX 78221</h4>
          <div className="hoursSpace">
            <div className="row">
              <div className="weekDay">M</div>
              <div className="weekDay">T</div>
              <div className="weekDay">W</div>
              <div className="weekDay">T</div>
              <div className="weekDay">F</div>
              <div className="weekDay">S</div>
              <div className="weekDay">S</div>
            </div>
            <div className="row">
              <div className="weekDay">10am-5pm</div>
              <div className="weekDay">10am-5pm</div>
              <div className="weekDay">10am-5pm</div>
              <div className="weekDay">10am-5pm</div>
              <div className="weekDay">10am-5pm</div>
              <div className="weekDay">10am-5pm</div>
              <div className="weekDay">Closed</div>
            </div>
          </div>
      </div>
      <img src="countertop.png" alt="" />
    </div>
  )
}

export default IntroCard