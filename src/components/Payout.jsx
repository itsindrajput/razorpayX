import React from "react";

const Payout = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto space-y-8 p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Insights</h2>
          <a href="#" className="text-blue-500 text-lg">
            Detailed insights &rarr;
          </a>
        </div>
        <div className="bg-[#161b22] p-6 rounded-lg shadow-lg">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-md text-gray-400 mb-2">
                Payout volume - last 30 days
              </p>
              <p className="text-3xl font-bold">₹236,695.00</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payout;
