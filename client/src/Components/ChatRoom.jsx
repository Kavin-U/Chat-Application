import React from "react";
import { Link, Outlet } from "react-router-dom";

function ChatRoom() {
  const Rooms = [1,2];
  return (
    <div className="w-[100%] h-screen bg-teal-800 flex items-center justify-end pr-2">
      <div className="w-[95%] h-[89%] bg-teal-900 flex">
        <div className="bg-teal-600 w-fit h-full">
          {Rooms.map((val) => {
            return (
              <Link key={val} to={`rooms/${val}`} className="text-white block">
                <div className="py-5 px-10 hover:bg-green-800 cursor-pointer ">
                  Rooms {[val]}
                </div>
              </Link>
            );
          })}
        </div>
        <Outlet/>
      </div>
    </div>
  );
}

export default ChatRoom;
