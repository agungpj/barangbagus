import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Navbar from "../components/Navbar";

const AddProduct = () => {
  return (
    <div name="home" className="w-full bg-[#020202] h-full">
      <Navbar />
      {/* Container */}
      <div className="mx-auto px-8 h-full max-w-full">
        <p className="text-white text-2xl font-bold pt-32 pb-2 pl-10">
          Edit Product
        </p>
        <form className="px-10 ">
          <div className="mb-4">
            <button
              className="bg-red-500 px-4 hover:bg-red-600 my-5 text-white font-bold py-2  rounded focus:outline-none focus:shadow-outline"
              type="button"
              // onClick={() => Navigate("/")}
            >
              Upload Image
            </button>
            <input
              className="shadow appearance-none border rounded w-full py-2 my-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Edit Name ..."
            />
            <input
              className="shadow appearance-none border rounded w-full px-3 my-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline py-20"
              id="username"
              type="text"
              placeholder="Edit Desc ..."
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 my-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Edit Price ..."
            />
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 my-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Edit Quantity ..."
            />
          </div>
          <button
            className="bg-green-500 hover:bg-green-600 my-10 text-white font-bold py-2 w-full rounded focus:outline-none focus:shadow-outline"
            type="button"
            // onClick={() => Navigate("/")}
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
