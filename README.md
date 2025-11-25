### 🖥️ PaymentFlow Demo – Backend
The backend of PaymentFlow Demo handles all server-side payment logic using Stripe, PayPal, and Mercado Pago.
It exposes secure API endpoints to create payment intents, generate orders, capture transactions, and process webhooks from the providers.

This project follows a modular and scalable structure based on controllers, services, and routes, ensuring clean abstraction and professional code organization.

---

### 📌 Description

This backend serves as a payment orchestration layer for the PaymentFlow Demo frontend.
Its main responsibilities include:

- Creating PaymentIntents (Stripe)

- Creating and capturing PayPal orders

- Generating Mercado Pago payment sessions (educational flow)

- Handling webhook notifications

- Providing a clean and professional API structure

- Logging and separating payment logic per provider

The architecture ensures that each payment gateway has its own controller and service, keeping the business logic isolated and easy to maintain.

---

### 🚀 Technologies Used

- Node.js + Express

- MongoDB + Mongoose

- Stripe SDK

- PayPal REST integration

- Mercado Pago SDK

- CORS

- dotenv

- Axios

- Modular routing architecture

---

### 📦 API Endpoints

### 🔵 **Stripe Endpoints**

| Method | Endpoint | Description |
|--------|----------|-------------|
| **POST** | `/payments/stripe/create-payment-intent` | Creates a PaymentIntent and returns a `client_secret` for processing card payments from the frontend. |

---

### 🟡 **PayPal Endpoints**

| Method | Endpoint | Description |
|--------|----------|-------------|
| **POST** | `/paypal/create-order` | Generates a PayPal order and returns the `orderId`. |
| **POST** | `/paypal/capture-order` | Captures an approved PayPal order and finalizes the payment. |

---

### 🟣 **Mercado Pago Endpoints**

| Method | Endpoint | Description |
|--------|----------|-------------|
| **POST** | `/payments/mercadopago/session` | Creates a Mercado Pago checkout session (used as an educational flow). |

---

### 🟠 **Webhook Endpoints**

| Method | Endpoint | Description |
|--------|----------|-------------|
| **POST** | `/webhook/mercadopago` | Receives Mercado Pago notifications and updates the transaction status. |

---

## 💡 Key Features

- Payment logic isolated by controllers and services

- Full Stripe + PayPal functional payment flow

- Mercado Pago integration (non-production) for learning purposes

- Webhook handling with clean architecture

- Front-ready API with predictable responses

- Professional file structure for readability and scalability

- Environment-based configuration (dotenv)

---

## 📁 Project Structure

```js
/config
    connectDB.js

/controllers
    paymentController.js
    paypalController.js
    mercadoPagoController.js
    webhookController.js

/services
    stripeService.js
    paypalService.js
    mercadoPagoService.js

/routers
    paymentRoutes.js
    paypalRoutes.js
    webhookRoutes.js

server.js
```
---
## 📬 Contact

- LinkedIn: [Facundo Robert](https://www.linkedin.com/in/robertfacundodev/)
- Portfolio: [My Portfolio](https://facundorobert.vercel.app/) 
- Email: robertf.coder@gmail.com