import React from "react";
import style from "./styles.module.css";

const BlockButton = ({
  name,
  callBack,
  buttonType = "button",
  disabled = false,
}) => {
  return (
    <button
      type={buttonType}
      className={`btn ${style["button-style"]} btn-lg btn-block`}
      onClick={callBack}
      disabled={disabled}
    >
      {name}
    </button>
  );
};

export default BlockButton;
