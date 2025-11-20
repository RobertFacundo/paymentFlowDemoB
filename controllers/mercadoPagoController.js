import { createMercadoPagoPreferenceBackend } from "../services/mercadoPagoService.js";

export const createMercadoPagoSession = async (req, res) => {
    try {
        const { product, amount, currency } = req.body;
        console.log("🟦 [BACKEND] Creating Mercado Pago preference...");

        const { preferenceId, checkoutUrl } = await createMercadoPagoPreferenceBackend({
            product,
            amount,
            currency
        });

        console.log("🟩 [BACKEND] Mercado Pago preference created:", preferenceId);
        console.log("🟩 [BACKEND] Checkout URL:", checkoutUrl);

        return res.status(201).json({ preferenceId, checkoutUrl });
    } catch (error) {
        console.error("❌ Mercado Pago error:", error);

        return res.status(500).json({
            message: 'Mercado Pago preference creation failed',
            error: error.message
        })
    }
}
