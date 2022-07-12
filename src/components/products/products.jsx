import React from "react";
import Card from "../card/card";
import './products.css'
import Nav from '../nav/nav'

const Products = () => {
  return (
    <div id="productsPage">
      <h1>Products</h1>
      <Nav />
      <div className="products" style={{ display: 'flex', flexWrap: 'wrap'}}>
      <Card title="Granite Countertops"/>
      <Card title="Marble Countertops"/>
      <Card title="Accessories"/>
      <Card title="Faucets"/>
      <Card title="Maintenece"/>
      <Card title="Granite Countertops"/>
      </div>
      

    </div>
  )
}

export default Products