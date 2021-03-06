import React, { useEffect, useState } from "react";

import AdminCartItem from "../AdminCartItems";
import AdminCheckoutFees from "../AdminCheckoutFees";
import { fetchCart } from "../../Api/MW-bot";
import { useRouteMatch } from "react-router-dom";
import AdminCheckoutForm from "../AdminCheckoutForrm";
import Loader from "../Loader";
import styles from "./styles.module.css";
function AdminCheckout() {
  const param = useRouteMatch().params;
  const [state, setState] = useState({
    products: [],
    total: 0,
    fee: 0,
    userDetail: {},
    isLoading: true,
    paymentLink: "",
  });

  function calTotal(items) {
    let cartTotal = 0;
    for (const item of items) {
      let itemTotal = item.total;
      cartTotal += itemTotal;
    }
    return cartTotal;
  }

  function cartTotal(total, fees) {
    return total + fees;
  }

  useEffect(() => {
    const data = async () => {
      const cart = await fetchCart(param.id);
      const total = calTotal(cart.cart_item);
      setState({
        ...state,
        products: cart.cart_item,
        total: total,
        fee: cart.fees,
        isLoading: false,
        paymentLink: cart.payment_link,
        userDetail: {
          name: cart.name,
          phoneNumber: cart.contact,
          address: cart.delivery_address,
          email: cart.email,
        },
      });
    };
    data();
  }, []);

  return state.isLoading ? (
    <Loader />
  ) : (
    <React.Fragment>
      <div className={`${styles.split} container marign-top section-body`}>
        <div className={`${styles["left-content"]}`}>
          <AdminCheckoutForm
            key={1}
            userDetail={state.userDetail}
            paymentLink={state.paymentLink}
          />
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
                key={product.id}
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

export default AdminCheckout;
