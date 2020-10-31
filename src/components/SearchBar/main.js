import React from "react";
export const truncateWords = (word) => {
  return word.slice(0, 6) + "...";
};

export const Options = ({ value }) => {
  return <option value={value}>{value}</option>;
};
