import React, { useEffect, useState } from "react";
import axios from "axios";

function RandomBackground() {
  const [backgroundUrl, setBackgroundUrl] = useState("");

  useEffect(() => {
    const fetchBackground = async () => {
      try {
        const response = await axios.get(
          "http://localhost:7000/api/backgrounds/random"
        );
        setBackgroundUrl(response.data.background);
      } catch (error) {
        console.error("Error fetching random background:", error);
      }
    };

    fetchBackground();
  }, []);

  if (!backgroundUrl) return <div>Loading...</div>;

  return (
    <div
      style={{
        backgroundImage: `url(http://localhost:7000${backgroundUrl})`,
        backgroundSize: "cover", // Ensures the background image covers the entire area
        backgroundRepeat: "no-repeat", // Prevents the image from repeating
        backgroundPosition: "center center", // Centers the background image
        height: "100vh", // Sets the height to 100% of the viewport height
        width: "100vw", // Sets the width to 100% of the viewport width
        overflow: "hidden", // Prevents scrolling if the image overflows
      }}
    >
      <h1 style={{ color: "white", textAlign: "center", paddingTop: "20px" }}>
        Random Background
      </h1>
    </div>
  );
}

export default RandomBackground;
