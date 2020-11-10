import React, { useState } from "react";
import style from "./styles.module.css";
import { useRouteMatch, useHistory } from "react-router-dom";
// import {
//   shoppingCartList,
//   updateCartStorage,
//   processToCheckout,
// } from "../../utils/shoppingCart";

import Modal from "../Modal";

const MobileCart = ({ shoppingCart }) => {
  const param = useRouteMatch().params;
  const resturant = param.name;
  const [, updateLastRemoved] = useState(0);
  const [refresh, setRefresh] = useState(false);
  //   const cart = shoppingCartList(shoppingCart);
  const itemCount = Object.keys(shoppingCart).length;
  //   const history = useHistory();
  const [display, setDisplay] = useState(false);

  const closeModal = () => {
    setDisplay(false);
    setRefresh(!refresh);
  };

  return (
    <>
      <Modal
        displayModal={display}
        closeCallback={closeModal}
        total={0}
        shoppingCart={shoppingCart}
        resturantName={resturant}
      />
      <div
        className={style["cart-button"]}
        onClick={() => setDisplay(!display)}
      >
        <button type="button">
          <span>{itemCount}</span>
          <span>View Cart</span>
          <span></span>
        </button>
      </div>
    </>
  );
};

export default MobileCart;
