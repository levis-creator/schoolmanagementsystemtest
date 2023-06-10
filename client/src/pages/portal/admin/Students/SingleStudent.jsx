import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  error,
  fetchStudent,
  singleStudent,
  studentStatus,
} from "../../../../features/students/studentsSlice";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../../../components/Loading";
import StudentForm from "../components/AdminPortalForm";
import SingleData from "../components/SingleData";
const SingleStudent = () => {
  const dispatch = useDispatch();
  const student = useSelector(singleStudent);
  const dataStatus = useSelector(studentStatus);
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchStudent(id));
  }, [dispatch]);
  return (
    <>
      <StudentForm data={student} />

      {dataStatus === "loading" ? (
        <Loading />
      ) : dataStatus === "succeeded" ? (
        <SingleData data={student} />
      ) : (
        <p>Something went wrong</p>
      )}
    </>
  );
};

export default SingleStudent;
