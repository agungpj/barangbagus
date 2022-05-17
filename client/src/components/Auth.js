import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/DumbMerch.png";
import Register from "./Register";

function Auth() {
  const Navigate = useNavigate();
  const [login, isLogin] = useState(false);

  const [auth, setAuth] = useState(false);

  const userlogin = () => {
    isLogin(true);
  };

  const userAuth = () => {
    setAuth(true);
  };

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(auth));
    const storeAuth = localStorage.getItem("auth");
    const saved = JSON.parse(storeAuth);
    if (saved) {
      Navigate("/");
    }
    console.log(storeAuth, saved);

    console.log("st: ", storeAuth);
  }, [auth, Navigate]);

  const userRegister = () => {
    isLogin(false);
  };

  return (
    <div name="about" className="w-full h-screen bg-[#020202] text-white">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8"></div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8">
          <div className="sm:text-left">
            <img
              className="pb-10"
              src={Logo}
              alt="Logo Image"
              style={{ width: "200px" }}
            />
            <p className="text-4xl font-bold">Easy, Fast and Realible.</p>
            <p className="font-light text-zinc-500 pt-5">
              Go shopping for merchandise, just go to dumb merch shopping. the
              biggest merchandise in Indonesia.
            </p>
            <div className="flex pt-10 space-x-10">
              <button
                className="text-white font-bold group px-10 py-1 my-2 flex items-center bg-red-500 hover:bg-red-600 rounded-md"
                type="button"
                onClick={userlogin}
              >
                Login
              </button>
              <button
                className="text-white font-bold group px-10 py-1 my-2 flex items-center hover:bg-red-500 rounded-md hover:border-pink-600"
                type="button"
                onClick={userRegister}
              >
                Register
              </button>
            </div>
          </div>

          <div className="flex justify-end mt-20">
            <div className="w-full max-w-xs">
              {login ? (
                <>
                  <form className="px-10 pt-10 mb-10 bg-[#070707] rounded-lg">
                    <p className="text-white text-2xl font-bold pb-5">Login</p>

                    <div className="mb-4">
                      <label
                        className="block text-white text-sm font-bold mb-2"
                        htmlFor="username"
                      >
                        Username
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Username"
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        className="block text-white text-sm font-bold mb-2"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="******************"
                      />
                    </div>
                    <div className="flex justify-center pb-10">
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 w-full rounded focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={userAuth}
                        // onClick={() => Navigate("/")}
                      >
                        Sign In
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <Register />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// <div name="about" className="w-full h-screen bg-[#000000ef] text-white">
//         <img src={Logo} alt="Logo Image" style={{ width: "50px" }} />

//         <p className="text-4xl font-bold inline"></p>

export default Auth;
