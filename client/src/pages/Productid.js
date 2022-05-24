import React from "react";
import Navbar from "../components/Navbar";
import Product2 from "../assets/product2.png";
const Productid = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#020202]">
      <Navbar />
      {/* Container */}
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8"></div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8">
          <img
            src={Product2}
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

          <div className="text-white py-5">
            <p>- Wireless Mouse</p>
            <p>- Konektivitas wireless 2.4 GHz</p>
            <p>- Jarak wireless hingga 10 m</p>
            <p>- Plug and Play</p>
            <p>- Baterai tahan hingga 12 bulan</p>
          </div>
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
            <p>Rp. 300.000</p>
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
