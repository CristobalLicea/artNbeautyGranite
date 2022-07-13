import React from "react";
import './newNav.css'
import { FaFacebookSquare,FaPhone } from "react-icons/fa";

const NewNav = () => {
  return (
    <div className="topBar">
      <div>
        <button className="icon">
          <FaFacebookSquare className="icon"/>
        </button>
      </div>
      <div>
        <p className="barPhone">
          <FaPhone /><a href="tel:210-875-3913">210-875-3913</a>
        </p>
      </div>
    </div>
  )
}

export default NewNav