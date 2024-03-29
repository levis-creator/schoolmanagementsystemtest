import React from "react";
import { MdModeEdit } from "react-icons/md";
import { IoMdArrowBack } from "react-icons/io";
import { OPEN_UPDATE_FORM } from "../../../../constants/studenConstant";
import useAdminContext from "../../../../hooks/useAdminContext";
import { useNavigate, useParams } from "react-router-dom";



const SingleData = ({ data }) => {
  const { adminContextDispatch } = useAdminContext();
  const navigate = useNavigate();
 
  return (
    <div className="flex flex-col items-center pt-10 px-4 gap-3">
      <div className="flex flex-col w-full items-center">
        <div className="flex w-full justify-between">
          <button className="text-xl" onClick={() => navigate(-1)}>
            <IoMdArrowBack />
          </button>
          <button
            className="text-xl"
            onClick={() => adminContextDispatch({ type: OPEN_UPDATE_FORM })}
          >
            <MdModeEdit />
          </button>
        </div>
        <div className="w-20 h-20 rounded-full bg-black overflow-hidden">
          <img src="" alt="data image" className="w-full h-full object-cover" />
        </div>
        <h2 className="capitalize text-center">
          {data.firstname} {data.middlename}
          {data.lastname}
        </h2>
        <h2>data Admin No</h2>
      </div>
      <div className="flex flex-col w-full">
        <h3 className="font-bold w-full bg-red-800 text-white text-lg">
          Personal Info
        </h3>
        <div className="flex flex-col">
          <div className="flex w-full gap-2 odd:bg-slate-50">
            <h3 className="font-bold ">DOB</h3>:
            <p className="capitalize">{data.dob}</p>
          </div>
          <div className="flex w-full gap-2 odd:bg-slate-50">
            <h3 className="font-bold ">Gender</h3> :
            <p className="capitalize">{data.gender}</p>
          </div>
          <div className="flex w-full gap-2 odd:bg-slate-50">
            <h3 className="font-bold ">Address</h3> :
            <p className="capitalize"></p>
          </div>
          <div className="flex w-full gap-2 odd:bg-slate-50">
            <h3 className="font-bold ">Date</h3> :
            <p className="capitalize"> </p>{" "}
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <h3 className="font-bold w-full bg-red-800 text-white text-lg">
          Guardian Info
        </h3>
        <div>
          <p> Name:</p>
          <p>NationalID:</p>
          <p>PhoneNumber:</p>
          <p>Email: </p>
        </div>
      </div>
    </div>
  );
};

export default SingleData;
