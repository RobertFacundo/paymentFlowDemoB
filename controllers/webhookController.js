import crypto from 'crypto'

export const mercadoPagoWebhook = async (req, res) => {
    try {
        const signature = req.headers['x-mp-signature'];
        const bodyString = JSON.stringify(req.body);
        const hash = crypto.createHmac('sha256', process.env.MP_WEBHOOK_RETURN_KEY)
            .update(bodyString)
            .digest('base64');

        if (hash !== signature) {
            console.log('⚠️ Webhook inválido');
            return res.status(400).send('Invalid signature');
        }

        const topic = req.query.topic || req.query.type;
        if(topic === ' payment'){
            const paymentId = req.query.id;
             console.log("💵 Payment aprobado:", paymentId);
        }

        return res.status(200).send('OK')
    } catch (error) {
        console.error('X Webhook error:', error);
        return res.status(500).send('error');
    }
}