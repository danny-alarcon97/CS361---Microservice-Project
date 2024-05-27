const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const microserviceRoutes = require("./routes/microserviceRoutes");

const app = express();

dotenv.config();

app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.use("/api/microservice-pet", microserviceRoutes);
