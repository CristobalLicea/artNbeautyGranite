import React from "react";
import './products.css'
import Nav from '../nav/nav'
import Card from '../card/card'

const Products = () => {
  return (
    <div id="productsPage">
      <Nav />
      <div className="productsHeader">
        <h1>Products</h1>
      </div>
      <div className="products">
        <Card title="Granite"/>
        <Card title="Marble"/>
        <Card title="Quartz"/>
        <Card title="Faucets"/>
        <Card title="Sinks"/>
      </div>

    </div>
  )
}

export default Products