import React, { useState } from "react";
import style from "./styles.module.css";
import {
  itemTotal,
  updateCartStorage,
  getCartFromLocalStorage,
} from "../../utils/shoppingCart";

const Counter = ({ quantity, addonPrice, basePrice, itemId }) => {
  const [shoppingCart, updateShoppingCart] = useState({
    total: itemTotal(quantity, addonPrice, basePrice),
    qty: quantity,
  });

  const add = () => {
    const qty = shoppingCart.qty + 1;
    const total = itemTotal(qty, addonPrice, basePrice);
    const storageCart = getCartFromLocalStorage();
    const item = storageCart[itemId];
    item.quantity = qty;
    updateCartStorage(storageCart);
    updateShoppingCart({ total: total, qty: qty });
  };

  const subtract = () => {
    if (shoppingCart.total > 0) {
      const qty = shoppingCart.qty - 1;
      const total = itemTotal(qty, addonPrice, basePrice);
      const storageCart = getCartFromLocalStorage();
      const item = storageCart[itemId];
      item.quantity = qty;
      updateCartStorage(storageCart);
      updateShoppingCart({ total: total, qty: qty });
    }
  };

  return (
    <>
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        className={`bi bi-dash-square ${style["pointer"]}`}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => subtract(itemId)}
      >
        <path
          fillRule="evenodd"
          d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
        />
        <path
          fillRule="evenodd"
          d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
        />
      </svg>
      <span className={style["pointer-space"]}>{shoppingCart.total}</span>
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        className={`bi bi-plus-square ${style["pointer"]}`}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => add(itemId)}
      >
        <path
          fillRule="evenodd"
          d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
        />
        <path
          fillRule="evenodd"
          d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
        />
      </svg>
    </>
  );
};
export default Counter;
