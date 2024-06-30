import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8082;

app.use(cors());

const names = [
  "Fluffy",
  "Buddy",
  "Mittens",
  "Shadow",
  "Tiger",
  "Max",
  "Bella",
  "Charlie",
  "Lucy",
  "Daisy",
  "Rocky",
  "Molly",
  "Coco",
  "Bailey",
  "Luna",
  "Lola",
  "Sadie",
  "Sophie",
  "Chloe",
  "Maggie",
  "Chloe",
  "Daniel",
  "Dexter",
];

app.get("/generateRandomName", (req, res) => {
  const randomIndex = Math.floor(Math.random() * names.length);
  const randomName = names[randomIndex];
  res.json({ name: randomName });
});

app.listen(PORT, () => {
  console.log(`Random Name Service is running on http://localhost:${PORT}`);
});
