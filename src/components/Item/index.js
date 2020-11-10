import React, { useState } from "react";
import Cart from "../Cart";
import styles from "./styles.module.css";
import image from "../../img/eggs.jpg";

const Item = ({ callback, itemId, baseprice, addonPrice, name, category }) => {
  return (
    <div
      className={styles["item-component"]}
      onClick={() => callback(itemId, baseprice, addonPrice, name)}
    >
      <div className={styles["item-component_img"]}>
        <img src={image} alt={"Rice"} />
      </div>

      <div className={styles["item-component_discription"]}>
        <div className={styles["item-component_discription_header"]}>
          <h5> {name}</h5>
          <p className={styles["item-component_price"]}>
            <small>{baseprice} NGN</small>
          </p>
        </div>
        <p>Very nice and delcious product in {category} category</p>
      </div>
    </div>
  );
};

export default Item;
