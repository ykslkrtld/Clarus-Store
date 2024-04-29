import React, { useContext, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { closeNavbar, logoutIcon, openNavbar } from "../helpers/icons";
import { AuthContext } from "../context/AuthProvider";

const navigation = [
  {
    title: "Home",
    path: "/dashboard",
  },
  {
    title: "Products",
    path: "/dashboard/products",
  },
  {
    title: "About",
    path: "/dashboard/about",
  },
];

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { logout } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  return (
    <nav className="bg-red-500 border-y-8 border-orange-400 md:text-sm sticky top-0 opacity-90">
      <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 py-3  md:flex md:px-8">
        <div className="flex items-center justify-between py-5 md:block ">
          <a
            href="/dashboard/products"
            className="flex items-center font-bold text-[1.3rem] "
          >
              YKSL Store
          
          </a>
          <div className="md:hidden">
            <button
              className="text-gray-500 hover:text-gray-800"
              onClick={() => setShow(!show)}
            >
              {show ? closeNavbar : openNavbar}
            </button>
          </div>
        </div>
        <div
          className={`${
            show ? "flex flex-col pb-2" : "hidden"
          } md:flex md:flex-row flex-1 items-center `}
        >
          <ul className=" md:flex md:space-x-6">
            {navigation.map((item) => (
              <li
                key={item.title}
                className="text-gray-700 font-medium flex justify-center"
              >
                <NavLink
                  to={item.path}
                  className={`block hover:bg-main rounded-full py-2 px-4 hover:text-white ${
                    location.pathname === item.path ? "bg-main scale-125" : ""
                  } `}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="flex-1 gap-x-6 items-center justify-end mt-6 space-y-6 md:flex md:space-y-0 md:mt-0">
            <NavLink
              // to="/"
              onClick={() => logout()}
              className="flex items-center justify-center gap-x-1 py-2 px-4 font-medium text-gray-700 hover:bg-main hover:text-white active:bg-gray-900 rounded-full md:inline-flex"
            >
              Logout {logoutIcon}
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
