import React from "react";
import "./App.css";
import HomeLayout from "./Layout/HomeLayout";
import { path } from "./url";
import ResturantLayout from "./Layout/ResturantLayout";
import OrderLayout from "./Layout/OrderLayout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CheckoutLayout from "./Layout/CheckoutLayout";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomeLayout} />
        <Route path={path.resturantPage} exact component={ResturantLayout} />
        <Route
          path={path.resturantPage + "/:name" + "/:id"}
          exact
          component={ResturantLayout}
        />
        <Route
          path={path.order + "/:name" + "/:id"}
          exact
          component={OrderLayout}
        />
        <Route
          path={path.order + "/checkout"}
          exact
          component={CheckoutLayout}
        />
      </Switch>
    </Router>
  );
}

export default App;
