import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ModifyChatRoom() {
  const params = useParams();
  const [currentRoom, setCurrentRoom] = useState(null);

  useEffect(() => {
    const Current = params.RoomName;
    console.log("RoomID from params:", Current);

    const fetchRoom = async () => {
      try {

        const bodyPayload = { RoomID: Current }; // Prepare payload
        console.log("Body Payload:", bodyPayload);

        const response = await fetch("http://localhost:5000/room/findactiveroom", {
          method: "POST",
          headers: {
            "Content-Type": "application/json", 
          },
          body: JSON.stringify(bodyPayload), 
        });

        if (!response.ok) {
          console.error("Failed to fetch room details. Status:", response.status);
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
    <div className="w-full flex justify-center items-center bg-teal-700 min-h-[472px]">
      <div className="w-[200px] h-[300px]">
        <div>{currentRoom.Name}</div>
        <div>{currentRoom.Description}</div>
        <ul>
          {currentRoom.users.length > 0
            ? currentRoom.users.map((user, index) => <li key={index}>{user}</li>)
            : <li>No Users in Room</li>}
        </ul>
      </div>
    </div>
  );
}
