import React from "react";
import Navbar from "./Navbar";
import ShowBalance from "./ShowBalance";

const Home = () => {
  return (
    <div className="ml-64 p-4 bg-customDark text-customLight w-[100%]">
      <Navbar />

      <div className="px-[25%] py-10">
        <ShowBalance />
      </div>
    </div>
  );
};

export default Home;
