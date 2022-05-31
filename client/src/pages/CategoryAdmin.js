import React, { Fragment, useState, useEffect, useContext } from "react";
import Navbar from "../components/Navbar";
import { Dialog, Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";
import NavbarAdmin from "../components/NavbarAdmin";

const Category = () => {
  const [nav, setNav] = useState(false);
  const Navigate = useNavigate();

  let [isOpen, setIsOpen] = useState(false);
  const [state, dispatch] = useContext(UserContext);
  console.log(state);

  useEffect(() => {
    if (state.isLogin === false) {
      Navigate("/auth");
    } else {
      if (state.user.status === "admin") {
        Navigate("/category");
      } else if (state.user.status === "customer") {
        Navigate("/");
      }
    }
  }, [state]);

  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <>
      <NavbarAdmin />
      <div className="h-screen bg-[#020202]">
        <div className="p-5 h-screen pt-32">
          <h1 className="text-xl mb-2 text-white">Your Categories</h1>
          <button
            className="text-white my-5 text-center font-bold py-1 px-5 w-30 rounded focus:outline-none focus:shadow-outline bg-red-500 hover:bg-red-600"
            type="button"
            onClick={() => Navigate("/add-category")}
          >
            Add Categories
          </button>
          <div className="overflow-auto rounded-lg shadow hidden md:block">
            <table className="w-full">
              <thead className="bg-zinc-900 border-b-2 border-gray-200">
                <tr>
                  <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left text-white">
                    No.
                  </th>
                  <th className="w-10 p-3 text-sm font-semibold tracking-wide text-left text-white">
                    Photo
                  </th>
                  <th className="w-26 p-3 text-sm font-semibold tracking-wide text-left text-white">
                    Product Name
                  </th>
                  <th className="w-26 p-3 text-sm font-semibold tracking-wide text-left text-white">
                    Product Desc
                  </th>
                  <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left text-white">
                    Product Price
                  </th>
                  <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left text-white">
                    Qty
                  </th>
                  <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left text-white">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-white">
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <a
                      href="#"
                      className="font-bold text-blue-500 hover:underline"
                    >
                      1
                    </a>
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    index.png
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    Mouse Gaming
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    Mouse Gaming
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    Rp. 200.000
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    Rp. 200.000
                  </td>
                  <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                    <div className="flex space-x-5">
                      <button
                        className="text-white text-center font-bold py-1 px-5 w-1/2 rounded focus:outline-none focus:shadow-outline bg-green-500 hover:bg-green-600"
                        type="button"
                        onClick={() => Navigate("/edit-category")}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white text-center font-bold py-1 px-5 w-1/2 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                        // onClick={() => Navigate("/")}
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        Delete
                      </button>
                    </div>
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
                            <div class="w-full max-w-xs space-x-16">
                              <p>Are you sure want to delete this data ?</p>
                              <button
                                className="text-white my-3 text-center font-bold py-1 px-5 w-1/2 rounded focus:outline-none focus:shadow-outline bg-green-500 hover:bg-green-600"
                                type="button"
                                // onClick={() => Navigate("/")}
                              >
                                Yes
                              </button>
                              <button
                                className="text-white text-center font-bold py-1 px-5 w-1/2 rounded focus:outline-none focus:shadow-outline bg-red-500 hover:bg-red-600"
                                type="button"
                                // onClick={() => Navigate("/")}
                              >
                                No
                              </button>
                            </div>
                          </Dialog.Panel>
                        </div>
                      </Dialog>
                    </Transition>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
            <div className="bg-white space-y-3 p-4 rounded-lg shadow">
              <div className="flex items-center space-x-2 text-sm">
                <div>
                  <a
                    href="#"
                    className="text-blue-500 font-bold hover:underline"
                  >
                    #1000
                  </a>
                </div>
                <div className="text-gray-500">10/10/2021</div>
                <div>
                  <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                    Delivered
                  </span>
                </div>
              </div>
              <div className="text-sm text-gray-700">
                Kring New Fit office chair, mesh + PU, black
              </div>
              <div className="text-sm font-medium text-black">$200.00</div>
            </div>
            <div className="bg-white space-y-3 p-4 rounded-lg shadow">
              <div className="flex items-center space-x-2 text-sm">
                <div>
                  <a
                    href="#"
                    className="text-blue-500 font-bold hover:underline"
                  >
                    #1001
                  </a>
                </div>
                <div className="text-gray-500">10/10/2021</div>
                <div>
                  <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">
                    Shipped
                  </span>
                </div>
              </div>
              <div className="text-sm text-gray-700">
                Kring New Fit office chair, mesh + PU, black
              </div>
              <div className="text-sm font-medium text-black">$200.00</div>
            </div>
            <div className="bg-white space-y-3 p-4 rounded-lg shadow">
              <div className="flex items-center space-x-2 text-sm">
                <div>
                  <a
                    href="#"
                    className="text-blue-500 font-bold hover:underline"
                  >
                    #1002
                  </a>
                </div>
                <div className="text-gray-500">10/10/2021</div>
                <div>
                  <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-200 rounded-lg bg-opacity-50">
                    Canceled
                  </span>
                </div>
              </div>
              <div className="text-sm text-gray-700">
                Kring New Fit office chair, mesh + PU, black
              </div>
              <div className="text-sm font-medium text-black">$200.00</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
