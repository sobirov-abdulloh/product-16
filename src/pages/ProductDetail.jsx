import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
function ProductDetail() {
  const { id } = useParams();
  const chosenProduct = products.find((item) => item.id === id);
  return (
    <div>
      <h1>
        Siz <span>{chosenProduct.title}</span> mahsulotini tanladingiz
      </h1>
      <div className="mahsulot">
        <img src={chosenProduct.image} alt={chosenProduct.title} />
        <div className="mahsulot_right">
          <h2>
            Mahsulot NOMI: <span>{chosenProduct.title}</span>
          </h2>
         
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
