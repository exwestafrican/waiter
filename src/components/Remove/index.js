import React from "react";
import style from "./styles.module.css";

const Remove = ({ callback, id }) => {
  return (
    <>
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        className={`bi bi-dash-circle ${style["pointer"]}`}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => callback(id)}
      >
        <path
          fillRule="evenodd"
          d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
        />
        <path
          fillRule="evenodd"
          d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
        />
      </svg>{" "}
    </>
  );
};

export default Remove;
