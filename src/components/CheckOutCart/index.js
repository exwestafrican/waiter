import React from "react";
import {
  getOrCreateCart,
  checkoutTotal,
  getCurrentResturantFromLocalStrorage,
} from "../../utils";

const CheckOutCart = () => {
  const cart = getOrCreateCart();
  const itemCount = Object.keys(cart).length;
  const newCart = [];
  const deliveryFee = 100;
  const resturant = getCurrentResturantFromLocalStrorage();
  const total = checkoutTotal(cart);

  const cartItems = () => {
    for (let item in cart) {
      if (cart[item].total !== 0) {
        newCart.push({
          quantity: cart[item].quantity,
          total: cart[item].total,
          name: cart[item].name,
          id: cart[item].itemId,
        });
      }
    }
  };

  cartItems();
  const Items = ({ name, total }) => {
    return (
      <li className="list-group-item d-flex justify-content-between lh-condensed">
        <div>
          <h6 className="my-0">{name}</h6>
        </div>
        <span className="text-muted">{total}</span>
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
        {newCart.map((item) => (
          <Items key={item.itemId} name={item.name} total={item.total} />
        ))}
        <li className="list-group-item d-flex justify-content-between bg-light">
          <div className="text-success">
            <h6 className="my-0">Delivery Cost</h6>
            <small>EXAMPLECODE</small>
          </div>
          <span className="text-success">${deliveryFee}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>Total (NGN)</span>
          <strong>${total + deliveryFee}</strong>
        </li>
      </ul>
    </>
  );
};

export default CheckOutCart;
