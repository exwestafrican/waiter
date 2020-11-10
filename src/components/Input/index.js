import React, { useState } from "react";
import { makeCamelCase } from "../../utils";

const Input = ({
  labelName,
  formfor,
  typeOfForm,
  content,
  required,
  prefilledValue = "",
}) => {
  const [value, setValue] = useState(prefilledValue);
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

export default Input;
