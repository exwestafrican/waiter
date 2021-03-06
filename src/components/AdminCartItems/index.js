import React from "react";

function AdminCartItem({ name, total }) {
  return (
    <React.Fragment>
      <li className="list-group-item d-flex justify-content-between lh-sm">
        <div>
          <h6 className="my-0">{name}</h6>
        </div>
        <span className="text-muted">₦{total}</span>
      </li>
    </React.Fragment>
  );
}

export default AdminCartItem;
