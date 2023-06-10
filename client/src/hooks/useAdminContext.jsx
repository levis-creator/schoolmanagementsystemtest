import { useContext } from "react";
import { AdminContext, } from "../contexts/AdminContext";

const useAdminContext = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw Error("useAdminContext should be used inside admin environment");
  }
  return context;
};

export default useAdminContext;
