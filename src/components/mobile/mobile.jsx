import React from "react";
import MainNav from "./mainNav";
import './mobile.css'
import NewNav from "./newNav";
import ImgCard from './imgCard';
import Display from "./graniteDisplay";

const Mobile = () => {
  return (
    <div id="mobilePage">
      <NewNav />
      <MainNav />
      <ImgCard />
      <Display />
    </div>
  )
}

export default Mobile