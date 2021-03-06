import React, { useEffect, useState } from "react";
import AdminCartItem from "../AdminCartItems";
import AdminCheckoutFees from "../AdminCheckoutFees";
import MwCheckOutForm from "../MwCheckOutForm";
import styles from "./styles.module.css";
import { LocalStorageCart } from "../../utils/shoppingCart";
import NavBar from "../NavBar";

function MwCart() {
  const [state, setState] = useState({
    products: [],
    total: 0,
    fee: 100,
  });
  function cartTotal(total, fees) {
    return total + fees;
  }
  function calSubTotal(baseCharge, additionCharge, qty) {
    return baseCharge + additionCharge * (qty - 1);
  }
  function cumulativeSum(list) {
    return list.reduce((a, b) => a + b, 0);
  }
  useEffect(() => {
    const cartItems = LocalStorageCart();
    const productList = cartItems.map((product) => {
      return {
        product: product.product,
        quantity: product.quantity,
        product_name: product.product_name,
        total: calSubTotal(
          product.baseCharge,
          product.additionCharge,
          product.quantity
        ),
      };
    });
    const subTotals = productList.map((product) => product.total);
    setState({
      ...state,
      total: cumulativeSum(subTotals),
      products: productList,
    });
  }, []);

  return (
    <React.Fragment>
      <NavBar />
      <div className={`${styles.split} container marign-top section-body`}>
        <div className={`${styles["left-content"]}`}>
          <MwCheckOutForm products={state.products} />;
        </div>
        <div className={styles["right-content"]}>
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Your cart</span>
            <span className="badge bg-secondary rounded-pill">
              {state.products.length}
            </span>
          </h4>
          <ul className="list-group mb-3">
            {state.products.map((product) => (
              <AdminCartItem
                key={product.product}
                name={product.product_name}
                total={product.total}
              />
            ))}
            <AdminCheckoutFees
              key={1}
              product={"Delivery Fee"}
              total={state.fee}
            />
            <li className="list-group-item d-flex justify-content-between">
              <span>Total (NGN)</span>
              <strong>₦{cartTotal(state.total, state.fee)}</strong>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

export default MwCart;
