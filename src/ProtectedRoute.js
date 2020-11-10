import React from "react";
import user from "./auth";
import { Route, Redirect } from "react-router-dom";
import { path } from "./url";

const ProtectedRoute = ({ component: Component, ...args }) => {
  const propsToRender = (props) => {
    if (user.isAuthenticated()) {
      return <Component {...props} />;
    } else {
      const redirectArgs = {
        pathname: path.login,
        state: {
          from: props.location,
        },
      };
      return <Redirect to={redirectArgs} />;
    }
  };
  return <Route {...args} render={propsToRender} />;
};

export default ProtectedRoute;
