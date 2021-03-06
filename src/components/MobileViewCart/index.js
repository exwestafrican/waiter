import React, { useContext } from "react";
import CartModal from "../CartModal";
import style from "./styles.module.css";
import CartContext from "../../context/cart-context";

function MobileViewCart() {
  const { cart_item, setModalDisplay } = useContext(CartContext);
  return (
    <React.Fragment>
      <CartModal />
      <div
        className={style["cart-button"]}
        onClick={() => setModalDisplay("block")}
      >
        <button type="button">
          <span className={style["bold-text"]}>{cart_item.length}</span>
          <span className={style["bold-text"]}>View Cart</span>
          <span></span>
        </button>
      </div>
    </React.Fragment>
  );
}

export default MobileViewCart;
