import React from "react";
import "./App.css";
import HomeLayout from "./Layout/HomeLayout";
import { path } from "./url";
import ResturantLayout from "./Layout/ResturantLayout";
import LoginLayout from "./Layout/LoginLayout";
import SignUpLayout from "./Layout/SignUpLayout";
import OrderLayout from "./Layout/OrderLayout";
import ImageUpload from "./Layout/FileStackLayout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CheckoutLayout from "./Layout/CheckoutLayout";
import ProtectedRoute from "./ProtectedRoute";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import AboutUs from "./Layout/About Us";

function App() {
  return (
    <div>
      <ReactNotification />
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
          <ProtectedRoute
            path={path.order + "/checkout"}
            exact
            component={CheckoutLayout}
          />
          <Route path={"/upload"} exact component={ImageUpload}></Route>
          <Route path={path.login} exact component={LoginLayout}></Route>
          <Route path={path.signup} exact component={SignUpLayout}></Route>
          <Route path={"/about"} exact component={AboutUs}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
