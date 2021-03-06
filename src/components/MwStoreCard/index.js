import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

function MwStoreCard({ storeID, productName, deliveryTime, image, address }) {
  const style = {
    margin: "1rem 0",
    textDecoration: "none",
  };
  return (
    <div>
      <Link
        to={"/stores/" + storeID + "/products"}
        className="ui medium image"
        style={style}
        onClick={(e) => {}}
      >
        <img src={image} alt={productName} />
        {/* <div className={`ui ${storeStatus(status).color} right corner label`}>
          <i className={`${storeStatus(status).lock} icon`}></i>
        </div> */}
        <h5 className={styles.resturant_name}>
          {productName}
          <small>({address})</small>
        </h5>
        <h6 className={styles.delivery_details}>
          Estimated Delivery Time: {deliveryTime}mins
        </h6>
      </Link>
    </div>
  );
}

export default MwStoreCard;
