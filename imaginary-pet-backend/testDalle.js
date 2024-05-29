import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const fetchImageFromDalle = async (description) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/images/generations",
      {
        model: "dall-e-3",
        prompt: description,
        n: 1,
        size: "1024x1024",
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.DALLE_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Image URL:", response.data.data[0].url);
  } catch (error) {
    console.error(
      "Error fetching image from DALL-E:",
      error.response ? error.response.data : error.message
    );
  }
};

const description = "A small, fiery dragon with green scales";
fetchImageFromDalle(description);
