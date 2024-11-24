import mongoose, { model } from "mongoose";

const userSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },
    createdAt: {
        type:Date,
        default:Date.now
    },
});

const User = mongoose.model("User", userSchema);

export default User;
