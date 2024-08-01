import React from "react";
import { FaHome, FaRegUser, FaRupeeSign, FaArrowRight } from "react-icons/fa";
import { FiArrowUpRight, FiSend } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { CgFileDocument } from "react-icons/cg";
import { PiJoystick } from "react-icons/pi";
import { TiPrinter } from "react-icons/ti";
import { TbReportAnalytics } from "react-icons/tb";
import image from "../assets/RazorpayX-Logo.png";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-64 bg-sidebarCustom text-white flex flex-col">
      <div className="p-4">
        <div className="flex items-center mb-8 ml--2">
          <img src={image} alt="RazorpayX" className="w-[80%] h-10" />
        </div>
        <div className="ml-[-1rem] w-[114%] bg-HighlightMenu mb-6 relative">
          <div className="flex items-center px-4 py-2 cursor-pointer relative">
            <FaHome className="mr-2" />
            <span>Home</span>
            <div className="absolute left-0 top-2 bottom-0 w-1 h-6 bg-green-300" />
          </div>
        </div>
        <div className="flex items-center mb-8 cursor-pointer">
          <FiArrowUpRight className="mr-2" />
          <span>Payouts</span>
        </div>
        <div className="flex items-center mb-8 cursor-pointer">
          <IoDocumentTextOutline className="mr-2" />
          <span>Account Statement</span>
        </div>
        <div className="flex items-center mb-8 cursor-pointer">
          <FaRegUser className="mr-2" />
          <span>Contacts</span>
        </div>
        <hr className="border-t border-gray-700 my-4 mb-6" />
        <div className="flex items-center mb-8 cursor-pointer">
          <FaRupeeSign className="mr-2" />
          <span>Loans</span>
          <button className="ml-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
            New
          </button>
        </div>

        <div className="flex flex-wrap items-center mb-8 cursor-pointer">
          <div className="relative flex items-center mb-4">
            <CgFileDocument className="mr-2 mt-2 ml-0.5" />
            <span className="absolute top-0 left-0 w-1.5 h-1.5 bg-white rounded-full"></span>
            <span>Vendor Payments</span>
          </div>
          <button className="ml-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
            New
          </button>
          <a href="#" target="_blank" className="text-blue-500 ml-1">
            Invoice approvals
          </a>
          <FaArrowRight className="ml-1 text-sm  text-blue-500" />
        </div>

        <div className="flex items-center mb-8 cursor-pointer">
          <PiJoystick className="mr-2" />
          <span>Tax Payments</span>
        </div>
        <div className="flex items-center mb-8 cursor-pointer">
          <FiSend className="mr-2" />
          <span>Payroll Links</span>
        </div>
        <div className="flex items-center mb-8 cursor-pointer">
          <TiPrinter className="mr-2" />
          <span>Payroll</span>
        </div>
        <div className="flex items-center cursor-pointer">
          <TbReportAnalytics className="mr-2" />
          <span>Reports</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
