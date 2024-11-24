import Room from '../Models/Room.model.js';

const createRoom = async (req, res) => {
  const { Name, Description } = req.body;

  try {
    const roomExist = await Room.findOne({ Name });

    if (roomExist) {
      return res.status(400).json({ message: "Chat Room Already Exists" });
    }

    const room = new Room({ Name, Description });
    await room.save();
    console.log("Chat Room Created", room);

    res.status(201).json({ message: "Room created successfully" });
  } catch (err) {
    console.error("Error creating room:", err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default createRoom;
