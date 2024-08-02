import React from "react";
import Navbar from "./Navbar";
import ShowBalance from "./ShowBalance";
import PendingItem from "./PendingItem";
import Onboarding from "./Onboarding";
import Settlement from "./Settlement";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import imageX from "../assets/Razorpay-lite.png";
import banner from "../assets/banner.png";

const Home = () => {
  return (
    <div className="ml-64 p-4 bg-customDark text-customLight w-[100%]">
      <Navbar />
      <Sidebar />
      <div className="px-[20%] py-10">
        <ShowBalance />
        <PendingItem />
        <Onboarding />
        <Settlement />
      </div>

      <img
        src={banner}
        alt="Razorpay-Banner"
        className="w-[100%] h-auto mr-2 px-[20%] cursor-pointer"
      />

      <div className="flex justify-end p-6 mt-1 mr-8 py-5">
        <Link
          to="/insights"
          className="inline-flex items-center bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:from-blue-500 hover:via-blue-600 hover:to-blue-700 transition duration-300"
        >
          <img src={imageX} alt="Razorpay-lite" className="w-5 h-5 mr-2" />
          Insights
        </Link>
      </div>
    </div>
  );
};

export default Home;
