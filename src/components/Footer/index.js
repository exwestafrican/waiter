import React from "react";
import style from "./style.module.css";

const Footer = () => {
  return (
    <footer className=" text-muted text-center text-small">
      <p className="mb-1">&copy; 2020-2021 MOBILE WAITER</p>
      <ul className="list-inline">
        <li className="list-inline-item">
          <a href="#">Privacy</a>
        </li>
        <li className="list-inline-item">
          <a href="#">Terms</a>
        </li>
        <li className="list-inline-item">
          <a href="#">Support</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
