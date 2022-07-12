import React from "react";
import { useNavigate } from "react-router-dom";
import './menu.css'

const Menu = ({isOpen, close}) => {
  let navigate = useNavigate();

  const navi = () => {
    navigate('/products');
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
          <h2 className="colHeader" onClick={navi}>Products</h2>
          <div className="menuItem" onClick={navi}>
            Granite
          </div>
          <div className="menuItem">
            Marble Quartz Lodomite
          </div>
          <div className="menuItem">
            Sinks
          </div>
        <div className="menuItem">
          Faucets
        </div>
        <div className="menuItem">
          Maintenece
        </div>
      </div>

      <div className="menuCol">
      <h2 className="colHeader">Services</h2>
        <div className="menuItem">
          Installation
        </div>
        <div className="menuItem">
          Fabrication
        </div>
        <div className="menuItem">
          Clean Up
        </div>
        <div className="menuItem">
          Maintenece Tips
        </div>
        <div className="menuItem">
          Test
        </div>
      </div>
      <div className="menuCol">
        <h2 className="colHeader">Customer Testimonials</h2>
        <div className="menuItem">
          Testimonials
        </div>
        <div className="menuItem">
          Gallery
        </div>
        <div className="menuItem">
          Leave a Review
        </div>
        <div className="menuItem">
          Test
        </div>
        <div className="menuItem">
          Test
        </div>
      </div>
      <div className="menuCol">
      <h2 className="colHeader">Contact Us</h2>
        <div className="menuItem">
          Location
        </div>
        <div className="menuItem">
          Contact
        </div>
        <div className="menuItem">
          About Us
        </div>
        <div className="menuItem">
          Book an Appointment
        </div>
        <div className="menuItem">
          Test
        </div>
      </div>
    </div>
    </div>
    : null}
  </div> 
  )
}

export default Menu