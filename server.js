// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import connectDB from "./config/db.js";

// import authRoutes from "./routes/authRoutes.js";
// import foodRoutes from "./routes/foodRoutes.js";
// import orderRoutes from "./routes/orderRoutes.js";
// import categoryRoutes from "./routes/categoryRoutes.js";

// import paymentRoutes from "./routes/paymentRoutes.js";

// dotenv.config();
// connectDB();

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.use("/api/auth", authRoutes);
// app.use("/api/foods", foodRoutes);
// app.use("/api/orders", orderRoutes);
// app.use("/api/categories", categoryRoutes);

// app.use("/api/payment", paymentRoutes);

// app.get("/", (req, res) => {
//   res.send("Cloud Kitchen API running");
// });

// const PORT = process.env.PORT || 5004;
// app.listen(PORT, () =>
//   console.log(`Server running on port ${PORT}`)
// );


import dotenv from "dotenv";
dotenv.config(); // 👈 FIRST LINE

import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import foodRoutes from "./routes/foodRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/foods", foodRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/payment", paymentRoutes);

app.listen(process.env.PORT || 5004, () => {
  console.log("Server running");
});

