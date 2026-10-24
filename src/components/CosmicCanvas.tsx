import React, { useEffect, useRef } from 'react';

interface CosmicCanvasProps {
  isDark: boolean;
}

export const CosmicCanvas: React.FC<CosmicCanvasProps> = ({ isDark }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Create subtle drifting stars/particles
    const starCount = Math.min(Math.floor((width * height) / 14000), 75);
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.6 + 0.4,
      speedX: (Math.random() - 0.5) * 0.15,
      speedY: -Math.random() * 0.2 - 0.05,
      opacity: Math.random() * 0.6 + 0.2,
      pulseSpeed: Math.random() * 0.02 + 0.005,
    }));

    let pulse = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      pulse += 0.015;

      // Draw subtle stars
      stars.forEach((star) => {
        star.x += star.speedX;
        star.y += star.speedY;

        if (star.y < 0) star.y = height;
        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;

        const currentOpacity =
          star.opacity * (0.7 + 0.3 * Math.sin(pulse * star.pulseSpeed * 100));

        ctx.fillStyle = isDark
          ? `rgba(186, 210, 255, ${currentOpacity})`
          : `rgba(59, 130, 246, ${currentOpacity * 0.5})`;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-1000"
      style={{ opacity: isDark ? 0.85 : 0.4 }}
    />
  );
};
