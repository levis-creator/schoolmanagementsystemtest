import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allStudentStatus, error, fetchStudents, students } from "./studentsSlice";
import StudentTable from "./StudentTable";

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
    <div className="shadow-md px-2">
    <StudentTable data={studentsData}/>
    </div>
  );
};

export default StudentData;
