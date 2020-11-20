import React, { useState } from "react";
import styles from "./styles.module.css";
import { useHistory } from "react-router-dom";
import { itemTotal } from "../../utils/shoppingCart";
import Counter from "../Counter";
import Remove from "../Remove";
import {
  shoppingCartList,
  updateCartStorage,
  checkoutTotal,
  processToCheckout,
} from "../../utils/shoppingCart";
import BlockButton from "../BlockButton";

const Modal = ({
  displayModal,
  closeCallback,
  resturantName,
  shoppingCart,
}) => {
  const total = checkoutTotal(shoppingCart);
  const cartList = shoppingCartList(shoppingCart);

  const showModal = displayModal ? "block" : "none";
  const history = useHistory();
  const [, updateLastRemoved] = useState(0);

  const RemoveItemFromCart = (itemId) => {
    const item = shoppingCart[itemId];
    item.quantity = 0;
    delete shoppingCart[itemId];
    updateCartStorage(shoppingCart);
    updateLastRemoved(itemId);
  };

  const CartItem = ({ name, addonPrice, basePrice, quantity, itemId }) => {
    return (
      <div className={styles["gap"]}>
        <div className={styles["split"]}>
          <h5 className={styles["make-bold"]}>{name}</h5>
          <small className={styles["price"]}>₦{addonPrice}</small>
        </div>

        <div className={styles["split"]}>
          <div>
            <Remove callback={RemoveItemFromCart} id={itemId} />
          </div>
          <div>
            <Counter
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
    <div className="modal " style={{ display: showModal }}>
      <div
        className="modal-dialog check-out-pop-up modal-dialog-centered modal-dialog-scrollable"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {resturantName}
            </h5>
            <button
              type="button"
              className="close"
              onClick={() => closeCallback()}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {cartList.map((item) => (
              <CartItem
                key={item.itemId}
                itemId={item.itemId}
                name={item.name}
                addonPrice={item.addonPrice}
                quantity={item.quantity}
                basePrice={item.baseprice}
                // updateCart={updateCart}
              />
            ))}
          </div>
          <div className={` ${styles["cart-modal-checkout"]} modal-footer`}>
            <BlockButton
              name={"CHECK OUT"}
              callBack={() => processToCheckout(history)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
