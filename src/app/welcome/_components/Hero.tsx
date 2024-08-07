"use client";

// app/components/Hero.tsx
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import confetti from "canvas-confetti";

const Hero = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "John Doe";

  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 160,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white text-center">
      <div className="text-5xl font-bold mb-4">Welcome, {name}!</div>
      <div className="relative w-full h-64">
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="text-3xl font-semibold">
            Enjoy your journey at the university!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
