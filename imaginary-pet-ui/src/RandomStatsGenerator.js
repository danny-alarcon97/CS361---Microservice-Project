// RandomStatsGenerator.js
import React, { useState } from "react";

const RandomStatsGenerator = ({ onGenerate }) => {
  const [stats, setStats] = useState({
    strength: 0,
    speed: 0,
    intelligence: 0,
    dexterity: 0,
  });

  const generateStats = () => {
    // Generate random stats (example logic)
    const randomStats = {
      strength: Math.floor(Math.random() * 100) + 1,
      speed: Math.floor(Math.random() * 100) + 1,
      intelligence: Math.floor(Math.random() * 100) + 1,
      dexterity: Math.floor(Math.random() * 100) + 1,
    };
    setStats(randomStats);
    onGenerate(randomStats);
  };

  return (
    <div>
      <h2>Random Stats Generator</h2>
      <button onClick={generateStats}>Generate Random Stats</button>
    </div>
  );
};

export default RandomStatsGenerator;
