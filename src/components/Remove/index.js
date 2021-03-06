import React, { useContext } from "react";
import style from "./styles.module.css";
import cartContext from "../../context/cart-context";

const Remove = ({ id }) => {
  const { removeProduct } = useContext(cartContext);
  return (
    <>
      <button
        type="button"
        className={`btn ${style["make-round"]}`}
        onClick={() => removeProduct(id)}
      >
        <ion-icon name="trash-outline"></ion-icon> <small>Remove</small>
      </button>
    </>
  );
};

export default Remove;
