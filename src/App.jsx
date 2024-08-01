import React from "react";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <div className="flex font-roboto">
        <Sidebar></Sidebar>
        <Home></Home>
      </div>
    </>
  );
};

export default App;
