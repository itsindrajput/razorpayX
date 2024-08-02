import React from "react";
import {
  FaPlus,
  FaAngleDown,
  FaSearch,
  FaSpeakap,
  FaRegUser,
} from "react-icons/fa";
import { LiaBullhornSolid } from "react-icons/lia";

const Navbar = () => {
  return (
    <>
      <div>
        <ul className="flex justify-end space-x-8 mr-6">
          <li>
            <button className="relative flex items-center bg-blue-500 px-6 py-2 font-bold text-lg">
              <FaPlus className="mr-2" />
              <span className="py-1">PAYOUT</span>
              <span className="absolute left-[135px] top-3 w-[0.1rem] h-8 bg-slate-600"></span>
              <FaAngleDown className="ml-9" />
            </button>
          </li>
          <li className="py-[14px] px-1 text-2xl text-blue-400 cursor-pointer">
            <FaSearch />
          </li>
          <li className="py-[14px] px-1 text-2xl text-orange-500 cursor-pointer">
            <LiaBullhornSolid className="-rotate-45" />
          </li>
          <li className="flex flex-row flex-nowrap py-[14px] px-1 text-xl text-blue-400 cursor-pointer">
            <FaRegUser />
            <FaAngleDown />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
