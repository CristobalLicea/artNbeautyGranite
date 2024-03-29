import React, {useState} from "react";
import Menu from "../menu/menu";
import {  AiOutlineAlignRight } from "react-icons/ai";
import './nav.css'
import { useNavigate } from "react-router-dom";

const Nav = () => {
  let navigate = useNavigate();

  const navi = () => {
    navigate('/')
    setMenu(false)
  }

  const [menu, setMenu] = useState(false)

  return (
    <nav>

        <div className="navLeft">
          <h1 onClick={navi}>Art & Beauty Granite</h1>
        </div>

        <div className="navRight">
          <div className="menu">
            <button onClick={() => setMenu(!menu)} className="menuBtn center"><AiOutlineAlignRight className="menuIcon"/></button>
            <Menu isOpen={menu} close={() => setMenu(false)}/>
            
          </div>
          <a href="#location" className="reachBtn center">Reach Us</a>
        </div>

      </nav>
  )
}

export default Nav