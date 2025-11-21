import axios from 'axios';
import { paypalConfig } from '../config/payPal.js';

const { clientId, secret, apiUrl } = paypalConfig;

export const generateAccessToken = async () => {
    const auth = Buffer.from(`${clientId}:${secret}`).toString('base64');

    const response = await axios({
        url: `${apiUrl}/v1/oauth2/token`,
        method: 'post',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": `Basic ${auth}`
        },
        data: 'grant_type=client_credentials'
    });

    return response.data.access_token;
}

export const createOrder = async (amount) => {
    const access_token = await generateAccessToken();

    const order = await axios({
        url: `${apiUrl}/v2/checkout/orders`,
        method: 'post',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${access_token}`
        },
        data: {
            intent: 'CAPTURE',
            purchase_units: [
                {
                    amount: {
                        currency_code: 'USD',
                        value: amount
                    }
                }
            ]
        }
    })

    return order.data;
};


export const captureOrder = async (orderId) => {
    const accessToken = await generateAccessToken();

    const capture = await axios({
        url: `${apiUrl}/v2/checkout/orders/${orderId}/capture`,
        method: "post",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`
        }
    });

    return capture.data;
}