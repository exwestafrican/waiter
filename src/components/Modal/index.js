import React from "react";
import styles from "./styles.module.css";
import { processToCheckout } from "../../utils";
import { useHistory } from "react-router-dom";
import CartItem from "../UsersCart/CartItem";

const Modal = ({
  displayModal,
  closeCallback,
  total,
  cartList,
  resturantName,
  updateCart,
}) => {
  const showModal = displayModal ? "block" : "none";
  const history = useHistory();
  return (
    <div className="modal " style={{ display: showModal }}>
      <div
        className="modal-dialog check-out-pop-up modal-dialog-centered"
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
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                total={item.total}
                updateCart={updateCart}
              />
            ))}
          </div>
          <div className={` ${styles["cart-modal-checkout"]} modal-footer`}>
            <div
              className={` ${styles["item-detail-button-layout"]}
                ${styles["add-on-btn-display"]}`}
            >
              <button type="submit " onClick={() => processToCheckout(history)}>
                <p>CHECKOUT</p>
                <p>₦{total}</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
