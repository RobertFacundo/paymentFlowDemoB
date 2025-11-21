import dotenv from 'dotenv';

dotenv.config();

if (!process.env.PAYPAL_CLIENT_ID) {
    throw new Error('PAUPAL_CLIENT_ID missing in .env');
}

if (!process.env.PAYPAL_SECRET) {
    throw new Error('PAUPAL_CLIENT_ID missing in .env');
}
if (!process.env.PAYPAL_API) {
    throw new Error('PAUPAL_CLIENT_ID missing in .env');
}

export const paypalConfig = {
    clientId: process.env.PAYPAL_CLIENT_ID,
    secret: process.env.PAYPAL_SECRET,
    apiUrl: process.env.PAYPAL_API
};