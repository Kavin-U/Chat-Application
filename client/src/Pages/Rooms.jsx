import React, { useEffect } from "react";
import { Link, Outlet, useParams } from "react-router-dom";

export default function Rooms() {
  const params = useParams();

  const roomdetails = params.RoomId.split(",");

  useEffect(() => {
    console.log(params.RoomId);
  }, [params.RoomId]);

  return (
    <>
      <div className="flex flex-col w-full">
        <div className="w-full h-fit py-4 flex items-center px-5 bg-teal-950 capitalize">
          <Link to={`Edit/${roomdetails[1]}`}>
            <h1 className="text-white">{roomdetails[0]}</h1>
          </Link>
        </div>
        <div className="">
          <Outlet />
        </div>
      </div>
    </>
  );
}
