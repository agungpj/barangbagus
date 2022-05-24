import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Navbar from "../components/Navbar";

const EditCategory = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#020202]">
      <Navbar />
      {/* Container */}
      <div className="mx-auto px-8 h-full max-w-full">
        <p className="text-white text-2xl font-bold pt-32 pb-10 pl-10">
          Edit Category
        </p>
        <form className="px-10 ">
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Edit Category ..."
            />
          </div>
          <button
            className="bg-green-500 hover:bg-green-600 my-10 text-white font-bold py-2 w-full rounded focus:outline-none focus:shadow-outline"
            type="button"
            // onClick={() => Navigate("/")}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditCategory;
