import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MdModeEditOutline,MdOutlineAdd } from "react-icons/md";
import ConfirmDelete from "./ConfirmDelete";

export default function ModifyChatRoom() {
  const params = useParams();
  const [currentRoom, setCurrentRoom] = useState(null);
  const [DeleteRoom , setDelete] = useState(false);
  const Current = params.RoomName;

  useEffect(() => {
    console.log("RoomID from params:", Current);

    const fetchRoom = async () => {
      try {
        const bodyPayload = { RoomID: Current }; // Prepare payload
        console.log("Body Payload:", bodyPayload);

        const response = await fetch(
          "http://localhost:5000/room/findactiveroom",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(bodyPayload),
          }
        );

        if (!response.ok) {
          console.error(
            "Failed to fetch room details. Status:",
            response.status
          );
          return;
        }

        const data = await response.json();
        console.log("Room data:", data.currentroom);
        setCurrentRoom(data.currentroom);
      } catch (error) {
        console.error("Error fetching room details:", error);
      }
    };

    if (Current) {
      fetchRoom();
    }
  }, [params]);

  if (!currentRoom) {
    return (
      <div className="w-full bg-teal-700 min-h-[472px] flex items-center justify-center">
        <p>Loading room details...</p>
      </div>
    );
  }

  return (
    <>
    <div className="w-full flex justify-center bg-teal-700 min-h-[472px]">
      <div className="w-[500px] flex flex-col gap-4 bg-teal-500 rounded-lg h-fit p-2 mt-4 ">
        <div className="capitalize text-center text-3xl text-white p-3">{currentRoom.Name}</div>
        <div className="py-4 px-2 text-white w-full mx-auto rounded-lg bg-teal-950">
          <div className="relative text-xl text-gray-400 text-left">
            <span className="absolute right-4 p-2 text-sm rounded-full text-black bg-teal-700" ><MdModeEditOutline/></span>
            Description
            </div>
          <div className="mx-20 my-3 text-lg">{currentRoom.Description}</div>
          <div className=" relative text-xl text-gray-400 text-left">
          <span className="absolute right-14 p-2 text-sm text-black rounded-full bg-teal-700" ><MdOutlineAdd/></span>
          <span className="absolute right-4 p-2 text-sm rounded-full text-black bg-teal-700" ><MdModeEditOutline/></span>
            Members
            </div>
          <ul className="mx-20 my-3 text-lg">
            {currentRoom.users.length > 0 ? (
              currentRoom.users.map((user, index) => (
                <li key={index}>{user}</li>
              ))
            ) : (
              <li>No Users in Room</li>
            )}
          </ul>
        </div>
          <button className="bg-red-950 border-none text-white w-full p-2 rounded-md hover:bg-red-700" onClick={()=>{setDelete(true)}}>Delete Room</button>
      </div>
    </div>
      <div className="absolute top-0 left-0">
        {DeleteRoom && <ConfirmDelete Delete = {{setDelete}} deleteId = {{Current}}/>}
      </div>
    </>
  );
}
