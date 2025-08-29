import React from "react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react"


function Hero() {
  return (
    <div className="mt-24 flex-col items-center flex space-y-8">
      {/* Content */}
      <div className="max-w-3xl w-full text-center space-y-5">
        <h1 className="text-xl md:text-5xl font-bold">
          Hey, I'm your personal Trip Planner,{" "}
          <span className="text-[var(--primary)]"> ZourneyAI.</span>
        </h1>
        <p className="text-lg">
          Plan your perfect trip in seconds — flights, hotels, and everything in
          between, all handled for you.{" "}
        </p>
      </div>
      {/* Input Box */}
     <div className="w-full max-w-3xl">
  <div className="relative border border-gray-300 rounded-2xl p-4 shadow-2xl bg-white">
    {/* Textarea */}
    <textarea
      className="w-full h-28 bg-transparent border-none focus-visible:ring-0 shadow-none resize-none pr-16"
      placeholder="Create a trip from Paris to New York City."
    />
    {/* Button */}
    <div className="absolute bottom-4 right-4">
      <Button size="icon" className="bg-[var(--primary)] text-white">
        <Send />
      </Button>
    </div>
  </div>
</div>


      {/* Suggestion list */}

      {/* Video Section */}
    </div>
  );
}

export default Hero;
