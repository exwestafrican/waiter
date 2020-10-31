import React from "react";

const Pagination = () => {
  return (
    <nav aria-label="...">
      <ul className="pagination">
        <li className="page-item disabled">
          <span className="page-link">Previous</span>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            1
          </a>
        </li>
        <li className="page-item active" aria-current="page">
          <span className="page-link">
            2<span className="sr-only">(current)</span>
          </span>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
