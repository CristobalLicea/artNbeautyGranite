import React from "react";
import { useNavigate } from "react-router-dom";
import './products.css'
import Nav from '../nav/nav'
import Card from '../card/card'

const Products = () => {
  let navigate = useNavigate();

  const navi = (e) => {
    navigate('/' + e.target.id);
  }

  return (
    <div id="productsPage">
      <Nav />
      <div className="productsHeader">
        <h1 onClick={navi} id='products'>Products</h1>
      </div>
      <div className="products">

        <div className="product" onClick={() => {navigate('/products/granite')}}>
          <Card title="Granite" image="/graniteIcon.jpeg"/>
        </div>
        <div className="product" onClick={() => {navigate('/products/marble')}}>
          <Card title="Marble" image="/quartsIcon.jpeg"/>
        </div>
        <div className="product" onClick={() => {navigate('/products/quartz')}}>
          <Card title="Quartz" image="/graniteIcon.jpeg"/>
        </div>
        <div className="product" onClick={() => {navigate(  '/products/Sinks')}}>
          <Card title="Sinks" image="/sinkIcon.jpeg"/>
        </div>
        <div className="product" onClick={() => {navigate('/products/Faucets')}}>
          <Card title="Faucets" image="/faucetIcon.jpeg"/>
        </div>
        
          
        
       
        
        
        
      </div>

    </div>
  )
}

export default Products