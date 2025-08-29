import React from "react";
import { Button } from "@/components/ui/button";
import {
  CompassIcon,
  Divide,
  Globe2,
  Package2Icon,
  PiggyBankIcon,
  PlaneIcon,
  Send,
} from "lucide-react";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import { ArrowDown } from "lucide-react";
const suggestions = [
  {
    title: "Create New Trip",
    icon: <Globe2 className="text-blue-400 h-5 w-5" />,
  },
  {
    title: "Discover your true destination",
    icon: <PlaneIcon className="text-green-400 h-5 w-5" />,
  },
  {
    title: "Plan. Explore. Go",
    icon: <PiggyBankIcon className="text-pink-400 h-5 w-5" />,
  },
  {
    title: "Turn your dreams into reality with ZourneyAI",
    icon: <CompassIcon className="text-yellow-400 h-5 w-5" />,
  },
];

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

      <div className="flex gap-6">
        {suggestions.map((suggestions, index) => (
          <div
            key={index}
            className="flex items-center gap-2 border border-gray-100 rounded-full p-2 hover:bg-[var(--primary)] hover:text-white"
          >
            {suggestions.icon}
            <h2>{suggestions.title}</h2>
          </div>
        ))}
      </div>

      <h2 className='my-7 mt-14 flex gap-2 text-center'>
        Not sure where to begin? <strong>See how it works</strong> <ArrowDown></ArrowDown>
      </h2>
      {/* Video Section */}
      <div className="w-full max-w-5xl mt-15">

         <HeroVideoDialog
        className="block dark:visible "
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/watch?v=sXRDL-EPtrM&t=723s"
        thumbnailSrc="https://mma.prnewswire.com/media/2401528/1_MindtripProduct.jpg?p=facebook"
        thumbnailAlt="Dummy Video Thumbnail"
      />
      </div>
     
    </div>
  );
}

export default Hero;
