import mongoose from "mongoose";

const Roomschema = mongoose.Schema({
    Name:{
        type:String,
        require:true,
        unique: true
    },
    Description:{
        type:String
    },
    users:[{
        type: mongoose.Schema.Types.ObjectId, ref:"User"
    }],
    createdAt : {type:Date, default: Date.now},
})


const Room = mongoose.model("Room", Roomschema);
module.exports = Room;