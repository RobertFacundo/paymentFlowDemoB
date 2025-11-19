import express from 'express';
import { createPaymentIntent } from '../controllers/paymentController.js';
import { createMercadoPagoSession } from '../controllers/mercadoPagoController.js';

const router = express.Router();

router.post('/stripe/create-payment-intent', createPaymentIntent);
router.post('/mercadopago/session', createMercadoPagoSession);

export default router;