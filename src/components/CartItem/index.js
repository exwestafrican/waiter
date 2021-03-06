import React from "react";
import CartItemCounter from "../CartItemCounter";
import Remove from "../Remove";
import style from "./styles.module.css";

function CartItem({ name, additionCharge, baseCharge, quantity, productID }) {
  function getItemTotal(baseCharge, quantity, additionCharge) {
    let total = baseCharge + (quantity - 1) * additionCharge;
    return total;
  }
  const itemTotal = getItemTotal(baseCharge, quantity, additionCharge);

  return (
    <div className={style["gap"]}>
      <div className={style["split"]}>
        <h5>{name}</h5>
        <small className={style["price"]}>₦{itemTotal}</small>
      </div>

      <div className={style["split"]}>
        <div>
          <Remove id={productID} />
        </div>
        <div>
          <CartItemCounter
            key={productID}
            quantity={quantity}
            additionCharge={additionCharge}
            baseCharge={baseCharge}
            productID={productID}
          />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
