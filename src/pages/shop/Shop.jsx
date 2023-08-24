import React from 'react'
import { PRODUCTS } from '../../product';
import Product from './product';

const Shop = () => {
  return (
    <div className="shop">
        <div className="shopTitle">
            <h1>Bugatti shop</h1>
        </div>
        <div className="products"> {PRODUCTS.map((product) => (
            <Product data={product} />
        ))} 
        </div>
    </div>
  )
}

export default Shop