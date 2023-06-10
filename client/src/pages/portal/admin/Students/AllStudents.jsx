import React, { useEffect, useState } from "react";
import StudentData from "./components/StudentData";
import { OPEN_FORM } from "../../../../constants/studenConstant";
import AdminPortalForm from "../components/AdminPortalForm";
import { useSelector } from "react-redux";
import { allStudentStatus } from "../../../../features/students/studentsSlice";
import Loading from "../../../../components/Loading";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import useAdminContext from "../../../../hooks/useAdminContext";
import FloatingAdd from "../components/FloatingAdd";
import CreateForm from "../components/CreateForm";
const AllStudents = () => {
  const { openForm, isUpdate, adminContextDispatch } = useAdminContext();
  const studentsLoading = useSelector(allStudentStatus);
 
  return (
    <>
      {studentsLoading === "loading" ? (
        <Loading />
      ) : studentsLoading === "failed" ? (
        <p>Something went wrong...</p>
      ) : (
        <div className="py-5 px-2 overflow-auto">
          <CreateForm/>
          <StudentData />{" "}
          <FloatingAdd/>
        </div>
      )}
    </>
  );
};

export default AllStudents;
