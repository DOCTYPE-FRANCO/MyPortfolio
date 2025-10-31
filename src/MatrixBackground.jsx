import React, { useEffect } from "react";

const MatrixBackground = () => {
  useEffect(() => {
    const canvas = document.getElementById("matrixCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const characters = "01";
    const charArray = characters.split("");
    const fontSize = 14;
    const columns = canvas.width / fontSize;

    const drops = new Array(Math.floor(columns)).fill(1);

    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0000ff";
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 35);

    return () => clearInterval(interval);
  }, []);

  return (
    <canvas
      id="matrixCanvas"
      className="fixed top-0 left-0 w-full h-full -z-10"
    ></canvas>
  );
};

export default MatrixBackground;
