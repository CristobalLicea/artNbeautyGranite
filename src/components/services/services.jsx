import React from "react";
import './services.css'
import Nav from '../nav/nav'
import Card from '../card/card'

const Services = () => {
  return (
    <div id="servicesPage">
      <Nav />
      <div className="servicesHeader">
        <h1>Services</h1>
      </div>
      <div className="services">
        <div className="service">
          <Card title="Fabrication" image="/fabricationService.png"/>
        </div>
        <div className="service">
          <Card title="Installation" image="/installationIcon.jpeg" />
        </div>
        <div className="service">
          <Card title="Clean Up" image="/installationIcon.jpeg"/>
        </div>
        <div className="service">
          <Card title="Maintenece Tips" image="/installationIcon.jpeg"/>
        </div>
        
        
        
        
      </div>

    </div>
  )
}

export default Services