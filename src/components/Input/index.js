import React, { useState, useEffect } from "react";
import { makeCamelCase } from "../../utils";

const Input = ({
  labelName,
  formfor,
  typeOfForm,
  content,
  required,
  prefilledValue,
  disabled = false,
}) => {
  const [value, setValue] = useState(prefilledValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    setValue(prefilledValue);
  }, [prefilledValue]);

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
        disabled={disabled}
      />
      <small id={typeOfForm + "Help"} className="form-text text-muted">
        {content}
      </small>
    </div>
  );
};

export default Input;
