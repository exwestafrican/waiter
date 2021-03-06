import React, { useState } from "react";
import { makeCamelCase } from "../../utils";

function PhoneNumber({ labelName, formfor, errorMessage }) {
  const [isValid, setIsValid] = useState(true);
  const _class = isValid ? "form-control" : "form-control is-invalid";
  const [value, setValue] = useState("");

  const standardizeNumber = (num) => "+234" + num.slice(1);

  function onChangeHandler(e) {
    const val = e.target.value;
    setValue(val);
    const pattern = /^\+234\d{10}$/;
    setIsValid(pattern.test(val) || val.length == 11);
  }
  return (
    <div className="form-group">
      <label formfor={formfor} className="form-label">
        {labelName}
      </label>
      <input
        type="text"
        name={makeCamelCase(labelName)}
        className={_class}
        id={formfor}
        aria-describedby={"text Help"}
        required
        onChange={onChangeHandler}
        value={value}
      />
      <div id={formfor + "Feedback"} className="invalid-feedback">
        {errorMessage}
      </div>
    </div>
  );
}

export default PhoneNumber;
