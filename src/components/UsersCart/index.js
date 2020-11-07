import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import styles from "./styles.module.css";
import mobileStyles from "./mobileStyles.module.css";
import { checkoutTotal, getOrCreateCart, cartItems } from "../../utils";
import Modal from "../Modal";
import { processToCheckout } from "../../utils";
import { useHistory } from "react-router-dom";

const UsersCart = ({ resturantName }) => {
  const history = useHistory();
  const cart = getOrCreateCart();
  // const itemCount = Object.keys(cart).length;
  const total = checkoutTotal(cart);
  const shoppingCart = [];
  const [update, setUpdate] = useState(false);
  const [display, setDisplay] = useState(false);


  const closeModal = () => {
    setDisplay(false);
  };

  const cartItems = () => {
    for (let item in cart) {
      if (cart[item].total !== 0) {
        shoppingCart.push({
          quantity: cart[item].quantity,
          total: cart[item].total,
          name: cart[item].name,
          id: cart[item].itemId,
        });
      }
    }
  };



  const updateCart = () => {
    // console.log("updating");
    setUpdate(!update);
  };
  cartItems();

  const MobileCart = () => {
    return (
      <div className={mobileStyles["cart-button"]}>
        <button type="button" onClick={() => setDisplay(!display)}>
          <span> </span>
          <span>View Cart</span>
          <span></span>
        </button>
      </div>
    );
  };

  const DesktopCart = () => {
    return (
      <div className={styles["users-cart"]}>
        <h3>{resturantName}</h3>

        {shoppingCart.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            quantity={item.quantity}
            total={item.total}
            updateCart={updateCart}
          />
        ))}
        <div
          onClick={() => processToCheckout(history)}
          className={`${styles["users-cart__total"]} container`}
        >
          <div>
            <p>
              <strong>CHECK OUT (NGN)</strong>
            </p>
          </div>
          <div>
            <p>
              <strong>{total}</strong>
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Modal
        displayModal={display}
        closeCallback={closeModal}
        total={total}
        cartList={shoppingCart}
        resturantName={resturantName}
      />
      <MobileCart />
      <DesktopCart />
    </>
  );
};

export default UsersCart;
