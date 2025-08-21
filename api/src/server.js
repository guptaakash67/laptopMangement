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

// Basic middleware
app.use(express.json());
app.use(cors());
app.use(helmet());

// Root route for API health check
app.get("/", (req, res) => {
    res.json({ message: "API is running" });
});

// Root route
app.get("/", (req, res) => {
    res.send("Welcome to Laptop Lifecycle Management API");
});

// API routes
const apiRouter = express.Router();
apiRouter.use("/laptops", laptopRoutes);
apiRouter.use("/employees", employeeRoutes);
apiRouter.use("/auth", authRoutes);

// Mount all routes under /api
app.use("/api", apiRouter);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try {
        await app.listen(PORT);
        console.clear();
        console.log(`🚀 Backend server is running successfully on port ${PORT}`);
    } catch (error) {
        if (error.code === 'EADDRINUSE') {
            console.log(`⚠️ Port ${PORT} is busy, trying ${PORT + 1}...`);
            await app.listen(PORT + 1);
            console.log(`🚀 Backend server is running successfully on port ${PORT + 1}`);
        } else {
            console.error('Failed to start server:', error);
            process.exit(1);
        }
    }
};

startServer();

export default app;
