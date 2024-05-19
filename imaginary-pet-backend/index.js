import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import petRoutes from "./routes/petsRoute.js";

const app = express();

dotenv.config();

app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 8000;
const MONGOURI = process.env.MONGODB_URI;

mongoose
  .connect(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database connected Successfully!");
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.log(error));

app.use("/api/pet", petRoutes);
