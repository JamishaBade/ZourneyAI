"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function PopularCityList() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));
  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-xl ml-4 md:ml-8 text-left text-lg md:text-4xl font-bold text-black font-sans">
        Popular Destinations
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => (
        <div
          key={"dummy-content" + index}
          className="bg-[#F5F5F7] dark:bg-neutral-800 p-6 md:p-12 rounded-3xl mb-6"
        >
          <p className="text-neutral-700 dark:text-neutral-300 text-base md:text-xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-900 dark:text-white">
              Discover your perfect travel experience with ZourneyAI.
            </span>{" "}
            From planning your itinerary to booking the best spots, ZourneyAI
            captures every detail so you can focus on enjoying your journey.
            Explore top destinations, hidden gems, and get AI-powered
            recommendations for an unforgettable adventure.
          </p>
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1080&auto=format&fit=crop"
            alt="Travel destination mockup"
            height="300"
            width="300"
            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-6"
          />
        </div>
      ))}
    </>
  );
};


const data = [
  {
    category: "Paris, France",
    title: "Explore the City of Lights and its iconic landmarks.",
    src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: <DummyContent />,
  },
  {
    category: "New York City, USA",
    title: "Experience the bustling streets and skyline of NYC.",
    src: "https://cdn.pixabay.com/photo/2014/11/21/17/23/new-york-540807_1280.jpg",
    content: <DummyContent />,
  },
  {
    category: "Kathmandu, Nepal",
    title: "Discover ancient temples and Himalayan culture.",
    src: "https://cdn.pixabay.com/photo/2017/02/14/03/03/ama-dablam-2064522_1280.jpg",
    content: <DummyContent />,
  },
  {
    category: "Tokyo, Japan",
    title: "Dive into a world of tradition and neon-lit streets.",
    src: "https://cdn.pixabay.com/photo/2019/04/20/11/40/japan-4141581_1280.jpg",
    content: <DummyContent />,
  },
  {
    category: "Sydney, Australia",
    title: "Enjoy stunning beaches and the iconic Opera House.",
    src: "https://cdn.pixabay.com/photo/2014/06/06/09/36/sydney-opera-house-363244_1280.jpg",
    content: <DummyContent />,
  },
  {
    category: "Rome, Italy",
    title: "Walk through ancient history and Roman architecture.",
    src: "https://cdn.pixabay.com/photo/2023/09/21/14/17/italy-8266783_1280.jpg",
    content: <DummyContent />,
  },
  {
    category: "Dubai, UAE",
    title: "Marvel at the skyscrapers and desert adventures.",
    src: "https://cdn.pixabay.com/photo/2017/03/17/14/08/dubai-2151681_1280.jpg",
    content: <DummyContent />,
  },
];
