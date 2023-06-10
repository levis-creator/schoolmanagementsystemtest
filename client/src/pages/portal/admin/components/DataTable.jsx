import React from "react";
import { Link } from "react-router-dom";

const DataTable = ({ data }) => {
  return (
    <div className="py-5 px-2 overflow-auto">
      <div className="shadow-md px-2 h-[calc(100vh-200px)] overflow-scroll ">
        <div className="grid grid-cols-1 w-full">
          <div className="w-full ">
            <div className="flex justify-between w-full bg-white">
              <div className=" text-left w-full font-semibold">Adm No</div>
              <div className=" text-left w-full font-semibold">Name</div>
              <div className=" text-left w-full font-semibold">Adm year</div>
            </div>
          </div>
          <div className="w-full mt-5 h-full">
            {data.map((item) => (
              <Link
                to={item._id}
                key={item._id}
                className="flex justify-between odd:bg-slate-50 capitalize items-end py-3"
              >
                <div className="table-cell text-left w-full"></div>
                <div className="table-cell text-left w-full">
                  {item.firstname} {item.lastname}
                </div>
                <div className="table-cell text-left w-full"></div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
