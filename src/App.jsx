import React from "react";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Insights from "./components/Insights";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="flex font-roboto">
        <Routes>
          <Route path="/" element={<Sidebar /> && <Home />} />
          <Route path="/insights" element={<Insights />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
