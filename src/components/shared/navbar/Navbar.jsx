import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `text-lg font-medium ${isActive ? "text-green-500 border border-green-500" : ""} active:bg-green-300 hover:bg-green-200`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/books"}
          className={({ isActive }) =>
            `text-lg font-medium ${isActive ? "text-green-500 border border-green-500" : ""} active:bg-green-300 hover:bg-green-200`
          }
        >
          Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/pages-to-read"}
          className={({ isActive }) =>
            `text-lg font-medium ${isActive ? "text-green-500 border border-green-500" : ""} active:bg-green-300 hover:bg-green-200`
          }
        >
          Pages to Read
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="navbar bg-base-100 mt-10">
      <div className="flex gap-5 justify-between container mx-auto md:px-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <h2 className="font-bold text-xl md:text-3xl">Book Vibe</h2>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex items-center justify-between gap-6">
            {links}
          </ul>
        </div>
        <div className="navbar-end flex items-center gap-2 ">
          <a className="btn text-[#FFFFFF] bg-[#23BE0A] md:text-lg md:py-6 md:px-5 rounded-lg">
            Sign in
          </a>
          <a className="btn text-[#FFFFFF] bg-[#59C6D2] md:text-lg md:py-6 md:px-5 rounded-lg">
            Sign up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
