import React from "react";

import { currentResturant } from "../../utils/resturant";
import {
  getCartFromLocalStorage,
  shoppingCartList,
  itemTotal,
  checkoutTotal,
  posCharges,
  getDeliveryCharge,
  isPacked,
  findMaxPackPrice,
} from "../../utils/shoppingCart";
import { storeInLocalStorage } from "../../utils/general";

const CheckOutCart = () => {
  const resturant = currentResturant();
  const shoppingCart = getCartFromLocalStorage();
  const total = checkoutTotal(shoppingCart);
  const cartList = shoppingCartList(shoppingCart);
  const itemCount = Object.keys(shoppingCart).length;
  const packAmount = isPacked(cartList) ? findMaxPackPrice(cartList) : 0;
  const deliveryCharge = getDeliveryCharge(resturant.external, "hostel");
  const posCharge = posCharges(resturant.external, resturant.schoolName, total);

  function ExtraCharges({ title, description, amount }) {
    return (
      <li className="list-group-item d-flex justify-content-between bg-light">
        <div className="text-success">
          <h6 className="my-0">{title}</h6>
          <small>{description}</small>
        </div>
        <span className="text-success">₦ {amount}</span>
      </li>
    );
  }

  const charges = [
    {
      title: "POS",
      description: "merchant charges pos fees",
      amount: posCharge,
    },
    {
      title: "Delivery Fee",
      description: "how we generate revenue",
      amount: deliveryCharge,
    },
    {
      title: "Pack",
      description: "where we keep your food",
      amount: packAmount,
    },
  ];

  const cartTotal = total + deliveryCharge + packAmount + posCharge;
  storeInLocalStorage("charges", cartTotal - total);

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
    <React.Fragment>
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

        {charges.map((charge) => (
          <ExtraCharges
            title={charge.title}
            description={charge.description}
            amount={charge.amount}
          />
        ))}

        <li className="list-group-item d-flex justify-content-between">
          <span>Total (NGN)</span>
          <strong>₦ {cartTotal}</strong>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default CheckOutCart;
