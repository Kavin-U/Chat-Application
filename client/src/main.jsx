import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ChatRoom from "./Components/ChatRoom";
import Rooms from "./Pages/Rooms";

const router = createBrowserRouter([
  {
    path:'/',
    element:<Navbar/>,
    children:[
      {
        path:'/',
        element:<ChatRoom/>,
        children:[
          {
            path:'rooms/:RoomId',
            element : <Rooms/>
          }
        ]
      },
    ],
  },

])


createRoot(document.getElementById("root")).render(<RouterProvider router={router}/>);


//Advanced Routing