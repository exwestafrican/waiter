import React, { useState, useContext } from "react";
import styles from "./styles.module.css";
import BlockButton from "../BlockButton";
import CartContext from "../../context/cart-context";
import CartItem from "../CartItem";

function CartModal() {
  const { modalDisplay, setModalDisplay, cart_item } = useContext(CartContext);
  return (
    <div className="modal " style={{ display: modalDisplay }}>
      <div
        className="modal-dialog check-out-pop-up modal-dialog-centered modal-dialog-scrollable"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {"vendor"}
            </h5>
            <button
              type="button"
              className="close"
              onClick={() => setModalDisplay("none")}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {cart_item.map((product) => (
              <CartItem
                key={product.product}
                name={product.product_name}
                additionCharge={product.additionCharge}
                baseCharge={product.baseCharge}
                quantity={product.quantity}
                productID={product.product}
              />
            ))}
          </div>
          <div className={` ${styles["cart-modal-checkout"]} modal-footer`}>
            <BlockButton
              name={"CHECK OUT"}
              //   callBack={() => processToCheckout(history)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
