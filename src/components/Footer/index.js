import React from "react";
import style from "./style.module.css";
import { Link } from "react-router-dom";
import { path } from "../../url";

const Footer = () => {
  const LinkItem = (pathTo, pathName) => {
    return (
      <li className="list-inline-item">
        <Link to={path.aboutUs}>ABOUT US</Link>
      </li>
    );
  };

  const paths = [
    {
      pathTo: path.aboutUs,
      pathName: "ABOUT US",
    },
  ];
  return (
    <footer className={`text-center text-small ${style["footer_background"]}`}>
      <div className={style["center-items"]}>
        <p className="mb-1">&copy; 2020-2021 MOBILE WAITER</p>
        <ul className="list-inline">
          {paths.map((p, index) => (
            <LinkItem key={index} pathTo={p.pathTo} pathname={p.pathName} />
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
