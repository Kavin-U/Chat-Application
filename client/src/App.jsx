import React from "react";
import ChatRoom from "./Components/ChatRoom";
import Navbar from "./Components/Navbar";
import { BrowserRouter, createBrowserRouter, Route, Routes } from "react-router-dom";
import Rooms from "./Pages/Rooms";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<ChatRoom/>}/>
          <Route path="/rooms/:RoomId" element={<Rooms/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// traditional Routing
