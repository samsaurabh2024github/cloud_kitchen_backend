🍽️ Cloud Kitchen Management System (MERN Stack)

A full-stack Cloud Kitchen platform built using the MERN stack, enabling customers to place food orders, make online payments, and allowing admins to manage food items, categories, orders, and payments securely.

🚀 Tech Stack
Frontend

React.js

Tailwind CSS

Redux Toolkit

Axios

Backend

Node.js

Express.js

MongoDB (Mongoose)

JWT Authentication

Payments

Razorpay (Test Mode)

Secure payment verification using HMAC SHA256

🔐 Features
👤 Authentication & Authorization

User registration & login

JWT-based authentication

Role-based access (Admin / Customer)

🍔 Food & Category Management (Admin)

Create, update, delete food items

Create and manage food categories

Toggle food availability

🛒 Order Management

Customers can place food orders

View order history

Order status tracking:

Placed

Preparing

Ready

Delivered

Cancelled

💳 Payment Integration (Razorpay)

Create Razorpay order from backend

Secure payment verification using Razorpay signature

Payment status handling:

Pending

Paid

Failed

Admin-controlled payment flow

Note: Refund logic is designed and partially implemented. Refunds are currently handled manually via Razorpay dashboard, which is common in early-stage systems.

🛡️ Security

Password hashing using bcrypt

Protected routes using middleware

Admin-only access for sensitive operations

Secure environment variables

🧪 API Testing

All APIs tested using Postman

Payment flow tested using Razorpay Test Mode

📂 Folder Structure (Backend)
cloud-kitchen-backend/
│── config/
│   └── db.js
│── controllers/
│── middleware/
│── models/
│── routes/
│── uploads/
│── server.js
│── .env

⚙️ Environment Variables
PORT=5004
MONGO_URI=mongodb://127.0.0.1:27017/cloud_kitchen
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=rzp_test_xxxxx
RAZORPAY_KEY_SECRET=xxxxx

▶️ How to Run Locally
git clone <repo-url>
cd cloud-kitchen-backend
npm install
npm run dev

📌 Future Improvements

Razorpay webhooks

Automatic refunds on cancellation

Delivery partner module

Admin dashboard UI

Order analytics

👨‍💻 Author

Saurabh Kumar
MERN Stack Developer (1 Year Experience)
