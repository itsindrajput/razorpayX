import React from "react";
import Sidebar from "./Sidebar";
import Payout from "./Payout";
import ActivityFeed from "./ActivityFeed";

const Insights = () => {
  return (
    <>
      <div className="flex items-center font-roboto ml-64 bg-customDark text-customLight w-[100%]">
        <Sidebar></Sidebar>
        <div className="px-[20%] py-10 w-full">
          <Payout />
          <ActivityFeed />
        </div>
      </div>
    </>
  );
};

export default Insights;
