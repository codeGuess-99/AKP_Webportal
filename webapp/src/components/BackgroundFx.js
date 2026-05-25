"use client";

import dynamic from "next/dynamic";

const Particles = dynamic(() => import("./Particles"), {
  ssr: false,
});

function BackgroundFx({
  particleColors = ["#ffffff", "#45c1f4", "#dce6ef"],
  particleCount = 260,
  particleSpread = 12,
  speed = 0.12,
  particleBaseSize = 90,
  moveParticlesOnHover = true,
  alphaParticles = false,
  disableRotation = false,
  pixelRatio = 1,
}) {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 overflow-hidden bg-background"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(69,193,244,0.14),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(7,143,236,0.14),transparent_28%),linear-gradient(180deg,rgba(0,0,6,0)_0%,rgba(1,8,30,0.65)_48%,rgba(0,0,6,0)_100%)]" />

      <div className="absolute inset-0 opacity-80">
        <Particles
          particleColors={particleColors}
          particleCount={particleCount}
          particleSpread={particleSpread}
          speed={speed}
          particleBaseSize={particleBaseSize}
          moveParticlesOnHover={moveParticlesOnHover}
          alphaParticles={alphaParticles}
          disableRotation={disableRotation}
          pixelRatio={pixelRatio}
        />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}

export default BackgroundFx;
