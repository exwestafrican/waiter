import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { pathName } from "../../utils";
import { path } from "../../url";
import { handleNotification } from "../../utils/notification";

const Resturant = ({
  id,
  university,
  image,
  resturantName,
  deliveryTime,
  status,
}) => {
  const style = {
    margin: "1rem 0",
    textDecoration: "none",
  };

  const resturantStatus = (isOpen) => {
    return {
      color: isOpen === true ? "green" : "red",
      lock: isOpen === true ? "lock" : "lock open",
    };
  };
  const link = status;

  console.log(status);
  const handleClick = (e) => {
    if (status === false) {
      console.log("here");
      e.preventDefault();
      handleNotification("Error", "All resturants are closed");
    }
  };
  return (
    <div>
      <Link
        to={path.order + "/" + pathName(resturantName) + "/" + id}
        className="ui medium image"
        style={style}
        onClick={(e) => handleClick(e)}
      >
        <img src={image} alt={resturantName} />
        <div class={`ui ${resturantStatus(status).color} right corner label`}>
          <i class={`lock icon`}></i>
        </div>
        <h5 className={styles.resturant_name}>
          {resturantName} <small>({university})</small>
        </h5>
        <h6 className={styles.delivery_details}>
          Estimated Delivery Time: {deliveryTime}mins
        </h6>
      </Link>
    </div>
  );
};

export default Resturant;
