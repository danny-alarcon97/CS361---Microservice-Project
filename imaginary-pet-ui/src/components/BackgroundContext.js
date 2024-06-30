import React, { createContext, useState, useContext, useCallback } from "react";
import axios from "axios";

const BackgroundContext = createContext();

export const BackgroundProvider = ({ children }) => {
  const [backgroundUrl, setBackgroundUrl] = useState("");
  const [imageData, setImageData] = useState(null);
  const [randomName, setRandomName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBackground = useCallback(async () => {
    try {
      const response = await axios.get(
        "http://localhost:7000/api/backgrounds/random"
      );
      setBackgroundUrl(response.data.background);
    } catch (error) {
      console.error("Error fetching random background:", error);
      setError("Error fetching random background");
      setLoading(false);
    }
  }, []);

  const generateImage = useCallback(async () => {
    try {
      const response = await axios.post(
        "http://localhost:2024/generateRandomPet",
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setImageData(response.data);
    } catch (err) {
      console.error("Error generating image:", err);
      setError("Error generating image");
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchRandomName = useCallback(async () => {
    try {
      const response = await axios.get(
        "http://localhost:8082/generateRandomName"
      );
      setRandomName(response.data.name);
    } catch (err) {
      console.error("Error fetching random name:", err);
      setError("Error fetching random name");
    }
  }, []);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    await fetchBackground();
    await generateImage();
    await fetchRandomName();
  }, [fetchBackground, generateImage, fetchRandomName]);

  return (
    <BackgroundContext.Provider
      value={{
        backgroundUrl,
        imageData,
        randomName,
        loading,
        error,
        fetchData,
      }}
    >
      {children}
    </BackgroundContext.Provider>
  );
};

export const useBackground = () => useContext(BackgroundContext);
