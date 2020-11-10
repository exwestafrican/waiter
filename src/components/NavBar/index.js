import React from "react";
import logo from "../../logo.PNG";
import { path } from "../../url";
import { Link } from "react-router-dom";
import user from "../../auth";
import { useHistory } from "react-router-dom";
import { redirectHome, processToLogin } from "../../utils/general";

const NavBar = () => {
  const btnColor = user.isAuthenticated()
    ? "negative ui button"
    : "positive ui button";

  const history = useHistory();

  const onClickHandler = () => {
    if (user.isAuthenticated()) {
      user.logout();
      redirectHome(history);
    } else {
      processToLogin(history);
    }
  };

  return (
    <nav className="navbar navbar-light " style={{ padding: "0" }}>
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
          <button className={btnColor} type="button" onClick={onClickHandler}>
            {user.isAuthenticated() ? "Sign Out" : "Sign In"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
