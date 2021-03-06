import React, { useEffect } from "react";
import Select from "../Select";
import Input from "../Input";
import BlockButton from "../BlockButton";

function AdminCheckoutForm({ userDetail }) {
  const { name, phoneNumber, address, email } = userDetail;

  function handleSubmit() {}
  return (
    <form onSubmit={handleSubmit}>
      <Input
        labelName={"Email address"}
        formfor={"email"}
        typeOfForm={"email"}
        content={"We'll never share your email with anyone else."}
        required={true}
        prefilledValue={email}
        disabled={true}
      />
      <Input
        labelName={"Name"}
        formfor={"name"}
        typeOfForm={"text"}
        content={"What's your name champ?"}
        required={true}
        prefilledValue={name}
        disabled={true}
      />
      <Input
        labelName={"Phone Number"}
        formfor={"number"}
        typeOfForm={"text"}
        content={"E.g 0809934588 "}
        required={true}
        prefilledValue={phoneNumber}
        disabled={true}
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
        prefilledValue={address}
        disabled={true}
      />
      <div style={{ margin: "2rem 0" }}>
        <BlockButton
          name={"Confirm And Pay"}
          buttonType={"submit"}
          disabled={false}
        />
      </div>
    </form>
  );
}

export default AdminCheckoutForm;
