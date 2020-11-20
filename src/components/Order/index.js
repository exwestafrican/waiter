import React, { useState } from "react";
import Cart from "../Cart";
import Item from "../Item";
import MobileCart from "../MobileCart";
import {
  getCartFromLocalStorage,
  findItemInCart,
  updateCartStorage,
} from "../../utils/shoppingCart";
import { UniqueCategories } from "../../utils/general";
import { handleNotification } from "../../utils/notification";
import style from "./styles.module.css";

const Order = ({ foodItems }) => {
  const [shoppingCart, updateShoppingCart] = useState(
    getCartFromLocalStorage()
  );

  const categoryContent = UniqueCategories(foodItems);
  const categories = Object.keys(categoryContent).reverse();

  const updateCart = (itemId, baseprice, addonPrice, name, available) => {
    if (available) {
      const item = findItemInCart(itemId);
      if (item === null) {
        const shoppingCart = addItemtoCart(itemId, baseprice, addonPrice, name);
        updateShoppingCart(shoppingCart);
      } else {
        const shoppingCart = removeItemFromCart(itemId, name);
        updateShoppingCart(shoppingCart);
        // remove item from cart
      }
    } else {
      handleNotification(
        "Not Available",
        "Item is not available in cafe right now"
      );
    }
  };

  const addItemtoCart = (itemId, baseprice, addonPrice, name) => {
    const shoppingCart = getCartFromLocalStorage();
    shoppingCart[itemId] = { itemId, name, quantity: 1, baseprice, addonPrice };
    updateCartStorage(shoppingCart);
    const message = `you added 1 ${name} to cart, view cart to add more`;
    handleNotification("Added Item", message, "success");
    return shoppingCart;
  };

  const removeItemFromCart = (itemId, name) => {
    const shoppingCart = getCartFromLocalStorage();
    delete shoppingCart[itemId];
    updateCartStorage(shoppingCart);
    const message = `you removed 1 ${name} from cart`;
    handleNotification("Removed Item", message);
    return shoppingCart;
  };

  const Category = ({ categoryName }) => {
    const itemInCategory = categoryContent[categoryName];
    return (
      <section>
        <header className={style["title"]}>{categoryName}</header>
        <div>
          {itemInCategory.map((item) => {
            return (
              <Item
                key={item.itemId}
                itemId={item.itemId}
                name={item.name}
                baseprice={item.baseAmount}
                addonPrice={item.amountPerAddition}
                category={item.category}
                callback={updateCart}
                available={item.available}
              />
            );
          })}
        </div>
      </section>
    );
  };

  return (
    <>
      <MobileCart shoppingCart={shoppingCart} />
      <Cart shoppingCart={shoppingCart} />
      <div>
        {categories.map((c, index) => (
          <Category key={index} categoryName={c} />
        ))}
      </div>
    </>
  );
};

export default Order;
