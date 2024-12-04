import Room from "../Models/Room.model.js";

const deleteRoom = async (req,res)=>{
    const {roomId} = req.params;
    console.log(roomId);
    try{
        const response = await Room.findByIdAndDelete(roomId);

        if(!response){
            return res.status(404).json({ message: 'Chat Room not found' });
        }
        console.log("Chat Room Deleted!...", response)
        res.json({ message: 'Chat Room deleted successfully'});

    }catch(err){
        console.error('Error deleting Chatroom:', err);
        res.status(500).json({ message: 'Internal server error', err });
    }


}

export default deleteRoom;