import React, { useState } from "react";
import { path, CONTACT_US } from "../../url";
import user from "../../auth";
import { useHistory, Link } from "react-router-dom";
import { redirectHome, processToLogin } from "../../utils/general";

const NavBar = () => {
  const btnColor = user.isAuthenticated()
    ? "negative ui button"
    : "positive ui button";

  const [navToggle, setNavToggle] = useState(false);
  const display = navToggle ? "" : "collapse";
  const history = useHistory();

  const onClickHandler = () => {
    if (user.isAuthenticated()) {
      user.logout();
      redirectHome(history);
    } else {
      processToLogin(history);
    }
  };

  const pageLinks = [
    {
      name: "HOME",
      linkTo: path.home,
    },
    {
      name: "ABOUT US",
      linkTo: path.aboutUs,
    },
  ];

  const NavLink = ({ name, linkTo }) => {
    return (
      <li className="nav-item active">
        <Link to={linkTo} className="nav-link">
          {name}
          {/* <span className="sr-only">(current)</span> */}
        </Link>
      </li>
    );
  };

  return (
    <nav className="navbar navbar-light">
      <div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setNavToggle(!navToggle)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      {/* <button className={btnColor} type="button" onClick={onClickHandler}>
        {user.isAuthenticated() ? "Sign Out" : "Sign In"}
      </button> */}
      <a href={CONTACT_US}>
        <button
          className="negative ui button"
          type="button"
          onClick={onClickHandler}
        >
          Find My Food
        </button>
      </a>
      <div className={` ${display} navbar-collapse `} id="navbarNavDropdown">
        <ul className="navbar-nav">
          {pageLinks.map((link, index) => (
            <NavLink key={index} name={link.name} linkTo={link.linkTo} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
