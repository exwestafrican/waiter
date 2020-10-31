import React from "react";
import logo from "../../logo.svg";
import { path } from "../../url";
import { Link } from "react-router-dom";

let isAuthenticated = false;
const btnColor = isAuthenticated ? "negative ui button" : "positive ui button";

const NavBar = () => {
  return (
    <nav className="navbar navbar-light ">
      <div className="container">
        <Link className="navbar-brand" to={path.home}>
          <img
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-center"
            alt=""
            loading="lazy"
          />
        </Link>
        <div>
          <button className={btnColor} type="button">
            {" "}
            {isAuthenticated ? "Sign Out" : "Sign In"}
          </button>
          {/* <div class="ui vertical animated button" tabindex="0">
            <div class="hidden content">Shop</div>
            <div class="visible content">
              <i class="shop icon"></i>
            </div>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
