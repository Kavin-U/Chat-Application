import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const PORT = 5000;
const app = express();

mongoose.connect(process.env.MONGOString)
    .then(() => console.log("Connected to MongoDB successfully!"))
    .catch((err) => console.error("Error connecting to MongoDB:", err));
  

app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`);
})