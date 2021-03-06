import React, { useState } from "react";

const Alert = ({ message, link, type = "danger" }) => {
  const [display, updateDisplay] = useState(true);
  const styles = { display: display ? "" : "none" };

  return (
    <div className={`alert alert-${type}`} role="alert" style={styles}>
      <button
        type="button"
        className="close"
        onClick={() => updateDisplay(!display)}
      >
    <span aria-hidden="true">&times;</span>
      </button>
      <a href={link} className="alert-link">
        {message}
      </a>
    </div>
  );
};

export default Alert;
