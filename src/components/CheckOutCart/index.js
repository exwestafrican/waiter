import React from "react";

import { currentResturant } from "../../utils/resturant";
import {
  getCartFromLocalStorage,
  shoppingCartList,
  itemTotal,
  checkoutTotal,
  FEE,
} from "../../utils/shoppingCart";

const CheckOutCart = () => {
  const resturant = currentResturant();
  const shoppingCart = getCartFromLocalStorage();
  const total = checkoutTotal(shoppingCart);
  const cartList = shoppingCartList(shoppingCart);
  const itemCount = Object.keys(shoppingCart).length;

  const Items = ({ name, addonPrice, quantity, baseprice }) => {
    const total = itemTotal(quantity, addonPrice, baseprice);
    return (
      <li className="list-group-item d-flex justify-content-between lh-condensed">
        <div>
          <h6 className="my-0">{name}</h6>
        </div>
        <span className="text-muted">₦{total}</span>
      </li>
    );
  };
  return (
    <>
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-muted">{resturant.resturantName}</span>
        <span className="badge badge-secondary badge-pill">{itemCount}</span>
      </h4>
      <ul className="list-group mb-3">
        {cartList.map((item) => (
          <Items
            key={item.itemId}
            name={item.name}
            addonPrice={item.addonPrice}
            quantity={item.quantity}
            baseprice={item.baseprice}
          />
        ))}
        <li className="list-group-item d-flex justify-content-between bg-light">
          <div className="text-success">
            <h6 className="my-0">Pack Cost</h6>
            <small>plus service charge</small>
          </div>
          <span className="text-success">₦{FEE} </span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>Total (NGN)</span>
          <strong>₦{total + FEE}</strong>
        </li>
      </ul>
    </>
  );
};

export default CheckOutCart;
