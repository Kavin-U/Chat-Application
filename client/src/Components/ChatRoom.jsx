import React from "react";
import { Link, Outlet } from "react-router-dom";

function ChatRoom() {
  const Rooms = [1, 2];

  



  return (
    <div className="w-[100%] h-[91.4vh] 2xl:h-[94.4vh] bg-teal-800 flex items-center">
      <div className="w-[95%] h-[89%] bg-teal-900 flex mx-auto">
        <div className="bg-teal-600 w-fit h-full flex justify-between flex-col">
          <div>
            {Rooms.map((val) => {
              return (
                <Link
                  key={val}
                  to={`rooms/${val}`}
                  className="text-white block"
                >
                  <div className="py-4 hover:bg-green-800 text-center cursor-pointer ">
                    Room {[val]}
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="mx-auto py-2">
            <button className="text-gray-700 w-[200px] m-2 font-semibold rounded-lg text-center bg-teal-400 py-5">
              New Chat Room
            </button>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default ChatRoom;
