import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const URI_BACKEND = process.env.MONGO_URI

const connectDB = async () => {
    try {
        if (!URI_BACKEND) {
            throw new Error('URI_BACKEND not available at the moment')
        }
        await mongoose.connect(URI_BACKEND);
        console.log('BACKEND CONNECTED!')
    } catch (error) {
        console.error(error.message);
        process.exit(1)
    }
};

export default connectDB;