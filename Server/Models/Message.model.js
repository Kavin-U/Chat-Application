import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    room:{
        type: mongoose.Schema.Types.ObjectId, ref:"Room",
        required: true
    },
    sender:{
        type: mongoose.Schema.Types.ObjectId, ref:"User",
        required:true,
    },
    content:{
        type:String, required:true,
    },
    createdAt:{
        type:Date , default: Date.now
    },
});


const Message = mongoose.model("Message" , messageSchema);

module.exports = Message;