import React, { useState } from "react";
import foodImage from "../../img/eggs.jpg";
import Item from "./component";
import { getOrCreateCart, checkoutTotal } from "../../utils";
import UsersCart from "../UsersCart";

const FoodItem = ({
  resturantMenu,
  resturantName,
  resturantId,
  schoolName,
}) => {
  const cart = getOrCreateCart();
  const [state, setState] = useState({
    cartTotal: checkoutTotal(cart),
  });

  const updateCart = () => {
    setState({ cartTotal: checkoutTotal(cart) });
  };

  // qty = ((total - baseAmout)/addonPrice) + 1
  const Component = () => {
    return resturantMenu.map((item) => {
      const uniqueId = item.itemId + item.restaurantId;
      if (item.available === 1) {
        if (cart[uniqueId]) {
          item["inCart"] = "true";

          item["total"] = cart[uniqueId].total;
          item["quantity"] =
            (cart[uniqueId].total - item.baseAmout) / item.addonPrice + 1;
        }

        return (
          <Item
            key={item.id}
            id={uniqueId}
            name={item.name}
            category={item.category}
            image={foodImage}
            baseAmount={item.baseAmount}
            amountPerAddition={item.amountPerAddition}
            total={item.total}
            cart={cart}
            uniqueId={uniqueId}
            callback={updateCart}
            resturantName={resturantName}
            restaurantId={resturantId}
            schoolName={schoolName}
            inCart={item.inCart}
          />
        );
      }
    });
  };

  return (
    <div className="split">
      <UsersCart resturantName={resturantName} />
      <div>
        <Component />
      </div>
    </div>
  );
};

export default FoodItem;
