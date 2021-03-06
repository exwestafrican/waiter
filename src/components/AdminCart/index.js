import React, { useContext } from "react";
import BlockButton from "../BlockButton";
import style from "./styles.module.css";
import CartItem from "../CartItem";
import CartContext from "../../context/cart-context";
function AdminCart({ store }) {
  const { cart_item } = useContext(CartContext);
  console.log(cart_item);
  return (
    <section className={`${style["cart-content"]}`}>
      <div className={style["cart-header"]}>
        <small>ORDER FROM</small>
        <p>{store}</p>
      </div>
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
      <BlockButton
        name={"CHECK OUT"}
        // callBack={() => processToCheckout(history)}
      />
    </section>
  );
}

export default AdminCart;
