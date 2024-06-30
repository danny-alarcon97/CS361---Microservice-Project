const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = 8002;

// Corrected music URL with raw file link
const musicUrl =
  "https://danny-alarcon97.github.io/CS361-Background-Music/Frozen%20Star.mp3";

app.get("/api/music", (req, res) => {
  res.json({ url: musicUrl });
});

app.listen(PORT, () => {
  console.log(`Music service is running on http://localhost:${PORT}`);
});
