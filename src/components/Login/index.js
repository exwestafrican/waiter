import React, { useState } from "react";
import Input from "../Input";
import { path } from "../../url";
import user from "../../auth";
import { redirectHome } from "../../utils/general";
import { useHistory } from "react-router-dom";
import { handleNotification } from "../../utils/notification";
import { Link } from "react-router-dom";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [text, updateText] = useState("SIGN IN");

  const history = useHistory();

  const HandleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target);
    const email = formData.get("emailAddress");
    const password = formData.get("password");

    user.login(email, password, success, fail);
  };

  const success = () => {
    try {
      const previousPath = history.location.state.from.pathname;
      history.push(previousPath);
    } catch (error) {
      redirectHome(history);
    }
  };

  const fail = (message) => {
    handleNotification("Error", message);
    setIsLoading(false);
    updateText("TRY AGAIN");
  };

  return (
    <>
      <form style={{ width: "100%" }} onSubmit={(e) => HandleLogin(e)}>
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
          content={"We can keep a secrete."}
          required={true}
        />
        <button class="btn btn-lg btn-success btn-block" type="submit">
          {isLoading ? "LOADING ... " : text}
        </button>
        <small>
          {" "}
          <Link className="text-danger" to={path.signup}>
            Need an account?
          </Link>
        </small>
      </form>
    </>
  );
};

export default Login;
