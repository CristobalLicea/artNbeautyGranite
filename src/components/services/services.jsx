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
        <Card title="Fabrication" image="/fabricationService.png"/>
        <Card title="Installation"/>
        <Card title="Clean Up"/>
        <Card title="Maintenece Tips"/>
      </div>

    </div>
  )
}

export default Services