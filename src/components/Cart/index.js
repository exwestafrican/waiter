import React, { useState } from "react";
import Counter from "../Counter";
import Remove from "../Remove";
import BlockButton from "../BlockButton";
import style from "./styles.module.css";
import {
  shoppingCartList,
  updateCartStorage,
  processToCheckout,
} from "../../utils/shoppingCart";
import { useRouteMatch, useHistory } from "react-router-dom";

const Cart = ({ shoppingCart }) => {
  const param = useRouteMatch().params;
  const resturant = param.name;
  const [, updateLastRemoved] = useState(0);
  const cart = shoppingCartList(shoppingCart);
  const history = useHistory();

  const RemoveItemFromCart = (itemId) => {
    const item = shoppingCart[itemId];
    item.quantity = 0;
    delete shoppingCart[itemId];
    updateCartStorage(shoppingCart);
    updateLastRemoved(itemId);
  };

  const CartItem = ({ name, addonPrice, basePrice, quantity, itemId }) => {
    return (
      <div className={style["gap"]}>
        <div className={style["split"]}>
          <h5>{name}</h5>
          <small className={style["price"]}>₦{addonPrice}</small>
        </div>

        <div className={style["split"]}>
          <div>
            <Remove callback={RemoveItemFromCart} id={itemId} />
          </div>
          <div>
            <Counter
              key={itemId}
              quantity={quantity}
              addonPrice={addonPrice}
              basePrice={basePrice}
              itemId={itemId}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className={`${style["cart-content"]}`}>
      <div className={style["cart-header"]}>
        <small>ORDER FROM</small>
        <p>{resturant}</p>
      </div>
      {cart.map((item) => (
        <CartItem
          key={item.itemId}
          itemId={item.itemId}
          name={item.name}
          addonPrice={item.addonPrice}
          quantity={item.quantity}
          basePrice={item.baseprice}
        />
      ))}

      <BlockButton
        name={"CHECK OUT"}
        callBack={() => processToCheckout(history)}
      />
    </section>
  );
};

export default Cart;
