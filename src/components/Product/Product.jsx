import React from "react";
import "./Product.css";
import { products } from "../../data/products";
import Productinfo from "../Productinfo/Productinfo";

function Products() {
  console.log(products);
  return (
    <div className="products">
      <h1>Hamma mahsulotlar</h1>
      <div className="products_list">
        {products.map((product, index) => (
          <Productinfo key={index} {...product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
