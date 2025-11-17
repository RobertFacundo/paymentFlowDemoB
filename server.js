import express from 'express';
import cors from 'cors'
import connectDB from './config/connectDB.js';

const PORT = process.env.PORT || 3000;

const app = express();

connectDB()

app.use(express.json());
app.use(cors());

app.listen(PORT, ()=>{
    console.log(`Backend running on port => ${PORT}`)
})