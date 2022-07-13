import React from "react";
import { useNavigate } from "react-router-dom";
import './menu.css'

const Menu = ({isOpen, close}) => {
  let navigate = useNavigate();

  const navi = (e) => {
    navigate('/' + e.target.id);
    close()
  }

  return (
  <div className={!isOpen ? "menuu" : "menuu isVisible"} data-animation="effect">
    {isOpen ? 
    <div className="tester">
      <div className="menuHeader">
        <button onClick={close}>&times;</button>
      </div>
      <div className="menuItems">
        <div className="menuCol">
          <h2 className="colHeader" id='products' onClick={navi}>Products</h2>
          <div className="menuItem" id='products/granite' onClick={navi}>
            Granite
          </div>
          <div className="menuItem" id='marble' onClick={navi}>
            Marble
          </div>
          <div className="menuItem" id='quartz' onClick={navi}>
            Quartz
          </div>
        <div className="menuItem" id='sinks' onClick={navi}>
          Sinks
        </div>
        <div className="menuItem" id='faucets' onClick={navi}>
          Faucets
        </div>
      </div>

      <div className="menuCol">
      <h2 className="colHeader" id='services' onClick={navi}>Services</h2>
        <div className="menuItem" id='installation' onClick={navi}>
          Installation
        </div>
        <div className="menuItem" id='fabrication' onClick={navi}>
          Fabrication
        </div>
        <div className="menuItem" id='cleanup' onClick={navi}>
          Clean Up
        </div>
        <div className="menuItem" id='tips' onClick={navi}>
          Maintenece Tips
        </div>

      </div>
      <div className="menuCol">
        <h2 className="colHeader" id='work' onClick={navi}>Our Work</h2>
        <div className="menuItem" id='testimonials' onClick={navi} >
          Testimonials
        </div>
        <div className="menuItem" id='gallery' onClick={navi} >
          Gallery
        </div>
        <div className="menuItem" id='review' onClick={navi} >
          Leave a Review
        </div>
      </div>
      <div className="menuCol">
      <h2 className="colHeader" id='reach' onClick={navi}>Reach Us</h2>
        <div className="menuItem" id='location' onClick={navi}>
          Location
        </div>
        <div className="menuItem" id='contact' onClick={navi}>
          Contact
        </div>
        <div className="menuItem" id='about' onClick={navi}>
          About Us
        </div>
        <div className="menuItem" id='appointment' onClick={navi}>
          Book an Appointment
        </div>
      </div>
    </div>
    </div>
    : null}
  </div> 
  )
}

export default Menu