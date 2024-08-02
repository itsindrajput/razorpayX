import React from "react";

const Settlement = () => {
  return (
    <>
      <div className="space-y-4 mt-6 bg-[#171D26] text-white">
        <div className="flex border-t-4 border-green-500 p-4">
          <div className="w-[30%] mr-[5%]">
            <h2 className="text-xl font-bold">Amazon Instant Settlements</h2>
          </div>
          <div className="w-[65%]">
            <div className="flex items-baseline mt-2 ">
              <div className="flex items-center">
                <input
                  type="radio"
                  checked
                  id="amazon-instant"
                  name="settlements"
                  className="h-4 w-4 text-blue-600"
                />
              </div>
              <div className="ml-2">
                <p>Let's get you started</p>
                <p className="text-sm text-gray-400">
                  Complete your application and get instant access to your
                  Amazon payouts
                </p>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
                  APPLY NOW
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex border-t-4 border-green-500 p-4">
          <div className="w-[30%] mr-[5%]">
            <h2 className="text-xl font-bold">Creating payouts in Live mode</h2>
          </div>

          <div className="w-[65%]">
            <div className="flex items-center mt-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="add-balance"
                  name="payouts"
                  className="h-4 w-4 text-green-600"
                />
              </div>
              <div className="flex items-center ml-2 gap-2">
                <p className="font-bold text-gray-400">Add balance</p>
                <span className="text-sm text-gray-400 mt-1">
                  to create payouts in Live mode
                </span>
              </div>
            </div>

            <hr className="mt-1 mb-4 ml-6 border-gray-400" />

            <div className="flex items-baseline mt-2">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="create-payout"
                  checked
                  name="payouts"
                  className="h-4 w-4 text-blue-600"
                />
              </div>
              <div className="ml-2">
                <p className="font-bold">Create payout</p>
                <p className="text-sm text-gray-400">
                  There are multiple ways in which you can create the first
                  payout:
                </p>

                <div className="flex space-x-2 mt-4 text-sm">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded">
                    MAKE A PAYOUT
                  </button>
                  <button className="bg-gray-700 text-white px-4 py-2 rounded">
                    SHOW APPS FOR ME
                  </button>
                  <button className="bg-gray-700 text-white px-4 py-2 rounded">
                    API PAYOUTS
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settlement;
