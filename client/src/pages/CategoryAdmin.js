import React, { Fragment, useState, useEffect, useContext } from "react";
import Navbar from "../components/Navbar";
import { Dialog, Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";
import NavbarAdmin from "../components/NavbarAdmin";
import { API } from "../config/api";
import { useQuery } from "react-query";
const Category = () => {
  const Navigate = useNavigate();

  const [nav, setNav] = useState(false);
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

  let { data: categories } = useQuery("categoriesCache", async () => {
    const response = await API.get("/categories");
    return response.data.data;
  });

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

                  <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left text-white">
                    Category Name
                  </th>
                  <th className="w-32 p-3 text-sm font-semibold tracking-wide text-center text-white">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {categories?.map((item, index) => (
                  <tr key={index} className="bg-white">
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      <a
                        href="#"
                        className="font-bold text-blue-500 hover:underline"
                      >
                        {index + 1}
                      </a>
                    </td>

                    <td className="p-3 text-sm text-gray-700">{item.name}</td>

                    <td className="p-3 text-sm text-gray-700">
                      <div className="flex space-x-5">
                        <button
                          className="text-white text-center font-bold py-1 px-5 w-1/2 rounded focus:outline-none focus:shadow-outline bg-green-500 hover:bg-green-600"
                          type="button"
                          onClick={() => Navigate("/edit-product")}
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
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
            {categories?.map((item, index) => (
              <div
                className="bg-white space-y-3 p-4 rounded-lg shadow"
                key={index}
              >
                <div className="flex justify-between items-center text-sm">
                  <div>
                    <a
                      href="#"
                      className="text-blue-500 text-lg font-bold hover:underline"
                    >
                      {index + 1}
                    </a>
                  </div>
                  <div className="text-zinc-600 text-md font-bold uppercase">
                    {item.name}
                  </div>
                  <div className="flex p-2">
                    <button
                      className="text-white mx-2 font-bold py-1 px-5 w-1/2 rounded focus:outline-none focus:shadow-outline bg-green-500 hover:bg-green-600"
                      type="button"
                      onClick={() => Navigate("/edit-product")}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-5 w-1/2 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                      // onClick={() => Navigate("/")}
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
