import React, { useContext, useState } from "react";
import styles from "./styles.module.css";
import cartContext from "../../context/cart-context";
import { handleNotification } from "../../utils/notification";
const StoreItem = ({
  productID,
  name,
  category,
  baseCharge,
  additionCharge,
  available,
}) => {
  const { addProduct, cart_item } = useContext(cartContext);
  const [inCart, setInCart] = useState(false);
  console.log(cart_item);

  function handleAddProduct() {
    if (inCart === false) {
      addProduct({
        product: productID,
        quantity: 1,
        product_name: name,
        baseCharge,
        additionCharge,
        added: true,
      });
      setInCart(true);
      handleNotification("Added Item", "Item added to cart", "success");
    } else {
      handleNotification("Item in Cart", "Item already in cart");
    }
  }

  return (
    <div
      className={styles["item-component"]}
      onClick={() => {
        handleAddProduct({
          product: productID,
          quantity: 1,
          product_name: name,
          baseCharge,
          additionCharge,
          added: true,
        });
        setInCart(true);
      }}
    >
      <div className={styles["item-component_discription"]}>
        <div className={styles["item-component_discription_header"]}>
          <h5>
            {name}
            <p>
              <small className={styles["not-available"]}>
                {available ? "" : "Not Available"}
              </small>{" "}
            </p>
          </h5>
          <p className={styles["item-component_price"]}>
            <small>{baseCharge} NGN</small>
          </p>
        </div>
        <p>Product belong to {category} category</p>
      </div>
    </div>
  );
};

export default StoreItem;
