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
    </div>
    : null}
  </div> 
  )
}

export default Menu