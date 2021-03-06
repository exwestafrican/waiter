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
      <div className="btn-group btn-group-sm" role="group">
        <button
          type="button"
          className={`btn ${style["set-border"]}`}
          onClick={() => subtract(itemId)}
        >
          <ion-icon name="remove-outline"></ion-icon>
        </button>
        <button type="button" className="btn">
          {shoppingCart.total}
        </button>
        <button
          type="button"
          className={`btn ${style["set-border"]}`}
          onClick={() => add(itemId)}
        >
          <ion-icon name="add-outline"></ion-icon>
        </button>
      </div>

   
    </>
  );
};
export default Counter;
