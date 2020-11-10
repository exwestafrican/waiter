import React, { useState } from "react";
import Cart from "../Cart";
import Item from "../Item";
import MobileCart from "../MobileCart";
import {
  getCartFromLocalStorage,
  findItemInCart,
  updateCartStorage,
} from "../../utils/shoppingCart";

const Order = ({ foodItems }) => {
  const [shoppingCart, updateShoppingCart] = useState(
    getCartFromLocalStorage()
  );

  const updateCart = (itemId, baseprice, addonPrice, name) => {
    const item = findItemInCart(itemId);
    if (item === null) {
      const shoppingCart = addItemtoCart(itemId, baseprice, addonPrice, name);
      updateShoppingCart(shoppingCart);
    } else {
      const shoppingCart = removeItemFromCart(itemId);
      updateShoppingCart(shoppingCart);
      // remove item from cart
    }
  };

  const addItemtoCart = (itemId, baseprice, addonPrice, name) => {
    const shoppingCart = getCartFromLocalStorage();
    shoppingCart[itemId] = { itemId, name, quantity: 1, baseprice, addonPrice };
    updateCartStorage(shoppingCart);
    return shoppingCart;
  };

  const removeItemFromCart = (itemId) => {
    const shoppingCart = getCartFromLocalStorage();
    delete shoppingCart[itemId];
    updateCartStorage(shoppingCart);
    return shoppingCart;
  };

  return (
    <>
      <MobileCart shoppingCart={shoppingCart} />
      <Cart shoppingCart={shoppingCart} />
      <div>
        {foodItems.map((item) => {
          if (item.available)
            return (
              <Item
                key={item.itemId}
                itemId={item.itemId}
                name={item.name}
                baseprice={item.baseAmount}
                addonPrice={item.amountPerAddition}
                category={item.category}
                callback={updateCart}
              />
            );
        })}
      </div>
    </>
  );
};

export default Order;
