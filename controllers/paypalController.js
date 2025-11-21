import { createOrder, captureOrder } from "../services/payPalService.js";

export const createPayPalOrder = async (req, res) => {
    try {
        const { amount } = req.body;
        const order = await createOrder(amount);

        res.json({ id: order.id });
    } catch (error) {
        console.error('PayPal create error:', error.response?.data || error);

        res.status(500).json({ error: 'Error creating PayPal order' });
    }
};

export const capturePayPalOrder = async (req, res) => {
    try {
        const { orderId } = req.body;
        const capture = await captureOrder(orderId);

        res.json(capture);
    } catch (error) {
        console.error('PayPal capture error:', error.response?.data || error);
        res.status(500).json({ error: 'Error capturing PayPal order' });
    }
}