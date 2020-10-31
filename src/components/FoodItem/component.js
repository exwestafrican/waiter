import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
import {
  saveCartInLocalStorage,
  getOrCreateCart,
  currentResturant,
  removeResturantFromLocalStorage,
  addNewResturantToLocalStorage,
  resturantInLocalStorage,
} from "../../utils";

const Item = ({
  image,
  id,
  name,
  category,
  baseAmount,
  amountPerAddition,
  total,
  cart,
  callback,
  resturantName,
  restaurantId,
  schoolName,
  inCart,
}) => {
  const [state, setState] = useState({
    total: total,
  });

  const findItem = () => cart[id];

  const createNewCart = () => {
    // mutate global cart
    cart = {};
    saveCartInLocalStorage(cart);
  };

  const AddItemToCart = (id, baseAmount) => {
    // if item does not belog to belong to resturant

    if (!resturantInLocalStorage()) {
      // if no resturant in local storage

      addNewResturantToLocalStorage(resturantName, restaurantId, schoolName);
    } else if (!currentResturant(restaurantId)) {
      // if current resturant is different from  previous resturant
      removeResturantFromLocalStorage();
      addNewResturantToLocalStorage(resturantName, restaurantId, schoolName);
      createNewCart();
    }
    // adding item to cart
    cart[id] = {
      itemId: id,
      total: baseAmount,
      quantity: 1,
      name,
    };

    return baseAmount;
  };

  const RemoveItemFromCart = (id) => {
    if (total === 0) {
      cart = getOrCreateCart();
      delete cart[id];
      saveCartInLocalStorage(cart);
    }
  };

  const handleAddition = () => {
    const cartItem = findItem();
    let cartItemTotal;
    if (cartItem === undefined) {
      cartItemTotal = AddItemToCart(id, baseAmount);
    } else {
      cartItem.total = cartItem.total + amountPerAddition;
      cartItemTotal = cartItem.total;
      cartItem.quantity = (cartItem.total - baseAmount) / amountPerAddition + 1;
    }
    saveCartInLocalStorage(cart);
    setState({ total: cartItemTotal });
    // callback();
  };

  const handleSubtraction = () => {
    const cartItem = findItem();
    let cartItemTotal;

    if (cartItem === undefined) {
      cartItemTotal = AddItemToCart(id, 0);
    } else {
      cartItem.total = Math.max(cartItem.total - amountPerAddition, 0);
      cartItemTotal = cartItem.total;
      cartItem.quantity = (cartItem.total - baseAmount) / amountPerAddition + 1;
    }
    saveCartInLocalStorage(cart);
    setState({ ...state, total: cartItemTotal });
  };

  const Component = () => {
    RemoveItemFromCart(id);

    return (
      <div className={styles["item-component"]}>
        <div className={styles["item-component_img"]}>
          <img src={image} alt={name} />
        </div>

        <div className={styles["item-component_discription"]}>
          <div className={styles["item-component_discription_header"]}>
            <h5> {name}</h5>
            <p className={styles["item-component_price"]}>
              <small>{baseAmount} NGN</small>
            </p>
          </div>
          <p>This is a delightfult sturvs with alot of many many many</p>
          <div className={styles["cart_button"]}>
            <div className=" mini ui basic buttons">
              <div className="mini ui button">
                {" "}
                <i onClick={handleSubtraction} className="minus icon"></i>
              </div>
              <div className="mini ui button">
                {state.total > 0 ? state.total : 0}
              </div>
              <div className="mini ui button">
                {" "}
                <i onClick={handleAddition} className="green plus icon"></i>
              </div>
            </div>
            <div
              className={`btn btn-outline-${
                state.total > 0 ? "success" : "secondary"
              }`}
              onClick={() => {
                callback();
              }}
            >
              {" "}
              {inCart ? "Added" : "Add to Cart"}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return <Component />;
};

export default Item;
