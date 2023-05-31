import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Login = () => {
  return (
    <div
      className="lg:px-[169px] px-7 
    "
    >
      <div className="flex justify-center items-center w-full py-20">
        <div className="w-[100%] shadow-md sm:w-[60%] md:w-[50%] lg:w-[40%] rounded-br-3xl">
          <Outlet />
          <div className="flex w-full border-t-2 overflow-hidden">
            <NavLink
              to="/login/student-login"
              style={({ isActive }) =>
                isActive
                  ? { backgroundColor: "#991B1B", color: "white" }
                  : { backgroundColor: "white" }
              }
              className="w-full px-5 py-5 hover:bg-red-400 rounded-br-3xl bg-red-700 "
            >
              Student
            </NavLink>
            <NavLink
              to="/login/staff-login"
              style={({ isActive }) =>
                isActive
                  ? { backgroundColor: "#991B1B", color: "white" }
                  : { backgroundColor: "white" }
              }
              className="w-full px-5 py-5 hover:bg-red-400 rounded-br-3xl"
            >
              Staff
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
