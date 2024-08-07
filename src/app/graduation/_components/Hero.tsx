"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const GraduationStage = () => {
  const searchParams = useSearchParams();
  const [showStage, setShowStage] = useState(false);

  const name = searchParams.get("name") || "John Doe";

  useEffect(() => {
    setTimeout(() => {
      setShowStage(true);
    }, 2000); // Delay to simulate curtain opening
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gray-800 text-white text-center overflow-hidden">
      {/* Curtains */}
      <div
        className={`absolute w-1/2 h-full bg-red-900 ${
          showStage ? "curtain-left" : ""
        }`}
        style={{ left: 0 }}
      ></div>
      <div
        className={`absolute w-1/2 h-full bg-red-900 ${
          showStage ? "curtain-right" : ""
        }`}
        style={{ right: 0 }}
      ></div>

      {!showStage ? (
        <div className="z-10 text-5xl font-bold mb-4">
          Congratulations, {name}!
        </div>
      ) : (
        <div className="z-10 relative w-full h-full flex flex-col items-center justify-center">
          <div className="text-5xl font-bold mb-4">
            Congratulations, {name}!
          </div>
          <div className="text-3xl font-semibold mb-8">You've made it!</div>
          <div className="relative w-full h-64">
            <div className="absolute inset-0 flex justify-center items-center animate-slide">
              <div className="w-1/2 h-12 bg-gray-700 rounded-lg shadow-lg">
                <div className="flex items-center justify-center h-full">
                  <span className="text-2xl font-semibold">
                    Receiving Diploma...
                  </span>
                </div>
              </div>
            </div>
          </div>
          <audio autoPlay>
            <source src="/applause.mp3" type="audio/mpeg" />
          </audio>
        </div>
      )}
    </div>
  );
};

export default GraduationStage;
