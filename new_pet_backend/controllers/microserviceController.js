const axios = require("axios");

const generateRandomPetImage = async (req, res) => {
  try {
    const imageResponse = await axios.post(
      "http://127.0.0.1:2024/generateRandomPet",
      {},
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Image response data:", imageResponse.data);

    if (imageResponse.data.image_path) {
      // Modify the image path to use the new endpoint
      const modifiedData = {
        ...imageResponse.data,
        image_path: imageResponse.data.image_path,
      };

      res.status(200).json(modifiedData);
    } else {
      res.status(500).json({ error: "Image download failed" });
    }
  } catch (error) {
    console.error("Error generating pet image:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  generateRandomPetImage,
};
