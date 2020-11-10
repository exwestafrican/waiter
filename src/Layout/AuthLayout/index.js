import React from "react";

import Footer from "../../components/Footer";

import styles from "./styles.module.css";
import backgroundImage from "../../img/header.png";
import NavBar from "../../components/NavBar";

import user from "../../auth";
import { redirectHome } from "../../utils/general";
import { useHistory } from "react-router-dom";

const AuthLayout = ({ component: Component, ...args }) => {
  const history = useHistory();
  if (user.isAuthenticated()) {
    redirectHome(history);
  }
  return (
    <div>
      <NavBar />
  
      <div className={styles["split"]}>
        <section className={styles["left-side"]}>
          <img
            src={backgroundImage}
            className={styles["img-section"]}
            alt="logo"
          />
        </section>
        <section className={`${styles["right-side"]} container section-body`}>
          <div className="form-section__header">
            <h2>Welcome,</h2>
            <p>
              Best place to get food in your university.... Working on external
              orders
            </p>
          </div>
          <Component {...args} />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AuthLayout;
