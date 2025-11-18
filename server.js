import express from 'express';
import cors from 'cors'
import connectDB from './config/connectDB.js';
import paymentRoutes from './routers/paymentRoutes.js';

const PORT = process.env.PORT || 3000;

const app = express();

connectDB()

app.use(express.json());
app.use(cors());

app.use('/payments', paymentRoutes);

app.listen(PORT, () => {
    console.log(`Backend running on port => ${PORT}`)
})