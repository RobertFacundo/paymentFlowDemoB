import { stripe } from "../config/stripe.js";

export const createStripePaymentIntent = async ({ amount, currency, description }) => {
    return await stripe.paymentIntents.create({
        amount,
        currency,
        description,
        automatic_payment_methods: { enabled: true },
    });
};