import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import RoomRouter from './Routes/Room.route.js';
import CreateUser from './Routes/User.route.js';

dotenv.config();


const PORT = 5000;
const app = express();
app.use(cors());
app.use(express.json());

app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`);
})

mongoose.connect("mongodb+srv://ukavin7:kavinDAE%40123@chat-project-cluster.8cmdj.mongodb.net/?retryWrites=true&w=majority&appName=Chat-Project-cluster")
    .then(() => console.log("Connected to MongoDB successfully!"))
    .catch((err) => console.error("Error connecting to MongoDB:", err));
    
app.use("/room",RoomRouter);
app.use("/user",CreateUser);