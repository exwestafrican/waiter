import React, { useState } from "react";
import styles from "./styles.module.css";
import { truncateWords, Options } from "./main";

const SearchBar = ({ searchText }) => {
  const text = searchText ? searchText : "Search...";
  return (
    <div className={`container`}>
      <div className="ui fluid icon input">
        <input type="text" placeholder={text} />
        <i className="search icon"></i>
      </div>
    </div>
  );
};

export default SearchBar;

// <div className="dropdown">
// <button
//   type="button"
//   className="btn btn-danger dropdown-toggle dropdown-toggle-split"
//   data-toggle="dropdown"
//   aria-haspopup="true"
//   aria-expanded="false"
//   onClick={OnClickHandler}
// >
//   <span className="sr-only">Toggle Dropdown</span>
// </button>
// <div className="dropdown-menu" style={{ display: block }}>
//   <a className="dropdown-item" href="#">
//     ALL
//   </a>
//   <a className="dropdown-item" href="#">
//     COVENANT UNIVERSITY
//   </a>
//   <a className="dropdown-item" href="#">
//     BELLS UNNIVERSITY
//   </a>
// </div>
// </div>
