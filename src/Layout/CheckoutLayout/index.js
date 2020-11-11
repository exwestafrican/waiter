import React from "react";
import Banner from "../../components/Banner";
import CheckOutCart from "../../components/CheckOutCart";
import CheckOutForm from "../../components/CheckOutForm";
import NavBar from "../../components/NavBar";
import styles from "./styles.module.css";

import Footer from "../../components/Footer";

const CheckoutLayout = () => {
  return (
    <>
      <NavBar />
      <Banner image={"https://cdn.filestackcontent.com/MgaLQsTTU2n9wN0MtYnQ"} />
      <div className={`${styles.split} container marign-top section-body`}>
        <div className={`${styles["left-content"]}`}>
          <CheckOutForm />
        </div>
        <div className={styles["right-content"]}>
          <CheckOutCart />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckoutLayout;
