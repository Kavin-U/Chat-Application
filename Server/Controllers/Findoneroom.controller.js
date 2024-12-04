import Rooms from "../Models/Room.model.js";

const findActiveRoom = async (req, res) => {
    const {RoomID} = req.body;
    // console.log(RoomID);
    const currentroom = await Rooms.findById(RoomID);
    try {
        if (currentroom) {
            // console.log(currentroom);
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