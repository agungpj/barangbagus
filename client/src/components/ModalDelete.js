import React, { Fragment, useState, useEffect, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
export default function ModalDelete({ show, handleClose, setConfirmDelete }) {
  const handleDelete = () => {
    setConfirmDelete(true);
  };
  return (
    <div>
      <Transition
        as={Fragment}
        show={show}
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
          open={show}
          //   onClose={() => setShow(false)}
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
    </div>
  );
}
