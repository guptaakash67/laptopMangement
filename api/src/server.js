import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import helmet from "helmet";
import laptopRoutes from "./routes/laptopRoutes.js";
import employeeRoutes from "./routes/employeeRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
connectDB();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

// Root route
app.get("/", (req, res) => {
    res.send("Welcome to Laptop Lifecycle Management API");
});

app.use("/api/laptops", laptopRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.clear();
    console.log('🚀 Backend server is running successfully on port ' + PORT);
});
