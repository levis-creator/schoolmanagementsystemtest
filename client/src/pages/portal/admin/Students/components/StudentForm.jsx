import { CgClose } from "react-icons/cg";
import React, { useCallback, useEffect, useRef, useState } from "react";
import useStudentContext from "../../../../../hooks/useStudentContext";
import { OPEN_UPDATE_FORM } from "../../../../../constants/studenConstant";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  editStudent,
  fetchStudent,
  singleStudent,
  studentUpdated,
  updateStatus,
} from "../../../../../features/students/studentsSlice";
import { updateStudent } from "../../../../../api/Students";

const StudentForm = ({ data }) => {
  const { isUpdate, openForm, studentContextDispatch } = useStudentContext();
  const dispatch = useDispatch();
  const updatedStatus = useSelector(updateStatus);
  const studentData = useSelector(singleStudent);
  const { id } = useParams();
  const changingData = useRef(data);

  // FORMS
  const formref = useRef();
  const firsnameinput = useRef("hello");
  const middlenameinput = useRef();
  const lastnameinput = useRef();
  const genderinput = useRef();
  const dobInput = useRef();

  const [student, setStudent] = useState({});

  // this handles forms values
  const handleChanges = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };
  // this function handles updating data to the database
  const updateData=async(student)=>{
    try {
      const response = await updateStudent(id, student).then((data)=>{
        dispatch(fetchStudent(id))
      })
      return response
    } catch (error) {
      console.log(error);
    }
  }
  // handles submit button
  const handleSubmit = async (e) => {
    e.preventDefault();
    // this is data gotten from the form
    const student = {
      firstname: firsnameinput.current.value,
      lastname: lastnameinput.current.value,
      middlename: middlenameinput.current.value,
      dob: dobInput.current.value,
      gender: genderinput.current.value,
    };
    if(isUpdate){
      updateData(student)
      studentContextDispatch({type:OPEN_UPDATE_FORM})
    }
  };
  return (
    <div
      className="absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-50"
      style={{ display: !openForm ? "none" : "" }}
    >
      <div className="bg-white bottom-0 left-0 right-0 absolute p-4 flex flex-col gap-3 ">
        <div className="flex justify-end">
          <button
            className="text-xl"
            onClick={() => studentContextDispatch({ type: OPEN_UPDATE_FORM })}
          >
            {" "}
            <CgClose />
          </button>
        </div>
        <h2 className="font-bold text-xl">Student Info</h2>
        <form
          className="flex flex-col gap-2"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col text-base ">
            <label htmlFor="firstname">Firstname</label>
            <input
              type="text"
              defaultValue={isUpdate ? data.firstname : ""}
              name="firstname"
              ref={firsnameinput}
              className="border-2 border-red-800 rounded-md p-2 "
              placeholder="Enter firstname"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="middlename">Middlename</label>
            <input
              type="text"
              defaultValue={isUpdate ? data.middlename : ""}
              ref={middlenameinput}
              name="middlename"
              className="border-2 border-red-800 rounded-md p-2 "
              placeholder="Enter middlename"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastname">Lastname</label>
            <input
              ref={lastnameinput}
              defaultValue={isUpdate ? data.lastname : ""}
              type="text"
              name="lastname"
              className="border-2 border-red-800 rounded-md p-2 "
              placeholder="Enter lastname"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="dob">Date of birth</label>
            <input
              defaultValue={isUpdate ? data.dob : ""}
              ref={dobInput}
              type="date"
              name="dob"
              className="border-2 border-red-800 rounded-md p-2 "
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="gender">Gender</label>
            <select name="gender" ref={genderinput} defaultValue={data.gender}>
              <option value=""></option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <button
            className="bg-red-800 text-white text-lg rounded-md py-2"
            type="submit"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentForm;
