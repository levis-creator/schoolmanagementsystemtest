import React from "react";
import profile from "../assets/aiony-haust-3TLl_97HNJo-unsplash.jpg";
import { IoMdNotificationsOutline } from "react-icons/io";
const NavbarDashboard = () => {
  return (
    <header>
      <nav className="py-5 shadow-md">
        <div className="flex items-center mx-3 gap-4">
          <div className="w-16 h-16 rounded-full bg-black overflow-hidden">
            <img src={profile} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col flex-1">
            <h3 className="font-semibold text-xl">Levis Nyingi</h3>
            <h6 className="font-semibold text-gray-500 text-xs"> BI/G30/18</h6>
          </div>
          <div className="text-2xl text-gray-600">
            <IoMdNotificationsOutline />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavbarDashboard;
