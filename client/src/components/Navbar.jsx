import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const pages = [
    {
      to: "/",
      label: "Home",
      color: getRandomColor(),
    },
    {
      to: "about",
      label: "About",
      color: getRandomColor(),
    },
    {
      to: "admissions",
      label: "Admissions",
      color: getRandomColor(),
    },
    {
      to: "news",
      label: "News and Events",
      color: getRandomColor(),
    },
    {
      to: "contact",
      label: "Contact",
      color: getRandomColor(),
    },
    {
      to: "login/student-login",
      label: "Portal",
      color: getRandomColor(),
    },
  ];
  // drawer functions
  const [itemClicked, setItemClicked] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const handleDrawer = () => {
    setDrawer((prevState) => !prevState);
  };
  const handleCloseDrawer = () => {
    setDrawer(false);
  };
  const handleListClick = () => {
    setItemClicked(false);
    handleCloseDrawer();
  };
  // this adds a random color
  function getRandomColor() {
    return "hsl(" + Math.random() * 360 + ", 100%, 75%)";
  }

  return (
    <>
      {/* this is the drawer menu */}
      {drawer && (
        <div
          className="h-screen w-screen z-50 fixed bg-black left-0 top-0 flex justify-end "
          style={{
            backgroundColor: "rgba(0,0,0,0.4)",
          }}
        >
          <motion.div
            initial={{ x: 180 }}
            animate={{ x: 0 }}
            transition={{
              ease: "easeIn",
              duration: 0.5,
            }}
            className="bg-white w-52 h-screen rounded-tl-xl "
          >
            <div className="flex flex-col pl-3 space-y-3">
              <button onClick={handleCloseDrawer}>
                <div className="mt-5 text-xl">
                  <AiOutlineClose />
                </div>
              </button>
              <motion.ul>
                {pages.map((links, i) => (
                  <NavLink to={links.to} key={i} onClick={handleListClick}>
                    <motion.li
                      whileHover={{
                        scale: [null, 1.3, 1.2],
                      }}
                      key={i}
                      style={{
                        backgroundColor: links.color,
                      }}
                      className="
        py-2 mb-3 px-2
        rounded-l-lg
        shadow-lg"
                    >
                      {links.label}
                    </motion.li>
                  </NavLink>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        </div>
      )}
      {/* this is the navbar component */}
      <header>
        {/* md list */}
        <nav className="bg-white lg:h-20 ">
          <div className="flex items-center justify-between px-5 py-2 h-full lg:px-40 md:px-16">
            <div className="p-2 mb-3 flex-1">Logo</div>
            <div className="flex lg:space-x-3">
              {pages.map((links, i) => (
                <NavLink to={links.to} key={i} onClick={handleListClick}>
                  <motion.li
                    whileHover={{
                      scale: [null, 1.3, 1.2],
                    }}
                    key={i}
                    className="
                              p-2 mb-3 
                              list-none
                              hidden
                              sm:flex
                              hover:border-b-2
                              hover:border-b-blue-950
                      "
                  >
                    {links.label}
                  </motion.li>
                </NavLink>
              ))}
            </div>
            <button className="sm:hidden" onClick={handleDrawer}>
              <AiOutlineMenu />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
