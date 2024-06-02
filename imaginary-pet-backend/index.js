import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import petRoutes from "./routes/petsRoute.js";

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Environment variables
const PORT = process.env.PORT || 8000;
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database connected successfully!");

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });

// Routes
app.use("/api/pet", petRoutes);

// Add a test route to verify the server is running
app.get("/", (req, res) => {
  res.send("API is working");
});
