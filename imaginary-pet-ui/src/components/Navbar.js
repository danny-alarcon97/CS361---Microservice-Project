// import React from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav className="main-nav">
//       <ul className="main-nav-list">
//         <li>
//           <Link className="main-nav-link nav-cta" to="/">
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link className="main-nav-link" to="/create">
//             Create
//           </Link>
//         </li>
//         <li>
//           <Link className="main-nav-link" to="/pets">
//             Pets
//           </Link>
//         </li>
//         <li>
//           <Link className="main-nav-link" to="/random-background">
//             Random Pet Idea
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Navbar() {
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const fetchMusic = async () => {
      try {
        const response = await axios.get("http://localhost:8002/api/music");
        console.log("Music URL fetched:", response.data.url);
        const audioElement = new Audio(response.data.url);
        setAudio(audioElement);
      } catch (error) {
        console.error("Error fetching music URL:", error);
      }
    };

    fetchMusic();
  }, []);

  const handleTogglePlayPause = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <nav className="main-nav">
      <ul className="main-nav-list">
        <li>
          <Link className="main-nav-link nav-cta" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="main-nav-link" to="/create">
            Create
          </Link>
        </li>
        <li>
          <Link className="main-nav-link" to="/pets">
            Pets
          </Link>
        </li>
        <li>
          <Link className="main-nav-link" to="/random-background">
            Random Pet Idea
          </Link>
        </li>
        <li>
          <button onClick={handleTogglePlayPause} className="main-nav-link">
            {isPlaying ? "Pause Music" : "Play Music"}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
