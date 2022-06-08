import React, { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Navbar from "../components/Navbar";
import { API } from "../config/api";
import { useQuery } from "react-query";
import ProductCard from "../components/ProductCard";

const Home = () => {
  let { data: products } = useQuery("productsCache", async () => {
    const response = await API.get("/products");
    return response.data.data;
  });
  useEffect(() => {
    console.log(products);
  }, []);
  return (
    <div name="home" className=" bg-[#020202] h-[100%]">
      <Navbar />
      {/* Container */}
      <div className="mx-auto max-w-[1150px] px-8 flex flex-col h-full p-0 m-0">
        <div className="pt-40 pb-10">
          <p className="text-white font-bold text-3xl">Products</p>
        </div>
        <div className="wrap">
          <div className="search">
            <input
              type="text"
              className="searchTerm"
              placeholder="What are you looking for?"
            />
            <button type="submit" className="searchButton">
              <FaSearch className="pl-2" />
            </button>
          </div>
        </div>

        <div className="w-full grid grid-cols-2 gap-x- sm:grid-cols-4 text-center py-8 gap-y-10">
          {products?.map((item, index) => (
            <ProductCard item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
