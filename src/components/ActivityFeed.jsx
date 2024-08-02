import React from "react";
import { FaUser } from "react-icons/fa6";
import imageX from "../assets/Razorpay-lite.png";

const ActivityFeed = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto p-6 space-y-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Activity Feed</h2>
          <div className="flex items-center space-x-4 text-gray-400">
            <p>Updated a few seconds ago</p>
            <a href="#" className="text-blue-500 text-lg">
              Show filters &darr;
            </a>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-[#161b22] p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xl font-bold">23 JUL</p>
                <p className="text-md text-gray-400">Tuesday</p>
              </div>
              <div className="flex items-center space-x-4">
                <FaUser className="w-6 h-6" />
                <p>1 contact created</p>
              </div>
            </div>
          </div>
          <div className="bg-[#161b22] p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xl font-bold">9 JUL</p>
                <p className="text-md text-gray-400">Tuesday</p>
              </div>
              <div className="flex items-center space-x-4">
                <img src={imageX} alt="Razorpay-lite" className="w-10 h-10" />
                <p>₹300.00 credited into the account</p>
              </div>
            </div>
          </div>
          <div className="bg-[#161b22] p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xl font-bold">1 JUL</p>
                <p className="text-md text-gray-400">Monday</p>
              </div>
              <div className="flex items-center space-x-4">
                <img src={imageX} alt="Razorpay-lite" className="w-10 h-10" />
                <p>1 payout worth ₹2,36,695.00 created</p>
              </div>
            </div>
          </div>
          <div className="bg-[#161b22] p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xl font-bold">24 JUN</p>
                <p className="text-md text-gray-400">Monday</p>
              </div>
              <div className="flex items-center space-x-4">
                <img src={imageX} alt="Razorpay-lite" className="w-10 h-10" />
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
