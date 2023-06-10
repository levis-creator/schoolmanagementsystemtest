import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaUserGraduate } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";

import { Link, useLocation, useParams, } from "react-router-dom";
import useAdminContext from "../../../../hooks/useAdminContext";
const BottomNavBar = () => {
  const {id}=useParams()
  const navItems = [
    {
      name: "Home",
      icon: <AiFillHome />,
      path: `${id}/admin`,
    },
    {
      name: "Students",
      icon: <FaUserGraduate />,
      path: `${id}/admin/all-students`,
    },
    {
      name: "Staff",
      icon: <IoMdPeople />,
      path: `${id}/admin/all-staff`,
    },
  ];
  const { openForm } = useAdminContext();
  const {pathname}= useLocation()
 
  return (
    <div
      className="fixed bottom-0 left-0 right-0 bg-red-700 py-4"
      style={{ display: openForm||pathname===`/dashboard/${id}/admin`? "none" : "" }}
    >
 
      <div className="flex text-4xl text-white justify-evenly ">
        {navItems.map((item, i) => (
          <Link to={item.path} key={i}>
            <button>{item.icon}</button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BottomNavBar;
