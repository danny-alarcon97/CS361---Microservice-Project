import React from "react";

const TestAudio = () => {
  const musicUrl =
    "https://danny-alarcon97.github.io/CS361-Background-Music/Frozen%20Star.mp3";

  return (
    <div>
      <audio controls autoPlay loop>
        <source src={musicUrl} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default TestAudio;
