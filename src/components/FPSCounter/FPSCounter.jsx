import React, { useEffect, useState } from "react";

function FPSCounter() {
  const [fps, setFps] = useState(0);
  let frameCount = 0;
  let lastUpdateTime = Date.now();
  let fpsInterval = 1000;

  useEffect(() => {
    const animate = () => {
      // Count frames
      frameCount++;

      // Get the current timestamp
      const now = Date.now();

      // If a second or more has passed
      if (now - lastUpdateTime >= fpsInterval) {
        // Calculate the FPS as the number of frames divided by the time since the last update in seconds
        setFps((frameCount / (now - lastUpdateTime)) * 1000);

        // Reset the frame count
        frameCount = 0;

        // Set the last update time to the current time
        lastUpdateTime = now;
      }

      // Request the next frame
      requestAnimationFrame(animate);
    };

    // Start the loop
    animate();
  }, []);

  return (
    <div
      style={{
        background: "black",
        color: "white",
        padding: "5px 10px",
        fontSize: "12px",
      }}
    >
      FPS: {Math.round(fps)}
    </div>
  );
}

export default FPSCounter;
