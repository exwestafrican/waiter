import React from "react";
import styles from "./styles.module.css";
import { RemoveItemFromCart } from "../../utils";

const CartItem = ({ name, quantity, total, id, updateCart }) => {
  const onClickHandler = () => {
    console.log("done", id);
    RemoveItemFromCart(id);
    updateCart();
  };

  return (
    <div
      className={`${styles["users-cart__description"]} container ${styles.price}`}
    >
      <div>
        <p>{quantity}</p>
        <p>
          <strong>{name}</strong>
        </p>
      </div>

      <div>
        <p>
          {" "}
          <strong>{total}</strong>
        </p>
        <i onClick={onClickHandler} className="close icon"></i>
      </div>
    </div>
  );
};

export default CartItem;
