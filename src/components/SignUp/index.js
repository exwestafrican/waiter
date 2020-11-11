import React, { useState } from "react";
import Input from "../Input";
import Select from "../Select";
import user from "../../auth";
import { handleNotification } from "../../utils/notification";
import { redirectHome } from "../../utils/general";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [text, updateText] = useState("REGISTER");
  const createUser = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.target);
    const email = formData.get("emailAddress");
    const password = formData.get("password");
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const phoneNumber = formData.get("phoneNumber");
    const address = formData.get("address");
    user.signup(
      email,
      password,
      firstName,
      lastName,
      phoneNumber,
      address,
      success,
      fail
      // failedCallBack
    );
  };

  const fail = () => {
    handleNotification("Error", "User email or phone number exists");
    setIsLoading(false);
    updateText("TRY AGAIN");
  };
  const success = () => {
    try {
      const previousPath = history.location.state.from.pathname;
      history.push(previousPath);
    } catch (error) {
      redirectHome(history);
    }
  };

  return (
    <form onSubmit={createUser}>
      <Input
        labelName={"Email address"}
        formfor={"email"}
        typeOfForm={"email"}
        content={"We'll never share your email with anyone else."}
        required={true}
      />
      <Input
        labelName={"Password"}
        formfor={"password"}
        typeOfForm={"password"}
        content={"We can keep a secret."}
        required={true}
      />
      <Input
        labelName={"First Name"}
        formfor={"firstName"}
        typeOfForm={"firstName"}
        content={"Sam"}
        required={true}
      />
      <Input
        labelName={"Last Name"}
        formfor={"lastName"}
        typeOfForm={"lastName"}
        content={"Smith"}
        required={true}
      />
      <Select
        defaultText={"Bells University"}
        optionsName={"address"}
        selectOptions={[
          { id: 1, name: "Covenant University" },
          { id: 2, name: "Bells University" },
        ]}
      />
      <Input
        labelName={"Phone Number"}
        formfor={"number"}
        typeOfForm={"text"}
        content={"E.g 0809934588 "}
        required={true}
      />
      <button
        class="btn btn-lg btn-danger btn-block"
        type="submit"
        disabled={isLoading ? true : false}
      >
        {isLoading ? "LOADING...." : text}
      </button>
    </form>
  );
};

export default SignUp;
