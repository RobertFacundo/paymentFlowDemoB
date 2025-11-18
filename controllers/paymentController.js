import { createStripePaymentIntent } from "../services/stripeServices.js";

export const createPaymentIntent = async (req, res) => {
    try {
        const { amount, currency, description } = req.body;

        console.log("🟦 [BACKEND] Creating Stripe PaymentIntent...");

        const paymentIntent = await createStripePaymentIntent({
            amount: Math.round(amount * 100),
            currency,
            description,
        });

        console.log("🟩 [BACKEND] PaymentIntent created:", paymentIntent.id);
        console.log("🟩 [BACKEND] Client Secret:", paymentIntent.client_secret)

        return res.status(201).json({
            clientSecret: paymentIntent.client_secret,
        })
    } catch (error) {
        console.error("❌ Stripe error:", error);

        return res.status(500).json({
            message: 'Stripe payment creation failed',
            error: error.message
        });
    }
};