import mongoose from "mongoose";
import Rooms from "../Models/Room.model.js";



const findActiveRoom = async (req, res) => {
    console.log(req.body.RoomName);
    const currentroom = await Rooms.findOne(req.body);
    try {
        if (currentroom) {
            console.log(currentroom);
            res.json({ currentroom });
        }
        else {
            res.status(400).json({ message: "Room does not exist" });
        }
    }catch(err){
        console.log(err);
    }
}

export default findActiveRoom;