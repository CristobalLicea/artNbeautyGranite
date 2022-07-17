import React from "react";
import './reasonsCard.css'

const Reasons = () => {
  return(
    <div className="reasons">
      <h1>What Sets Us Apart?</h1>
      <p>With<span style={{color: 'red', fontSize: '20px'}}> Art & Beauty</span> you can expect luxury counter tops installed with expert care and attention to detail.</p>
      <p>Our Expert fabricators leave every stone with a shine that will last for decades to come</p>
      <p>We Install with minimal after clean, so you can relax while we work in your home</p>
      <div className="secti ">
        <div className="checklist">
          <p>Elegance</p>
          <p>Honesty</p>
        </div>
        <div className="checklist">
          <p>Quality</p>
          <p>Experience</p>
        </div>
        
      </div>
      
    </div>
  )
}

export default Reasons