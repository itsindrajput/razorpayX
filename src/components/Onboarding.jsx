import React from "react";
import { FaArrowRight } from "react-icons/fa";
import bank from "../assets/bank.png";

const Onboarding = () => {
  return (
    <div className="p-4">
      <h1 className="mb-3">
        Onboarding updates <span className="text-slate-500 ml-2">(1)</span>
      </h1>

      <div className="flex items-center bg-[#171D26] rounded-md h-44">
        <div className="flex-none w-[15%] h-full relative">
          <div
            className="bg-[#2647CF] w-full h-full relative flex items-center justify-center"
            style={{
              clipPath: "polygon(0% 0%, 67% 0, 100% 53%, 67% 100%, 0% 100%)",
            }}
          >
            <div className="flex flex-col items-center">
              <img
                src={bank}
                alt="Current Account Image"
                className="w-20 h-20 mb-2"
              />
              <p className="text-xs text-center">CURRENT ACCOUNT</p>
            </div>
          </div>
        </div>

        <div className="flex-1 ml-2 p-2">
          <h2 className="text-lg font-bold text-white mb-1">
            Open your RazorpayX account.
          </h2>
          <p className="text-xs text-gray-400">
            Don't let bankache come in the way of your growth. Apply for your
            RazorpayX account with a few basic details.
          </p>

          <div className="relative flex items-center mt-5 gap-2">
            <div className="w-[25%] h-1 bg-gray-600"></div>
            <div className="absolute w-[12%] h-1 bg-green-400"></div>
            <div className="w-[25%] h-1 bg-gray-600"></div>
            <div className="w-[25%] h-1 bg-gray-600"></div>
            <div className="w-[25%] h-1 bg-gray-600"></div>
          </div>

          <div className="flex items-center justify-between mt-4">
            <button className="flex items-center bg-blue-600 text-white rounded-md px-6 py-2">
              <span>Start application </span>
              <FaArrowRight className="ml-2" />
            </button>
            <span className="text-sm text-gray-400">0/4</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
