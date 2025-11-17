import express from 'express';
import cors from 'cors'
import connectDB from './config/connectDB.js';

const app = express();

connectDB()

app.use(express.json());
app.use(cors());

app.listen(3000, ()=>{
    console.log('backend running =>')
})