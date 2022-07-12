import React, {useState} from "react";
import Menu from "../menu/menu";
import { AiOutlineSearch, AiOutlineAlignRight } from "react-icons/ai";
import './nav.css'
import { useNavigate } from "react-router-dom";

const Nav = () => {
  let navigate = useNavigate();

  const navi = () => {
    navigate('/home')
    setMenu(false)
  }

  const [menu, setMenu] = useState(false)
  const [search, setSearch] = useState(false)

  return (
    <nav>
        <div className="navLeft">
          <h1 onClick={navi}>Art & Beauty Granite</h1>
        </div>
        <div className="navRight">
          <div className="searchBox">
            <button onClick={() => setSearch(!search)} className="searchBtn"><AiOutlineSearch /></button>
            <input className={search ? 'search isVisible' : 'search'} type="search" data-animation="effect"/>
          </div>
          <button className="browseBtn">Consultation</button>
          <button className="consultBtn">Browse Stones</button>
          <div className="menu">
            <button onClick={() => setMenu(!menu)} className="menuBtn"><AiOutlineAlignRight /></button>
            <Menu isOpen={menu} close={() => setMenu(false)}/>
          </div>
        </div>
      </nav>
  )
}

export default Nav