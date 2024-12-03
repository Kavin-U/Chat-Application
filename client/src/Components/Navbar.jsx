import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="w-[100%]">
        <Link to='/'>
          <div className="flex justify-center p-3">
            <span className="text-2xl font-bold flex items-end text-teal-700">CHAT </span>
            <span className="flex items-end text-lg text-teal-700 font-bold">Room</span>
          </div>
        </Link>
      </div>
      <Outlet />
    </>
  );
}
