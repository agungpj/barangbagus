import React, { useState, useContext } from "react";
import { useMutation } from "react-query";
import { API } from "../config/api";
import { UserContext } from "../context/userContext";
import axios from "axios";
const Register = () => {
  // const [state, dispatch] = useContext(UserContext);

  // const [message, setMessage] = useState(null);
  // const [form, setForm] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  // });

  // const { name, email, password } = form;

  // const handleChange = (e) => {
  //   setForm({
  //     ...form,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = useMutation(async (e) => {
  //   try {
  //     e.preventDefault();

  //     // Data body
  //     const body = JSON.stringify(form);

  //     // Configuration Content-type
  //     const config = {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: body,
  //     };

  //     // Insert data user to database
  //     const response = await API.post("/register", config);

  //     console.log(response);

  //     // Notification
  //     if (response.status == "success") {
  //       setForm({
  //         name: "",
  //         email: "",
  //         password: "",
  //       });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // });

  const [state, dispatch] = useContext(UserContext);

  const [message, setMessage] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      // Data body
      const body = JSON.stringify(form);

      // Configuration Content-type
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      // Insert data user to database
      const response = await API.post("/register", body, config);

      console.log(response);

      // Notification
      if (response.status == "success") {
        setForm({
          name: "",
          email: "",
          password: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  });
  return (
    <>
      <form
        className="px-10 pt-10 mb-10 bg-[#070707] rounded-lg"
        onSubmit={(e) => handleSubmit.mutate(e)}
      >
        <p className="text-white text-2xl font-bold pb-5">Register</p>
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
            placeholder="username"
            value={name}
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="email"
            value={email}
            name="email"
            onChange={handleChange}
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
            value={password}
            name="password"
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-center pb-10">
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 w-full rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
    </>
  );
};

export default Register;
