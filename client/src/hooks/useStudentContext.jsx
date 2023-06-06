import { useContext } from "react";
import { StudentsContext } from "../contexts/StudentContext";

const useStudentContext = () => {
  const context = useContext(StudentsContext);
  if (!context) {
    throw Error("useStudentContext should be used inside students environment");
  }
  return context;
};

export default useStudentContext;
