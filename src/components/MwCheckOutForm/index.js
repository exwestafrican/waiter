import React, { useEffect, useState } from "react";
import Select from "../Select";
import Input from "../Input";
import BlockButton from "../BlockButton";
import PhoneNumber from "../PhoneNumber";
import { isOpen } from "../../utils/resturant";
import { handleNotification } from "../../utils/notification";
import { createCart } from "../../Api/MW-bot";
import { useHistory } from "react-router-dom";
import { path } from "../../url";
import { clearCart, VENDOR_ID } from "../../utils/shoppingCart";

function MwCheckOutForm({ products }) {
  const [loading, setLoading] = useState(false);
  const standardizeNumber = (num) => "+234" + num.slice(1);
  const history = useHistory();
  const redirectHome = () => history.push(path.home);

  function success() {
    handleNotification(
      "Success",
      "Working on confirming your order you'll get notified soon",
      "success"
    );
    clearCart(VENDOR_ID);
    setLoading(false);
    redirectHome();
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (isOpen) {
      const formData = new FormData(e.target);
      const num = formData.get("phoneNumber");
      const pattern = /^\+234\d{10}$/;
      const mobileNumber = pattern.test(num) ? num : standardizeNumber(num);
      const data = {
        ["name"]: formData.get("name"),
        ["contact"]: mobileNumber,
        ["bought_by"]: "",
        ["email"]: formData.get("emailAddress"),
        ["delivery_address"]: formData.get("address"),
        ["status"]: 1,
        ["cart_item"]: products.map((product) => {
          return {
            product: product.product,
            quantity: product.quantity,
          };
        }),
      };
      createCart(data);
      setLoading(true);
      setTimeout(success, 2000);
    } else {
      handleNotification("Error", "All Restaurants are closed");
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <Input
        labelName={"Email address"}
        formfor={"email"}
        typeOfForm={"email"}
        content={"We'll never share your email with anyone else."}
        required={true}
        prefilledValue={""}
      />
      <Input
        labelName={"Name"}
        formfor={"name"}
        typeOfForm={"text"}
        content={"What's your name champ?"}
        required={true}
        prefilledValue={""}
      />
      <PhoneNumber
        labelName={"Phone Number"}
        formfor={"number"}
        errorMessage={"please provide a valid number"}
        required={true}
      />

      <Select
        defaultText={"Select Payment Method"}
        optionsName={"paymentOption"}
        selectOptions={[
          { id: 1, name: "Pay Online" },
          // { id: 2, name: "Pay Delivery" },
        ]}
      />
      <Input
        labelName={"Address"}
        formfor={"delivery"}
        typeOfForm={"text"}
        content={"E.g silver hall room 30B "}
        required={true}
        prefilledValue={""}
      />
      <div style={{ margin: "2rem 0" }}>
        <BlockButton
          name={loading ? "Loading..." : "Send Confirmation"}
          buttonType={"submit"}
        />
      </div>
    </form>
  );
}

export default MwCheckOutForm;
