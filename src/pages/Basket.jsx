import React, { useContext } from "react";
import { StateContext } from "../Context/context";

function Basket() {
  const { state } = useContext(StateContext);
  console.log(state);
  return (
    <div>
      {state.product.lenth > 0 ? (
        state.product.map((item) => (
          <>
            <img src={item.image} alt="" />
            <p>nomi:{item.title}</p>
          </>
        ))
      ) : (
        <h1>BOSH</h1>
      )}
    </div>
  );
}

export default Basket;
