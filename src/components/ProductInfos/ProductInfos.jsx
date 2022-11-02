import React, { useContext } from "react"; 
import { useNavigate } from "react-router-dom"; 
import {StateContext} from "../../Context/context"; 
import { products } from "../../data/products"; 
 
function Productinfo({ product }) { 
  const { id, image, price, title } = product; 
  const {  dispatch } = useContext(StateContext); 
  const navigate = useNavigate(); 
  const chooseBtn = () => { 
    navigate(`/productDetail/${id}`); 
  }; 
  const clickBtn=()=>{ 
    const chosenPro=products.find((item)=>item.id===id) 
    dispatch({type:"ADD",payload:product}) 
  } 
  return ( 
    <div key={id} className="product"> 
      <img 
        onClick={chooseBtn} 
        height="300px" 
        width="300px" 
        src={image} 
        alt={title} 
      /> 
      <p>mahsulot nomi:{title}</p> 
      <p>mahsulot narhi:{price}</p> 
      <button onClick={clickBtn}>Tanlash</button> 
    </div> 
  ); 
} 
 
export default Productinfo;