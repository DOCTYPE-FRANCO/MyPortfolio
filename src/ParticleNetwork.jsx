import { useEffect, useRef } from "react";

export default function ParticleNetworkBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const c = canvas.getContext("2d");
    let w = (canvas.width = innerWidth);
    let h = (canvas.height = innerHeight);

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 1,
      vy: (Math.random() - 0.5) * 1,
    }));

    function draw() {
      c.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        c.fillRect(p.x, p.y, 2, 2);

        particles.forEach((p2) => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = dx * dx + dy * dy;
          if (dist < 14000) {
            c.strokeStyle = `rgba(255,255,255,0.07)`;
            c.beginPath();
            c.moveTo(p.x, p.y);
            c.lineTo(p2.x, p2.y);
            c.stroke();
          }
        });
      });
      requestAnimationFrame(draw);
    }
    draw();
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10" />;
}
