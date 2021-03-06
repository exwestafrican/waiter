import React from "react";
import "./App.css";
import HomeLayout from "./Layout/HomeLayout";
import { path } from "./url";
import ResturantLayout from "./Layout/ResturantLayout";
import MwCart from "./components/MwCart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import AboutUs from "./Layout/About Us";
import AdminCheckout from "./components/AdminCheckout";
import MwStores from "./Layout/MwStores";
import Store from "./Layout/Store";
function App() {
  return (
    <div>
      <ReactNotification />
      <Router>
        <Switch>
          <Route path="/" exact component={MwStores} />
          <Route path={"/about"} exact component={AboutUs}></Route>
          {/* newly added */}
          <Route
            path={"/store/checkout" + "/:id"}
            exact
            component={AdminCheckout}
          ></Route>
          <Route
            path={"/stores" + "/:id" + "/products"}
            exact
            component={Store}
          ></Route>
          <Route path={"/stores"} exact component={MwStores}></Route>
          <Route path={"/stores/checkout"} exact component={MwCart}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
