import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";

function RandomBackground() {
  const [backgroundUrl, setBackgroundUrl] = useState("");
  const [imageData, setImageData] = useState(null);
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

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    await fetchBackground();
    await generateImage();
  }, [fetchBackground, generateImage]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleRefresh = () => {
    fetchData();
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div
      style={{
        backgroundImage: `url(http://localhost:7000${backgroundUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <h1 style={{ color: "white", textAlign: "center", paddingTop: "20px" }}>
        Random Background
      </h1>
      {imageData && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <h3 style={{ color: "red", textAlign: "center" }}>
            {imageData.entity_type}
          </h3>
          <img
            src={`http://localhost:2024/images/${imageData.image_path}`}
            alt="Random Pet"
            style={{
              maxWidth: "300px",
              height: "auto",
              border: "2px solid white",
              borderRadius: "10px",
            }}
          />
        </div>
      )}
      <button
        onClick={handleRefresh}
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Refresh Page
      </button>
    </div>
  );
}

export default RandomBackground;
