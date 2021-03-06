import React, { useContext, useState } from "react";
import style from "./styles.module.css";
import cartContext from "../../context/cart-context";
function CartItemCounter({ productID, quantity }) {
  const [qty, setQty] = useState(quantity);
  const { changeQty } = useContext(cartContext);

  function subtract(productID) {
    const new_qty = qty - 1;
    setQty(Math.max(1, new_qty));
    changeQty({ product: productID, quantity: new_qty });
  }
  function add(productID) {
    const new_qty = qty + 1;
    setQty(new_qty);
    changeQty({ product: productID, quantity: new_qty });
  }

  return (
    <React.Fragment>
      <div className="btn-group btn-group-sm" role="group">
        <button
          type="button"
          className={`btn ${style["set-border"]}`}
          onClick={() => subtract(productID)}
        >
          <ion-icon name="remove-outline"></ion-icon>
        </button>
        <button type="button" className="btn">
          {qty}
        </button>
        <button
          type="button"
          className={`btn ${style["set-border"]}`}
          onClick={() => add(productID)}
        >
          <ion-icon name="add-outline"></ion-icon>
        </button>
      </div>
    </React.Fragment>
  );
}

export default CartItemCounter;
