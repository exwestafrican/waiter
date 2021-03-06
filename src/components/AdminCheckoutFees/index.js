import React from "react";

function AdminCheckoutFees({ product, total }) {
  return (
    <React.Fragment>
      <li className="list-group-item d-flex justify-content-between bg-light">
        <div className="text-success">
          <h6 className="my-0">{product}</h6>
        </div>
        <span className="text-success">₦{total}</span>
      </li>
    </React.Fragment>
  );
}

export default AdminCheckoutFees;
