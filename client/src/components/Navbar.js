import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

import Logo from "../assets/DumbMerch.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../index.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  let [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <div
      className="fixed w-full h-[80px] flex items-center px-4 justify-between 
     bg-[#020202] text-white z-50"
    >
      <Link to={"/"} className="col text-decoration-none">
        <div>
          <img src={Logo} alt="Logo Image" style={{ width: "70px" }} />
        </div>
      </Link>
      <nav className="stroke">
        <ul className="hidden md:flex ">
          <Link to={"/complain"} className="col text-decoration-none">
            <li className="hover:text-red-500 border-b-1">
              <a className="font-bold"> Complain</a>
            </li>
          </Link>

          <Link to={"/category"} className="col text-decoration-none">
            <li className="hover:text-red-500 border-b-1">
              <a className="font-bold"> Category</a>
            </li>
          </Link>

          <Link to={"/product"} className="col text-decoration-none">
            <li className="hover:text-red-500 border-b-1">
              <a className="font-bold"> Product</a>
            </li>
          </Link>

          <Link to={"/profile"} className="col text-decoration-none">
            <li className="hover:text-red-500 border-b-1">
              <a className="font-bold"> Profile</a>
            </li>
          </Link>
          <Link to={"/"} className="col text-decoration-none">
            <li className="hover:text-red-500 border-b-1">
              <a className="font-bold"> Logout</a>
            </li>
          </Link>
        </ul>
      </nav>

      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 flex w-full h-screen bg-[#020202] flex-col justify-center items-center"
        }
      >
        <Link to={"/complain"}>
          <li className="py-6 text-4xl">
            <a className="font-bold"> Complain</a>
          </li>
        </Link>

        <Link to={"/category"}>
          <li className="py-6 text-4xl">
            <a className="font-bold"> Category</a>
          </li>
        </Link>

        <Link to={"/product"}>
          <li className="py-6 text-4xl">
            <a className="font-bold"> Product</a>
          </li>
        </Link>

        <Link to={"/profile"}>
          <li className="py-6 text-4xl">
            <a className="font-bold"> Profile</a>
          </li>
        </Link>
        <Link to={"/"}>
          <li className="py-6 text-4xl">
            <a className="font-bold"> Logout</a>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
