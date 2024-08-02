import React from "react";
import Navbar from "./Navbar";
import ShowBalance from "./ShowBalance";
import PendingItem from "./PendingItem";
import Onboarding from "./Onboarding";

const Home = () => {
  return (
    <div className="ml-64 p-4 bg-customDark text-customLight w-[100%]">
      <Navbar />
      <div className="px-[20%] py-10">
        <ShowBalance />
        <PendingItem />
        <Onboarding />
      </div>
    </div>
  );
};

export default Home;
