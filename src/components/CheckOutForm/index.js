import React, { useState } from "react";
import Select from "../Select";
import Input from "../Input";
import { currentResturant, isOpen } from "../../utils/resturant";
import {
  getCartFromLocalStorage,
  checkoutTotal,
  ApiShoppingList,
  FEE,
  emptyCart,
} from "../../utils/shoppingCart";
import { handleNotification } from "../../utils/notification";
import { makeOrder } from "../../Api";
import { path } from "../../url";
import { useHistory } from "react-router-dom";
import user from "../../auth";

const CheckOutForm = () => {
  const history = useHistory();
  const [state, setState] = useState({
    loading: false,
    text: "ORDER",
    color: "btn-primary",
    submit: false,
  });
  const userDetail = user.details();
  // only open if cart is not empty

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isOpen()) {
      const formData = new FormData(e.target);
      const resturant = currentResturant();
      // console.log(formData.get("paymentOption"));
      const cart = getCartFromLocalStorage();
      const cartList = ApiShoppingList(cart);
      const subTotal = checkoutTotal(cart);

      const data = {
        customerId: userDetail.userId,
        restaurantId: resturant.resturantId,
        subTotal: subTotal,
        fee: FEE,
        address: formData.get("address"),
        // did user select pay onnline
        onlinePayment:
          "Pay Online" === formData.get("paymentOption") ? true : false,
        itemList: [cartList],
      };
      // empty cache

      setState({ ...state, loading: true });
      // console.log(data);
      makeOrder(data, success, failed);
      handleNotification(
        "Sucess",
        "Your order was sucessfull so you in 30mins or less",
        "success"
      );
    } else {
      handleNotification("Error", "All Resturants are closed");
    }
  };

  const redirectHome = () => history.push(path.home);

  const success = () => {
    setState({
      color: "btn-success",
      text: "SUCCESSFUL",
      loading: false,
      submit: true,
    });
    emptyCart();
    setTimeout(redirectHome, 2000);
  };

  const failed = () => {
    setState({
      ...state,
      color: "btn-danger",
      loading: false,
      text: "TRY AGAIN",
    });
  };
 
  return (
    <form onSubmit={handleSubmit}>
      <Input
        labelName={"Email address"}
        formfor={"email"}
        typeOfForm={"email"}
        content={"We'll never share your email with anyone else."}
        required={true}
        prefilledValue={userDetail.email}
      />
      <Input
        labelName={"Name"}
        formfor={"name"}
        typeOfForm={"text"}
        content={"What's your name champ?"}
        required={true}
        prefilledValue={userDetail.name}
      />
      <Input
        labelName={"Phone Number"}
        formfor={"number"}
        typeOfForm={"text"}
        content={"E.g 0809934588 "}
        required={true}
        prefilledValue={userDetail.phoneNumber}
      />
      <Select
        defaultText={"Select Payment Method"}
        optionsName={"paymentOption"}
        selectOptions={[
          // { id: 1, name: "Pay Online" },
          { id: 2, name: "Pay Delivery" },
        ]}
      />
      <Input
        labelName={"Address"}
        formfor={"delivery"}
        typeOfForm={"text"}
        content={"E.g silver hall room 30B "}
        required={true}
      />
      <div style={{ margin: "2rem 0" }}>
        <button
          type="submit"
          className={`btn ${state.color} btn-lg btn-block`}
          disabled={state.submit ? true : false}
        >
          {state.loading === true ? "Loading..." : state.text}
        </button>
      </div>
    </form>
  );
};

export default CheckOutForm;
