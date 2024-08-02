import React from "react";
import { FaRupeeSign, FaPlus } from "react-icons/fa";
import imageX from "../assets/Razorpay-lite.png";
import { GrPowerCycle } from "react-icons/gr";

const ShowBalance = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="text-gray-400">
          <ul>
            <li className="flex gap-2 items-center">
              <img src={imageX} alt="Razorpay Lite" className="w-3 h-3" />
              <span className="text-sm">
                RazorpayX Lite <em>as of a few seconds ago</em>
              </span>
              <GrPowerCycle />
            </li>
            <li className="flex items-center">
              <FaRupeeSign className="text-xs" />
              <span className="text-2xl font-bold text-white">
                100<span className="text-base text-gray-400">.09</span>
              </span>
            </li>
          </ul>
        </div>
        <div className="bg-slate-600 top-0 left-0 w-[0.1rem] h-7"></div>
        <div>
          <button className="flex items-center gap-2 text-sm text-blue-400">
            <FaPlus /> Add Balance
          </button>
        </div>
      </div>
    </>
  );
};

export default ShowBalance;
