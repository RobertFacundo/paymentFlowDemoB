import {MercadoPagoConfig} from 'mercadopago';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.MP_ACCESS_TOKEN) {
    throw new Error('MP_ACCESS_TOKEN missing in .env');
}

export const mpClient = new MercadoPagoConfig({
    accessToken: process.env.MP_ACCESS_TOKEN,
})