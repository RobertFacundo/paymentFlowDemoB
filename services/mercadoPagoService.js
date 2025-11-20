import { Preference } from 'mercadopago';
import { mpClient } from '../config/mercadoPago.js';

export const createMercadoPagoPreferenceBackend = async ({ product, amount, currency }) => {
    try {
        const preference = new Preference(mpClient);

        const result = await preference.create({
            body: {
                items: [
                    {
                        title: product,
                        quantity: 1,
                        unit_price: Number(amount),
                        currency_id: currency,
                    }
                ],
                back_urls: {
                    success: "http://localhost:5173/",
                    failure: "http://localhost:5173/",
                    pending: "http://localhost:5173/"
                },
                notification_url: "http://localhost:3000/webhook/mercadopago"
            }
        });

        return {
            preferenceId: result.id,
            checkoutUrl: result.init_point
        }
    } catch (error) {
        console.error("❌ Mercado Pago Service Error:", error);
        throw new Error(error.message || "Failed to create Mercado Pago preference");
    }
};

