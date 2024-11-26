import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Modifychatroon() {
  const params = useParams();
  const [currentRoom, setCurrentRoom] = useState(null);

  useEffect(() => {
    // console.log(params.RoomName)

    const Current = params.RoomName;
    console.log(Current);
    const fetchRooms = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/room/findactiveroom",
          {
            method: "POST",
            headers: {
              "Content-Type": "aplication/json",
            },
            body: JSON.stringify({ RoomName: Current }),
          }
        );
        if (response.ok) {
          const data = await response.json();
          console.log(data.currentroom);
          setCurrentRoom(data.currentroom);
        } else {
          console.error("Failed to fetch rooms");
        }
      } catch (error) {
        console.error("Error fetching rooms:", error);
      } finally {
        // setLoading(false);
        console.log(currentRoom.Name);
      }
    };

    fetchRooms();
  }, []);


  if (!currentRoom) {
    return (
      <div className="w-full bg-teal-700 min-h-[472px] flex items-center justify-center">
        <p>Loading room details...</p>
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center items-center bg-teal-700 min-h-[472px]">
      <div className="w-[200px] h-[300px]">
      <div>{currentRoom.Name }</div>
      <div>{currentRoom.Description}</div>
      <ul>{currentRoom.users.length >0 ? currentRoom.users.map((user)=>{return <li>{user}</li>}): <li>No Users in Room</li> }</ul>
      </div>
    </div>
  );
}