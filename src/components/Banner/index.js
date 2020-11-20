import React from "react";
import styles from "./styles.module.css";

import NavBar from "../NavBar";
import SearchBar from "../SearchBar";

const Banner = ({ bannerHeight, image, showNav = false }) => {
  const height = styles.banner_height;

  const style = {
    background: `url(${image}),radial-gradient(rgb(219, 216, 216,0.3), rgb(214, 211, 211,0.3)) `,
    backgroundBlendMode: "multiply",
    backgroundAttachment: " scroll",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: " cover",
    display: "flex",
    flexDirection: "column",
    // opacity: "0.5",
    // filter: "alpha(opacity=30)",
  };
  const Display = () => (showNav ? <NavBar /> : null);

  return <div className={`${height} ${styles["banner"]}`}></div>;
};

export default Banner;
