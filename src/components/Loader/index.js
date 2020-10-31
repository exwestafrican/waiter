import React from "react";

const Loader = ({ empty }) => {
  return (
    <div
      className="ui segment"
      style={{
        height: "60vh",
        width: "100%",
        border: "none",
        boxShadow: "none",
      }}
    >
      <div className="ui active inverted dimmer">
        <div className={`ui large text ${empty ? null : "loader"}`}>
          {empty ? "No Item Found" : "Loading"}
        </div>
      </div>
    </div>
  );
};
export default Loader;
