import React, { useContext, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Product1 from "../assets/product1.png";
import Product2 from "../assets/product2.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div name="home" className=" bg-[#020202] h-[100%]">
      <Navbar />
      {/* Container */}
      <div className="mx-auto max-w-[1150px] px-8 flex flex-col h-full p-0 m-0">
        <div className="pt-40 pb-10">
          <p className="text-white font-bold text-3xl">Products</p>
        </div>
        <div class="wrap">
          <div class="search">
            <input
              type="text"
              class="searchTerm"
              placeholder="What are you looking for?"
            />
            <button type="submit" class="searchButton">
              <FaSearch className="pl-2" />
            </button>
          </div>
        </div>

        <div className="w-full grid grid-cols-2 gap-x- sm:grid-cols-4 text-center py-8 gap-y-10">
          <Link to={"/productid"} className="col text-decoration-none">
            <div className="shadow-md shadow-[#040c16] card bg-[#0b0b0b] hover:scale-105 duration-500">
              <img src={Product1} alt="Logo Image" />
              <p className="font-bold text-lg py-1 text-red-600">
                Keyboard Gaming
              </p>
              <p className="text-white">Rp. 700.000</p>
              <p className="text-white">Stock: 193</p>
            </div>
          </Link>
          <Link to={"/productid"} className="col text-decoration-none">
            <div className="shadow-md shadow-[#040c16] card bg-[#0b0b0b] hover:scale-105 duration-500">
              <img src={Product1} alt="Logo Image" />
              <p className="font-bold text-lg py-1 text-red-600">
                Keyboard Gaming
              </p>
              <p className="text-white">Rp. 700.000</p>
              <p className="text-white">Stock: 193</p>
            </div>
          </Link>
          <Link to={"/productid"} className="col text-decoration-none">
            <div className="shadow-md shadow-[#040c16] card bg-[#0b0b0b] hover:scale-105 duration-500">
              <img src={Product1} alt="Logo Image" />
              <p className="font-bold text-lg py-1 text-red-600">
                Keyboard Gaming
              </p>
              <p className="text-white">Rp. 700.000</p>
              <p className="text-white">Stock: 193</p>
            </div>
          </Link>
          <Link to={"/productid"} className="col text-decoration-none">
            <div className="shadow-md shadow-[#040c16] card bg-[#0b0b0b] hover:scale-105 duration-500">
              <img src={Product1} alt="Logo Image" />
              <p className="font-bold text-lg py-1 text-red-600">
                Keyboard Gaming
              </p>
              <p className="text-white">Rp. 700.000</p>
              <p className="text-white">Stock: 193</p>
            </div>
          </Link>
          <Link to={"/productid"} className="col text-decoration-none">
            <div className="shadow-md shadow-[#040c16] card bg-[#0b0b0b] hover:scale-105 duration-500">
              <img src={Product1} alt="Logo Image" />
              <p className="font-bold text-lg py-1 text-red-600">
                Keyboard Gaming
              </p>
              <p className="text-white">Rp. 700.000</p>
              <p className="text-white">Stock: 193</p>
            </div>
          </Link>
          <Link to={"/productid"} className="col text-decoration-none">
            <div className="shadow-md shadow-[#040c16] card bg-[#0b0b0b] hover:scale-105 duration-500">
              <img src={Product1} alt="Logo Image" />
              <p className="font-bold text-lg py-1 text-red-600">
                Keyboard Gaming
              </p>
              <p className="text-white">Rp. 700.000</p>
              <p className="text-white">Stock: 193</p>
            </div>
          </Link>
          <Link to={"/productid"} className="col text-decoration-none">
            <div className="shadow-md shadow-[#040c16] card bg-[#0b0b0b] hover:scale-105 duration-500">
              <img src={Product2} alt="Logo Image" />
              <p className="font-bold text-lg py-1 text-red-600">
                Mouse Bukan Gaming
              </p>
              <p className="text-white">Rp. 300.000</p>
              <p className="text-white">Stock: 23</p>
            </div>
          </Link>
          <Link to={"/productid"} className="col text-decoration-none">
            <div className="shadow-md shadow-[#040c16] card bg-[#0b0b0b] hover:scale-105 duration-500">
              <img src={Product2} alt="Logo Image" />
              <p className="font-bold text-lg py-1 text-red-600">
                Mouse Bukan Gaming
              </p>
              <p className="text-white">Rp. 300.000</p>
              <p className="text-white">Stock: 23</p>
            </div>
          </Link>
          <Link to={"/productid"} className="col text-decoration-none">
            <div className="shadow-md shadow-[#040c16] card bg-[#0b0b0b] hover:scale-105 duration-500">
              <img src={Product2} alt="Logo Image" />
              <p className="font-bold text-lg py-1 text-red-600">
                Mouse Bukan Gaming
              </p>
              <p className="text-white">Rp. 300.000</p>
              <p className="text-white">Stock: 23</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
