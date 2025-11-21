import express from 'express';
import cors from 'cors'
import connectDB from './config/connectDB.js';
import paymentRoutes from './routers/paymentRoutes.js';
import webhookRoutes from './routers/webhookRoutes.js';
import paypalRoutes from './routers/paypalRoutes.js'

const PORT = process.env.PORT || 3000;

const app = express();

connectDB()

app.use(express.json());
app.use(cors());

app.use('/payments', paymentRoutes);
app.use('/webhook', webhookRoutes);
app.use('/paypal', paypalRoutes);

app.listen(PORT, () => {
    console.log(`Backend running on port => ${PORT}`)
})