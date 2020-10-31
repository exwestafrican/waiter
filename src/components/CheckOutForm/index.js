import React, { useState } from "react";
import Select from "../Select";
import {
  makeCamelCase,
  getCurrentResturantFromLocalStrorage,
} from "../../utils";

const CheckOutForm = () => {
  // only open if cart is not empty

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const resturant = getCurrentResturantFromLocalStrorage();
    // console.log(formData.get("paymentOption"));
    const data = {
      customerId: 1,
      restaurantId: resturant.resturantId,
      subTotal: 89,
      fee: 200,
      address: formData.get("address"),
      // did user select pay onnline
      onlinePayment:
        "Pay Online" === formData.get("paymentOption") ? true : false,
    };
    console.log(data);
  };

  const Input = ({ labelName, formfor, typeOfForm, content, required }) => {
    const [value, setValue] = useState("");
    const handleChange = (e) => {
      setValue(e.target.value);
    };
    return (
      <div className="form-group">
        <label formfor={formfor}>{labelName}</label>
        <input
          name={makeCamelCase(labelName)}
          type={typeOfForm}
          className="form-control"
          id={formfor}
          aria-describedby={typeOfForm + "Help"}
          value={value}
          onChange={handleChange}
          required={required}
        />
        <small id={typeOfForm + "Help"} className="form-text text-muted">
          {content}
        </small>
      </div>
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        labelName={"Email address"}
        formfor={"email"}
        typeOfForm={"email"}
        content={"We'll never share your email with anyone else."}
      />
      <Input
        labelName={"Name"}
        formfor={"name"}
        typeOfForm={"text"}
        content={"What's your name champ?"}
      />
      <Input
        labelName={"Phone Number"}
        formfor={"number"}
        typeOfForm={"text"}
        content={"E.g 0809934588 "}
      />
      <Select
        defaultText={"Select Payment Method"}
        optionsName={"paymentOption"}
        selectOptions={[
          { id: 1, name: "Pay Online" },
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
        <button type="submit" class="btn btn-primary btn-lg btn-block">
          ORDER
        </button>
      </div>
    </form>
  );
};

export default CheckOutForm;
