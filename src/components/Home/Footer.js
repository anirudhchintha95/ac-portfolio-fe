import React from "react";
import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="w-full h-10 flex items-center justify-end flex-shrink-0">
      <div className="text-xs float-right flex items-center text-gray-300">
        <BiCopyright />
        <span className="ml-1">2023 - All rights reserved</span>
      </div>
    </div>
  );
};

export default Footer;
