import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

import Logo from "../assets/logo.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
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
     bg-[#0a192f] text-white"
    >
      <div>
        <img src={Logo} alt="Logo Image" style={{ width: "50px" }} />
      </div>
      <nav className="stroke">
        <ul className="hidden md:flex absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <li className="hover:text-pink-600 border-b-1">
            <a> Home</a>
          </li>
          <li className="hover:text-pink-600 border-b-1">
            <a> About</a>
          </li>
          <li className="hover:text-pink-600 border-b-1">
            <a> Skills</a>
          </li>
          <li className="hover:text-pink-600 border-b-1">
            <a> Work</a>
          </li>
          <li className="hover:text-pink-600 border-b-1">
            <a> Contact</a>
          </li>
        </ul>
      </nav>
      <div className="hidden md:flex pr-8">
        <button
          className="text-white group border-2 px-5 py-1 my-2 flex items-center hover:bg-pink-600 rounded-md hover:border-pink-600"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h1>Login</h1>
        </button>

        <Transition
          as={Fragment}
          show={isOpen}
          enter="transition duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog
            as="div"
            className="fixed inset-0 flex items-center justify-center"
            open={isOpen}
            onClose={() => setIsOpen(false)}
          >
            <Dialog.Overlay className="fixed inset-0 bg-black/50" />

            <div className="bg-white p-8 rounded z-10 shadow-xl">
              <Dialog.Panel>
                <Dialog.Title className="font-bold text-xl flex justify-center">
                  LOGIN
                </Dialog.Title>
                <div class="w-full max-w-xs">
                  <form class="bg-white px-10 pt-10 mb-10">
                    <div class="mb-4">
                      <label
                        class="block text-gray-700 text-sm font-bold mb-2"
                        for="username"
                      >
                        Username
                      </label>
                      <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Username"
                      />
                    </div>
                    <div class="mb-6">
                      <label
                        class="block text-gray-700 text-sm font-bold mb-2"
                        for="password"
                      >
                        Password
                      </label>
                      <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="******************"
                      />
                    </div>
                    <div class="flex justify-center">
                      <button
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                      >
                        Sign In
                      </button>
                    </div>
                  </form>
                </div>
              </Dialog.Panel>
            </div>
          </Dialog>
        </Transition>
      </div>

      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 flex w-full h-screen bg-[#0a192f] flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Work</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

      <div className="hidden md:flex fixed flex-col right-0 md:top-[30%] top-[70%]">
        <ul>
          <li className="w-[150px] h-[50px] flex justify-between items-center mr-[-100px] hover:ml-[-100px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-200"
              href="/"
            >
              <FaLinkedin size={30} /> Linkedin
            </a>
          </li>
          <li className="w-[150px] h-[50px] flex justify-between items-center mr-[-100px] hover:ml-[-100px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-200"
              href="/"
            >
              <FaGithub size={30} /> Github
            </a>
          </li>
          <li className="w-[150px] h-[50px] flex justify-between items-center mr-[-100px] hover:ml-[-100px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-200"
              href="/"
            >
              <BsFillPersonLinesFill size={30} /> Resume
            </a>
          </li>
          <li className="w-[150px] h-[50px] flex justify-between items-center mr-[-100px] hover:ml-[-100px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-200"
              href="/"
            >
              <HiOutlineMail size={30} /> Email
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
