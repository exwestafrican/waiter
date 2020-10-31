import React from "react";
import { Link } from "react-router-dom";
import { path } from "../../url";
import { pathName } from "../../utils";

const Options = ({ name, id }) => {
  const style = {
    textDecoration: "none",
  };

  return (
    <Link
      to={`${path.resturantPage}/${pathName(name)}/${id}`}
      style={style}
      className="item"
    >
      {name}
    </Link>
  );
};

export default Options;
