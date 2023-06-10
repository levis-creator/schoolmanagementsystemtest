import React from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ path, icon, name }) => {
  return (
    <Link to={path}>
      <div className="shadow-md p-4 flex flex-col items-center rounded-md">
        <div className="text-7xl text-red-800">{icon}</div>
        <h5>{name}</h5>
      </div>
    </Link>
  );
};

export default MenuItem;
