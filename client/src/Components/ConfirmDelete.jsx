import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ConfirmDelete({ Delete, deleteId }) {
  const { setDelete } = Delete;
  const { Current } = deleteId;
  const navigate = useNavigate();

    const deleteRoom = async () => {
      try {
        const response = await fetch(
          `/server/room/deleteroom/${Current}`,
          { method: "DELETE" }
        );
        if(!response.ok){
            console.log("Not deleted");
        }
        setdel(false);
        navigate("/");

      } catch (err) {
            console.log(err)
      }
    };

  return (
    <div className="w-screen h-screen bg-opacity-50 flex justify-center items-center bg-gray-600">
      <div className="bg-teal-500 w-[400px] flex flex-col gap-2 py-4 px-7 rounded-md">
        Are You Sure?.. Delete this Room.
        <div className="flex gap-4">
          <button className="bg-red-950 hover:bg-red-700 p-4 rounded-md text-white w-full" onClick={deleteRoom}>
            Delete
          </button>
          <button
            className="bg-gray-700 p-4 text-white rounded-md w-full"
            onClick={() => {
              setDelete(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
