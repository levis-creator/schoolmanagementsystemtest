import React from "react";
import { Link } from "react-router-dom";

const StudentTable = ({ data }) => {
  return (
    <div className="grid grid-cols-1 w-full h-fit ">
      <div className="w-full">
        <div className="flex justify-between ">
          <div className="table-cell text-left w-full font-semibold">Adm No</div>
          <div className="table-cell text-left w-full font-semibold">Name</div>
          <div className="table-cell text-left w-full font-semibold">Adm year</div>
        </div>
      </div>
      <div className="w-full ">
      {data.map((students) => (
          <Link to={students._id}  key={students._id} className="flex justify-between odd:bg-slate-50 capitalize items-end py-3">
            <div className="table-cell text-left w-full"></div>
            <div className="table-cell text-left w-full">{students.firstname} {students.lastname}</div>
            <div className="table-cell text-left w-full"></div>
          </Link>
      ))}
      </div>
      .
    </div>
  );
};

export default StudentTable;
