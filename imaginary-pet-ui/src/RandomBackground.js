import React, { useEffect, useContext } from "react";
import { useBackground } from "./BackgroundContext";

function RandomBackground() {
  const { backgroundUrl, imageData, randomName, loading, error, fetchData } =
    useBackground();

  useEffect(() => {
    if (!backgroundUrl && !imageData && !randomName) {
      fetchData();
    }
  }, [backgroundUrl, imageData, randomName, fetchData]);

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
          <h3 style={{ color: "red", textAlign: "center" }}>{randomName}</h3>
          <h4 style={{ color: "white", textAlign: "center" }}>
            {imageData.entity_type}
          </h4>
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
