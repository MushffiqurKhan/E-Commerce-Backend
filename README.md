# 🛍️ E-Commerce Backend API (Product Module)

Welcome to the **E-Commerce Backend API** — a backend solution focused on managing **Products** in an e-commerce platform. Built with **Node.js**, **Express**, and **MongoDB**, this project implements clean separation of concerns using **services** for logic and **controllers** for messaging and error handling.

---

## 🚀 Features

- 📦 **Product CRUD Operations**
- ⚙️ **Service Layer Architecture** for handling business logic
- 🧾 **Message & Error Handling** via Controllers
- 🛡️ Secured and Structured REST API

---

## 🧰 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**

---

## 📁 Folder Structure
ecommerce-backend/
│
├── config/ # MongoDB connection setup
├── controllers/ # Handles messages and error responses
├── middleware/ # Error handler, JWT middleware (if needed)
├── models/ # Mongoose schemas (Product)
├── routes/ # API route definitions
├── services/ # Business logic for each route
├── .env # Environment variables
├── server.js # Entry point
└── README.md # Project documentation

---

## 📌 Product API Endpoints

| Method | Endpoint        | Description           |
|--------|------------------|-----------------------|
| GET    | `/products`      | Get all products      |
| GET    | `/products/:id`  | Get product by ID     |
| POST   | `/products`      | Create new product    |
| PUT    | `/products/:id`  | Update product        |
| DELETE | `/products/:id`  | Delete product        |


## ⚙️ Setup Instructions

1. Clone the project  
2. Install dependencies  
3. Configure `.env` file  
4. Run the server using `npm start`

---

## 🧪 Example `.env` File

```env
PORT =6000
DB_URL="mongodb://127.0.0.1:27017/E-commerce"

---


