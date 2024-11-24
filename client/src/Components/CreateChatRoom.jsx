import React, { useState } from "react";
import { motion } from "framer-motion";

export default function CreateChatRoom({CombinedState}) {

  const [setCreateShow, setroomsCreated] = CombinedState;
  const [formdata, setformdata] = useState({
    Name: "",
    Description: "",
  });

  const [Errormsg, setErrormsg] = useState({
    message: "",
    status: false,
    success: null, 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/room/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });

      const result = await response.json(); 

      if (response.ok) {
        setErrormsg({
          message: result.message,
          status: true,
          success: true,
        });
        setroomsCreated(true);
      } else {
        setErrormsg({
          message: result.message || "An error occurred",
          status: true,
          success: false,
        });
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setErrormsg({
        message: "Unable to connect to the server. Please try again.",
        status: true,
        success: false,
      });
    } finally {
      setformdata({
        Name: "",
        Description: "",
      });

      setTimeout(() => {
        setErrormsg({
          message: "",
          status: false,
          success: null,
        });
      }, 5000);
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-600 bg-opacity-40">
    <motion.div className="w-[300px] 2xl:w-[400px] h-fit rounded-lg bg-white">
      <div className="bg-green-400 text-center rounded-t-lg p-3 w-full">
        <h1 className="font-semibold text-lg 2xl:text-xl">Create Chat Room</h1>
      </div>
      <form className="p-3 text-sm 2xl:text-lg" onSubmit={handleSubmit}>
        {Errormsg.status && (
          <div
            className={`${
              Errormsg.success ? "text-green-600" : "text-red-700"
            } pb-3`}
          >
            {Errormsg.message}
          </div>
        )}

        <div className="pb-2">
          <label htmlFor="Chatname">ChatRoom Name: </label>
          <input
            id="Chatname"
            className="border-b-[2px] w-full border-teal-950 py-1 pl-1 focus:outline-none"
            type="text"
            name="Name"
            value={formdata.Name}
            onChange={handleChange}
            placeholder="Enter Room Name.."
          />
        </div>
        <div className="pb-2">
          <label htmlFor="description">Description: </label>
          <input
            id="description"
            className="border-b-[2px] w-full border-teal-950 py-1 pl-1 focus:outline-none"
            type="text"
            name="Description"
            value={formdata.Description}
            onChange={handleChange}
            placeholder="Enter Description.."
          />
        </div>
        <div className="flex flex-col">
          <button
            type="submit"
            className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          >
            Create Chat Room
          </button>
          <button onClick={()=>{setCreateShow(false)}} className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
            Cancel
          </button>
        </div>
      </form>
    </motion.div>
    </div>
  );
}
