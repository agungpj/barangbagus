import { useState, useContext } from "react";
import { UserContext } from "../context/userContext";
import Logo from "../assets/DumbMerch.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";

const NavbarAdmin = () => {
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };
  const [state, dispatch] = useContext(UserContext);

  const logout = () => {
    console.log(state);
    dispatch({
      type: "LOGOUT",
    });
    navigate("/auth");
  };

  return (
    <div
      className="fixed w-full h-[80px] flex items-center px-4 justify-between 
     bg-[#020202] text-white z-50"
    >
      <Link to={"/product"} className="col text-decoration-none">
        <div>
          <img src={Logo} alt="Logo" style={{ width: "70px" }} />
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

          <Link to={"#"} className="col text-decoration-none">
            <li className="hover:text-red-500 border-b-1" onClick={logout}>
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

        <Link to={"/"}>
          <li className="py-6 text-4xl">
            <a className="font-bold"> Logout</a>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default NavbarAdmin;
