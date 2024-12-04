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

mongoose.connect(process.env.MONGOString)
    .then(() => console.log("Connected to MongoDB successfully!"))
    .catch((err) => console.error("Error connecting to MongoDB:", err));
    
app.use("/server/room",RoomRouter);
app.use("/server/user",CreateUser);