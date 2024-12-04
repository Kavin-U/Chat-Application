import React, { useEffect, useState } from "react";
import { Link, useNavigate, Outlet, useLocation } from "react-router-dom";
import CreateChatRoom from "./CreateChatRoom";
import {motion} from "framer-motion";

function ChatRoom() {
  const [CreateShow, setCreateShow] = useState(false);
  const [roomsCreated, setroomsCreated] = useState(false);
  const [Rooms,setRooms] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch("http://localhost:5000/room/findrooms");
        if (response.ok) {
          const data = await response.json();
          setRooms(data.rooms);
        } else {
          console.error("Failed to fetch rooms");
        }
      } catch (error) {
        console.error("Error fetching rooms:", error);
      } finally {
        // setLoading(false);
      }
    };

    fetchRooms();
  }, [roomsCreated]); 


  useEffect(() => {
      if (Rooms.length === 0) {
        navigate("/");
      }
  }, [Rooms, navigate]);


  // const reorderedRooms = () => {
  //   const activeRoom = Rooms.find(
  //     (room) => location.pathname === `/rooms/${room.Name}`
  //   );
  //   const otherRooms = Rooms.filter(
  //     (room) => location.pathname !== `/rooms/${room.Name}`
  //   );
  //   return activeRoom ? [activeRoom, ...otherRooms] : Rooms;
  // };


  return (
    <div className="w-[100%] h-[91.4vh] 2xl:h-[94.4vh] bg-teal-800 flex items-center">
      <div className="w-[95%] h-[89%] bg-teal-900 flex mx-auto">
        <div className="bg-teal-600 w-fit h-full border-r-2 border-gray-400 flex justify-between flex-col">
          <div className="h-[80%] scrollbar-hide overflow-auto">
            <div className="text-white text-center p-4 uppercase bg-teal-950" >ChatRooms</div>
          {Rooms.map((room, index) => {              
              const isActive = location.pathname === `/rooms/${room.Name}`;
              return (
                <Link
                  key={index}
                  to={`rooms/${[room.Name +','+ room._id]}`}
                  className={`block text-white ${
                    isActive ? "bg-teal-700" : ""
                  }`}
                >
                  <div className="py-4 px-4 hover:bg-teal-700 cursor-pointer capitalize">
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
