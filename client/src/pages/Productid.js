import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Product2 from "../assets/product2.png";
import { useQuery, useMutation } from "react-query";
import { useParams, useNavigate } from "react-router-dom";
import convertRupiah from "rupiah-format";

// API config
import { API } from "../config/api";
const Productid = () => {
  const navigate = useNavigate();
  let { id } = useParams();

  let { data: product, refetch } = useQuery("Cache", async () => {
    const config = {
      method: "GET",
      headers: {
        Authorization: "Basic " + localStorage.token,
      },
    };
    const response = await API.get("/product/" + id, config);
    const datas = response.data;
    console.log(datas);
  });

  return (
    <div name="home" className="w-full h-screen bg-[#020202]">
      <Navbar />
      {/* Container */}
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8"></div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8">
          <img
            src={product?.image}
            alt="Logo Image"
            style={{ width: "436px", height: "555px" }}
          />
        </div>
      </div>

      <div className="flex justify-center desc">
        <div className="w-full max-w-lg">
          <div className="text-red-600 text-3xl font-extrabold py-2">
            <p>Mouse</p>
          </div>
          <p className="text-white">Stock: 23</p>

          <div className="text-white py-5">{product?.desc}</div>
          <div className="text-white py-3 text-justify">
            <p>
              Mouse Wireless Alytech AL - Y5D, hadir dengan desain 3 tombol
              mouse yang ringan dan mudah dibawa. Mouse ini menggunakan
              frekuensi radio 2.4GHz (bekerja hingga jarak 10m) dan fitur sensor
              canggih optik pelacakan dengan penerima USB yang kecil. Mouse ini
              didukung oleh 1x baterai AA (hingga 12 bulan hidup baterai).
              mendukung sistem operasi Windows 7,8, 10 keatas, Mac OS X 10.8
              atau yang lebih baru dan sistem operasi Chrome OS.
            </p>
          </div>
          <div className="text-red-600 text-xl font-bold py-2 flex justify-end pb-5">
            <p> {convertRupiah.convert(product?.price)}</p>
          </div>
          <button
            className="bg-red-500 hover:bg-red-600 text-white text-center font-bold py-2 w-full rounded focus:outline-none focus:shadow-outline"
            type="button"
            // onClick={() => Navigate("/")}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Productid;
