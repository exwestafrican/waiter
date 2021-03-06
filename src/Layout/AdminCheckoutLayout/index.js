import React from "react";
import Banner from "../../components/Banner";
import AdminCheckoutForm from "../../components/AdminCheckoutForrm";
import AdminCheckout from "../../components/AdminCheckout";
import NavBar from "../../components/NavBar";
import styles from "./styles.module.css";

import Footer from "../../components/Footer";

const AdminCheckoutLayout = () => {
  return (
    <>
      <NavBar />
      <Banner image={"https://cdn.filestackcontent.com/MgaLQsTTU2n9wN0MtYnQ"} />
      <div className={`${styles.split} container marign-top section-body`}>
        <div className={`${styles["left-content"]}`}>
          <AdminCheckoutForm />
        </div>
        <div className={styles["right-content"]}>
          <AdminCheckout />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminCheckoutLayout;
