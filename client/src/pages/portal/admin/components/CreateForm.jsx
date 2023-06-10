import { CgClose } from "react-icons/cg";
import React, { useRef, useState } from "react";
import {
  OPEN_FORM,
  OPEN_UPDATE_FORM,
} from "../../../../constants/studenConstant";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addStudent } from "../../../../features/students/studentsSlice";
import useAdminContext from "../../../../hooks/useAdminContext";
import { addStaff } from "../../../../features/staff/staffSlice";

const CreateForm = ({ staff }) => {
  const { isUpdate, openForm, adminContextDispatch } = useAdminContext();
  const [formData, setformData] = useState({
    contact: {
      phone: [],
      email: [],
    },
    nextOfKin: [
      {
        firstname: "",
        lastname: "",
        relation: "",
        contact: {
          phone: [],
          email: [],
        },
      },
    ],
  });
  const dispatch = useDispatch();
  const { id } = useParams();
  // adding student data
  const studentAdd = () => {
    dispatch(addStudent(formData));
  };
  // adding data to staff
  const staffAdd = () => {
    dispatch(addStaff(formData));
  };

  //   this handles form changes
  const handleChanges = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value,
      contact:{
        phone:[(prev)=>(...prev,  `${e.target.value}`)],
        email:[`${e.target.value}`],
      }
     });
  };
  //   this handles the submit action
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!staff) {
      studentAdd();
    } else {
      staffAdd();
    }
  };
  return (
    <div
      className="absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-50 h-screen overflow-scroll"
      style={{ display: !openForm ? "none" : "" }}
    >
      <div className="bg-white left-0 right-0 absolute p-4 flex flex-col gap-3 ">
        <div className="flex justify-end ">
          <button
            className="text-xl"
            onClick={() =>
              adminContextDispatch({
                type: isUpdate ? OPEN_UPDATE_FORM : OPEN_FORM,
              })
            }
          >
            {" "}
            {console.log(formData)}
            <CgClose />
          </button>
        </div>
        <h2 className="font-bold text-xl">Student Info</h2>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <div className="flex flex-col text-base ">
            <label htmlFor="firstname">Firstname</label>
            <input
              type="text"
              value={formData.firstname || ""}
              name="firstname"
              onChange={handleChanges}
              className="border-2 border-red-800 rounded-md p-2 "
              placeholder="Enter firstname"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="middlename">Middlename</label>
            <input
              type="text"
              onChange={handleChanges}
              value={formData.middlename || ""}
              name="middlename"
              className="border-2 border-red-800 rounded-md p-2 "
              placeholder="Enter middlename"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastname">Lastname</label>
            <input
              onChange={handleChanges}
              value={formData.lastname || ""}
              type="text"
              name="lastname"
              className="border-2 border-red-800 rounded-md p-2 "
              placeholder="Enter lastname"
            />
          </div>
          <div
            className="flex flex-col"
            style={{ display: staff ? "none" : "" }}
          >
            <label htmlFor="dob">Date of birth</label>
            <input
              value={formData.dob || ""}
              onChange={handleChanges}
              type="date"
              name="dob"
              className="border-2 border-red-800 rounded-md p-2 "
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="gender">Gender</label>
            <select
              name="gender"
              value={formData.gender || ""}
              onChange={handleChanges}
            >
              <option value=""></option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          {/* only visible on staff*/}
          <div
            className="flex flex-col"
            style={{ display: !staff ? "none" : "" }}
          >
            <label htmlFor="role">NationalId</label>
            <input
              value={formData.nationalId || ""}
              onChange={handleChanges}
              type="number"
              name="nationalId"
              placeholder="Enter National ID"
              className="border-2 border-red-800 rounded-md p-2 "
            />
          </div>
          <div
            className="flex flex-col"
            style={{ display: !staff ? "none" : "" }}
          >
            <label htmlFor="role">Role</label>
            <input
              value={formData.role || ""}
              onChange={handleChanges}
              type="text"
              name="role"
              placeholder="Enter role"
              className="border-2 border-red-800 rounded-md p-2 "
            />
          </div>
          <div
            className="flex flex-col"
            style={{ display: !staff ? "none" : "" }}
          >
            <label htmlFor="phone1">Phone 1</label>
            <input
              value={formData.contact.phone[0] || ""}
              onChange={handleChanges}
              type="text"
              name="phone"
              placeholder="Enter Phone Number"
              className="border-2 border-red-800 rounded-md p-2 "
            />
          </div>

          <div
            className="flex flex-col"
            style={{ display: !staff ? "none" : "" }}
          >
            <label htmlFor="phone2">Phone 2</label>
            <input
              value={formData.contact.phone[1] || ""}
              onChange={handleChanges}
              type="text"
              name="phone2"
              placeholder="Enter Phone Number"
              className="border-2 border-red-800 rounded-md p-2 "
            />
          </div>
          <div
            className="flex flex-col"
            style={{ display: !staff ? "none" : "" }}
          >
            <label htmlFor="email">Email</label>
            <input
              value={formData.contact.email || ""}
              onChange={handleChanges}
              type="email"
              name="email"
              placeholder="Enter Email"
              className="border-2 border-red-800 rounded-md p-2 "
            />
          </div>
          {/* emergency contact */}
          <div style={{ display: !staff ? "none" : "" }}>
            <h3>Emergeny contact 1</h3>
            <div
              className="flex flex-col"
              style={{ display: !staff ? "none" : "" }}
            >
              <label htmlFor="firstname">Firstname</label>
              <input
                value={formData.nextOfKin.firstname || ""}
                onChange={handleChanges}
                type="text"
                name="firstname"
                placeholder="Enter firstname"
                className="border-2 border-red-800 rounded-md p-2 "
              />
            </div>
            <div
              className="flex flex-col"
              style={{ display: !staff ? "none" : "" }}
            >
              <label htmlFor="Lastname">Lastname</label>
              <input
                value={formData.nextOfKin.lastname || ""}
                onChange={handleChanges}
                type="text"
                name="lastname"
                placeholder="Enter lastname"
                className="border-2 border-red-800 rounded-md p-2 "
              />
            </div>
            <div
              className="flex flex-col"
              style={{ display: !staff ? "none" : "" }}
            >
              <label htmlFor="relation">Relation</label>
              <input
                value={formData.nextOfKin.relation || ""}
                onChange={handleChanges}
                type="text"
                name="relation"
                placeholder="Enter your relation eg. brother, sister"
                className="border-2 border-red-800 rounded-md p-2 "
              />
            </div>
            <div
              className="flex flex-col"
              style={{ display: !staff ? "none" : "" }}
            >
              <label htmlFor="phone1">Phone 1</label>
              <input
                value={formData.nextOfKin.phone || ""}
                onChange={handleChanges}
                type="text"
                name="phone1"
                placeholder="Enter phone 1 "
                className="border-2 border-red-800 rounded-md p-2 "
              />
            </div>
            <div
              className="flex flex-col"
              style={{ display: !staff ? "none" : "" }}
            >
              <label htmlFor="phone2">Phone 2</label>
              <input
                value={formData.nextOfKin.phone || ""}
                onChange={handleChanges}
                type="text"
                name="phone2"
                placeholder="Enter phone 2 "
                className="border-2 border-red-800 rounded-md p-2 "
              />
            </div>
          </div>
          <div style={{ display: !staff ? "none" : "" }}>
            <h3>Emergeny contact 2</h3>
            <div
              className="flex flex-col"
              style={{ display: !staff ? "none" : "" }}
            >
              <label htmlFor="firstname">Firstname</label>
              <input
                value={formData.nextOfKin.firstname || ""}
                onChange={handleChanges}
                type="text"
                name="firstname"
                placeholder="Enter firstname"
                className="border-2 border-red-800 rounded-md p-2 "
              />
            </div>
            <div
              className="flex flex-col"
              style={{ display: !staff ? "none" : "" }}
            >
              <label htmlFor="Lastname">Lastname</label>
              <input
                value={formData.nextOfKin.lastname || ""}
                onChange={handleChanges}
                type="text"
                name="lastname"
                placeholder="Enter lastname"
                className="border-2 border-red-800 rounded-md p-2 "
              />
            </div>
            <div
              className="flex flex-col"
              style={{ display: !staff ? "none" : "" }}
            >
              <label htmlFor="relation">Relation</label>
              <input
                value={formData.nextOfKin.relation || ""}
                onChange={handleChanges}
                type="text"
                name="relation"
                placeholder="Enter your relation eg. brother, sister"
                className="border-2 border-red-800 rounded-md p-2 "
              />
            </div>
            <div
              className="flex flex-col"
              style={{ display: !staff ? "none" : "" }}
            >
              <label htmlFor="phone1">Phone 1</label>
              <input
                value={formData.nextOfKin.phone || ""}
                onChange={handleChanges}
                type="text"
                name="phone1"
                placeholder="Enter phone 1 "
                className="border-2 border-red-800 rounded-md p-2 "
              />
            </div>
            <div
              className="flex flex-col"
              style={{ display: !staff ? "none" : "" }}
            >
              <label htmlFor="phone2">Phone 2</label>
              <input
                value={formData.nextOfKin.phone || ""}
                onChange={handleChanges}
                type="text"
                name="phone2"
                placeholder="Enter phone 2 "
                className="border-2 border-red-800 rounded-md p-2 "
              />
            </div>
          </div>
          <button
            className="bg-red-800 text-white text-lg rounded-md py-2"
            type="submit"
          >
            Add new
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateForm;
