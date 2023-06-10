import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allStudentStatus, error, fetchStudents, students } from "../../../../../features/students/studentsSlice";
import StudentTable from "../../components/DataTable";
import DataTable from "../../components/DataTable";

const StudentData = () => {
  const dispatch = useDispatch();
  const studentsData = useSelector(students);
  const dataStatus = useSelector(allStudentStatus);
  const fetchError = useSelector(error);
  useEffect(() => {
    if (dataStatus === "idle") {
      dispatch(fetchStudents());
    }
  }, [dispatch, dataStatus]);

  return (
    <>
    
    <div>
    <DataTable data={studentsData}/>
    </div>
    </>
  );
};

export default StudentData;
