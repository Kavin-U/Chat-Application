import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import CreateChatRoom from "./CreateChatRoom";
import {motion} from "framer-motion";

function ChatRoom() {
  const [CreateShow, setCreateShow] = useState(false);
  const [roomsCreated, setroomsCreated] = useState(false);
  const [Rooms,setRooms] = useState([]);

  const fetchRooms = async()=>{
    const response = await fetch("http://localhost:5000/room/findrooms");

    if(response.ok){

      const data = await response.json();

      setRooms(data.rooms);

      console.log("Fetcched rooms :" , data.rooms);
    }

  }

  useEffect(()=>{
     fetchRooms();
     setroomsCreated(false);
  },[roomsCreated])


  return (
    <div className="w-[100%] h-[91.4vh] 2xl:h-[94.4vh] bg-teal-800 flex items-center">
      <div className="w-[95%] h-[89%] bg-teal-900 flex mx-auto">
        <div className="bg-teal-600 w-fit h-full flex justify-between flex-col">
          <div className="h-[80%] overflow-auto">
            {Rooms.map((room , index) => {
              return (
                <Link
                  key={index}
                  to={`rooms/${room.Name}`}
                  className="text-white block"
                >
                  <div className="py-4 hover:bg-green-800 text-center cursor-pointer ">
                    {[room.Name]}
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="mx-auto py-2">
            <button
              onClick={() => {
                setCreateShow(!CreateShow);
              }}
              className="text-gray-700 w-[200px] m-2 font-semibold rounded-lg text-center bg-teal-400 hover:bg-teal-200 py-5"
            >
              New Chat Room
            </button>
          </div>
        </div>
        <div className="absolute top-0 left-0 z-10">{CreateShow ? <CreateChatRoom CombinedState={[setCreateShow,setroomsCreated]}/> : <div></div>}</div>
        <Outlet />
      </div>
    </div>
  );
}

export default ChatRoom;
