import React, { useState } from "react";

function PinkSquare() {
  const [isHovered, setHovered] = useState(false);
  return (
    <div
      style={{
        position: "fixed",
        right: 32,
        bottom: 32,
        width: 32,
        height: 32,
        backgroundColor: isHovered ? "#f09" : "transparent",
        borderRadius: 4,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      title={'"Put hot pink in there somewhere" \u2014Philip'}
    />
  );
}

export default PinkSquare;
