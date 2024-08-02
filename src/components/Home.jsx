import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="ml-64 p-4 bg-customDark text-customLight w-[100%]">
      <Navbar />
      <div>
        <h1 className="text-3xl font-bold underline">Home Content</h1>
        <p>
          This is the home content area. Add more content here to see how it
          scrolls when the content overflows.
        </p>
      </div>
    </div>
  );
};

export default Home;
