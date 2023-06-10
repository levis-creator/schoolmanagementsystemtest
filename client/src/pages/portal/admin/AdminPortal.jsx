import React from "react";
import MenuItem from "./components/MenuItem";
import { FaUserGraduate } from "react-icons/fa"; 
import { IoMdPeople } from "react-icons/io"
const menuItems=[
  {
    name:'Students',
    icon:<FaUserGraduate/>,
    path:"all-students"
  },
  {
    name:'Staff',
    icon:<IoMdPeople/>,
    path:"all-staffs"
  },
  
]
const AdminPortal = () => {
  return (
    <div className="px-4 py-3 grid grid-cols-2 gap-3">
     {menuItems.map((items,i)=>(<MenuItem
     key={i} name={items.name} icon={items.icon} path={items.path}/>))}
    </div>
  );
};

export default AdminPortal;
