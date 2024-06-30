import React, { useEffect, useState } from "react";
import axios from "axios";

const MusicPlayer = () => {
  const [musicUrl, setMusicUrl] = useState("");

  useEffect(() => {
    const fetchMusic = async () => {
      try {
        const response = await axios.get("http://localhost:8002/api/music");
        console.log("Music URL fetched:", response.data.url);
        setMusicUrl(response.data.url);
      } catch (error) {
        console.error("Error fetching music URL:", error);
      }
    };

    fetchMusic();
  }, []);

  return (
    <div>
      {musicUrl && (
        <audio controls autoPlay loop>
          <source src={musicUrl} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
};

export default MusicPlayer;
