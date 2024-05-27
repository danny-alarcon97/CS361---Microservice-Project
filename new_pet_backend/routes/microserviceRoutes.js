const express = require("express");
const {
  generateRandomPetImage,
} = require("../controllers/microserviceController");

const router = express.Router();

router.post("/generateImage", generateRandomPetImage);

module.exports = router;
