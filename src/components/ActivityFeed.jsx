import React from "react";
import { FaUser } from "react-icons/fa6";
import imageX from "../assets/Razorpay-lite.png";

const ActivityFeed = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto p-6 space-y-8 bg-[#171D26]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">
            Activity Feed
            <span className="ml-4 text-sm text-gray-400">
              🕝 Updated a few seconds ago
            </span>
          </h2>
          <div className="flex items-center space-x-4 text-gray-400">
            <a href="#" className="text-blue-500 text-base">
              Show filters &darr;
            </a>
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-[#1B202A] p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-bold">23 JUL</p>
                <p className="text-sm text-gray-400">Tuesday</p>
              </div>
              <div className="flex items-center space-x-4">
                <FaUser className="w-6 h-6" />
                <p>1 contact created</p>
              </div>
            </div>
          </div>
          <div className="bg-[#1B202A] p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-bold">9 JUL</p>
                <p className="text-sm text-gray-400">Tuesday</p>
              </div>
              <div className="flex items-center space-x-4">
                <img src={imageX} alt="Razorpay-lite" className="w-5 h-5" />
                <p>₹300.00 credited into the account</p>
              </div>
            </div>
          </div>
          <div className="bg-[#1B202A] p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-bold">1 JUL</p>
                <p className="text-sm text-gray-400">Monday</p>
              </div>
              <div className="flex items-center space-x-4">
                <img src={imageX} alt="Razorpay-lite" className="w-5 h-5" />
                <p>1 payout worth ₹2,36,695.00 created</p>
              </div>
            </div>
          </div>
          <div className="bg-[#1B202A] p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-bold">24 JUN</p>
                <p className="text-sm text-gray-400">Monday</p>
              </div>
              <div className="flex items-center space-x-4">
                <img src={imageX} alt="Razorpay-lite" className="w-5 h-5" />
                <p>1 payout worth ₹2,36,695.00 created</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivityFeed;
