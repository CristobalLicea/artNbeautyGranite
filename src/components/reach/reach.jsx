import React from "react";
import Nav from '../nav/nav'
import './reach.css'
import Card from '../card/card'
import { useNavigate } from "react-router-dom";

const Reach = () => {
  let navigate = useNavigate();
  return (
    <div>
      <Nav />
      <div className="reachPage">
      <div className="reachsHeader">
        <h1>Reach Us</h1>
      </div>
      <div className="reachs">

        <div className="reach" onClick={() => {navigate('/products/granite')}}>
          <Card title="Location" />
        </div>
        <div className="reach" onClick={() => {navigate('/products/marble')}}>
          <Card title="Contact"/>
        </div>
        <div className="reach" onClick={() => {navigate('/products/quartz')}}>
          <Card title="About Us"/>
        </div>
        <div className="reach" onClick={() => {navigate('/products/quartz')}}>
          <Card title="Schedule a Visit"/>
        </div>
      </div>
        
        
        
      </div>
    </div>
  )
}

export default Reach