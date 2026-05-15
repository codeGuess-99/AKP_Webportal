"use client";
import { useEffect, useRef } from "react";

export default function ContactBackgroundFX() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const isMobile = window.innerWidth < 768;

      const mainCount = isMobile ? 30 : 90;
      const microCount = isMobile ? 20 : 60;

      // Generate Main Flat Dots
      for (let i = 0; i < mainCount; i++) {
        // Flat, uniform sizes make them look like distinct UI dots rather than dust grains
        const size = i % 3 === 0 ? 3 : 2;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size,
          baseOpacity: 0.3 + Math.random() * 0.4,
          angle: Math.random() * Math.PI * 2,
          speed: 0.1 + Math.random() * 0.2, // Drastically slowed down to avoid trailing streaks
          twinkleSpeed: 0.01 + Math.random() * 0.015,
          twinklePhase: Math.random() * Math.PI,
        });
      }

      // Generate Micro Flat Dots
      for (let i = 0; i < microCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: 1, // Ultra crisp single-pixel dots
          baseOpacity: 0.15 + Math.random() * 0.25,
          angle: Math.random() * Math.PI * 2,
          speed: 0.05 + Math.random() * 0.1,
          twinkleSpeed: 0.015 + Math.random() * 0.02,
          twinklePhase: Math.random() * Math.PI,
        });
      }
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const animate = () => {
      // Erases the canvas completely every frame so no tail artifact is left behind
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Linear float distribution
        p.x += Math.cos(p.angle) * p.speed;
        p.y += Math.sin(p.angle) * p.speed;

        // Screen boundary safety wrap
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Smooth Opacity Twinkle
        p.twinklePhase += p.twinkleSpeed;
        const twinkle = 0.5 + Math.sin(p.twinklePhase) * 0.5;
        ctx.globalAlpha = Math.max(0.1, Math.min(1, p.baseOpacity * twinkle));
        ctx.fillStyle = "#ffffff";

        // CRITICAL FIX: Math.floor() removes subpixel rendering blur that elongates shapes
        const crispX = Math.floor(p.x);
        const crispY = Math.floor(p.y);

        ctx.beginPath();
        ctx.arc(crispX, crispY, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-[#000006]">
      {/* Structural layout background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(69,193,244,0.1),transparent_30%),linear-gradient(180deg,rgba(0,0,6,0)_0%,rgba(1,8,30,0.55)_48%,rgba(0,0,6,0)_100%)] z-0" />

      {/* Background layout geometric decorative clip-paths */}
      <div className="absolute left-[-18%] top-[10%] h-20 w-[76%] -rotate-10 opacity-[0.14] z-0">
        <div className="h-full w-full bg-[linear-gradient(90deg,transparent_0%,rgba(69,193,244,0.28)_20%,rgba(244,248,255,0.08)_50%,rgba(69,193,244,0.24)_80%,transparent_100%)] [clip-path:polygon(0_45%,8%_12%,18%_45%,28%_12%,38%_45%,48%_12%,58%_45%,68%_12%,78%_45%,88%_12%,100%_45%,100%_68%,88%_35%,78%_68%,68%_35%,58%_68%,48%_35%,38%_68%,28%_35%,18%_68%,8%_35%,0_68%)]" />
      </div>
      <div className="absolute left-[42%] top-[34%] h-24 w-[84%] rotate-12 opacity-[0.12] z-0">
        <div className="h-full w-full bg-[linear-gradient(90deg,transparent_0%,rgba(7,143,236,0.28)_20%,rgba(244,248,255,0.08)_50%,rgba(0,213,255,0.18)_80%,transparent_100%)] [clip-path:polygon(0_45%,8%_12%,18%_45%,28%_12%,38%_45%,48%_12%,58%_45%,68%_12%,78%_45%,88%_12%,100%_45%,100%_68%,88%_35%,78%_68%,68%_35%,58%_68%,48%_35%,38%_68%,28%_35%,18%_68%,8%_35%,0_68%)]" />
      </div>
      <div className="absolute left-[-22%] top-[68%] h-24 w-[92%] rotate-10 opacity-[0.1] z-0">
        <div className="h-full w-full bg-[linear-gradient(90deg,transparent_0%,rgba(69,193,244,0.22)_20%,rgba(244,248,255,0.07)_50%,rgba(7,143,236,0.22)_80%,transparent_100%)] [clip-path:polygon(0_45%,8%_12%,18%_45%,28%_12%,38%_45%,48%_12%,58%_45%,68%_12%,78%_45%,88%_12%,100%_45%,100%_68%,88%_35%,78%_68%,68%_35%,58%_68%,48%_35%,38%_68%,28%_35%,18%_68%,8%_35%,0_68%)]" />
      </div>

      {/* Flat Native Render Layer */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full z-10" />

      {/* Dark Vignette Frame Overlays */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#000006] to-transparent z-20" />
      <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#000006] to-transparent z-20" />
    </div>
  );
}
