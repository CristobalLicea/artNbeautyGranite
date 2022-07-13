import React from "react";
import Nav from '../nav/nav'
import './work.css'
import Card from '../card/card'
import { useNavigate } from "react-router-dom";

const Work = () => {
  let navigate = useNavigate();
  return (
    <div>
      <Nav />
      <div className="workPage">
      <div className="worksHeader">
        <h1>Our Work</h1>
      </div>
      <div className="works">

        <div className="work" onClick={() => {navigate('/products/granite')}}>
          <Card title="Testimonials" />
        </div>
        <div className="work" onClick={() => {navigate('/products/marble')}}>
          <Card title="Leave a Review"/>
        </div>
        <div className="work" onClick={() => {navigate('/products/quartz')}}>
          <Card title="Gallery"/>
        </div>
      </div>
        
        
        
      </div>
    </div>
  )
}

export default Work