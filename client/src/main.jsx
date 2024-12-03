import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ChatRoom from "./Components/ChatRoom";
import Rooms from "./Pages/Rooms";
import Modifychatroon from "./Components/Modifychatroon";

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
            element : <Rooms/>,
            children:[{
              path:'Edit/:RoomName',
              element:<Modifychatroon/>
            },
            ]
          }
        ]
      },
    ],
  },

])


createRoot(document.getElementById("root")).render(<RouterProvider router={router}/>);


//Advanced Routing