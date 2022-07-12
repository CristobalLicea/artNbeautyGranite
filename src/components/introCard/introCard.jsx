import React from "react";
import './introCard.css'

const IntroCard = () => {
  return(
    <div className="introCard">

        <div className="contactCard">
          <h2>Art & Beauty Granite</h2>
          <p>Call or Text for Consultations:</p>
          <h3 className="contactName">Arturo Garcia</h3>
          <div className="contactInfo">
            <div><h4>210-875-0314</h4></div>
            <div><h4><span style={{ color: 'blue'} }>ArturoGarcia@gmail.com</span></h4></div>
          </div>
            <h3 className="contactName">Gabriela Miranda</h3>
          <div className="contactInfo">
            <div><h4>210-875-3913</h4></div>
            <div><h4 style={{ color: 'blue'}}>GabrielaMiranda@gmail.com</h4></div>
          </div>
          <h3 className="contactAddress">14435 Pleasanton Rd</h3>
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