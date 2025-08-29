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
// Reusable content card
const DummyContent = ({ title, text, img }: { title: string; text: string; img: string }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-6 md:p-12 rounded-3xl mb-6">
      <p className="text-neutral-700 dark:text-neutral-300 text-base md:text-xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-900 dark:text-white">
          {title}
        </span>{" "}
        {text}
      </p>
      <img
        src={img}
        alt="Travel destination"
        height="300"
        width="300"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-6"
      />
    </div>
  );
};

// Data for each city
const data = [
  {
    category: "Paris, France",
    title: "Explore the City of Lights and its iconic landmarks.",
    src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3",
    content: (
      <DummyContent
        title="Romantic adventures in Paris."
        text="Stroll through the streets of Montmartre, admire the Eiffel Tower, and indulge in world-class cuisine."
        img="https://cdn.pixabay.com/photo/2024/05/05/08/16/tower-8740496_1280.jpg"
      />
    ),
  },
  {
    category: "New York City, USA",
    title: "Experience the bustling streets and skyline of NYC.",
    src: "https://cdn.pixabay.com/photo/2014/11/21/17/23/new-york-540807_1280.jpg",
    content: (
      <DummyContent
        title="The city that never sleeps."
        text="Catch a Broadway show, visit Central Park, and enjoy breathtaking views from the Empire State Building."
        img="https://cdn.pixabay.com/photo/2012/10/07/23/22/new-60198_1280.jpg"
      />
    ),
  },
  {
    category: "Kathmandu, Nepal",
    title: "Discover ancient temples and Himalayan culture.",
    src: "https://cdn.pixabay.com/photo/2017/02/14/03/03/ama-dablam-2064522_1280.jpg",
    content: (
      <DummyContent
        title="Spiritual heart of Nepal."
        text="Wander through Durbar Square, marvel at Swayambhunath, and prepare for treks to the Himalayas."
        img="https://cdn.pixabay.com/photo/2015/05/30/12/47/nepal-790336_1280.jpg"
      />
    ),
  },
  {
    category: "Tokyo, Japan",
    title: "Dive into a world of tradition and neon-lit streets.",
    src: "https://cdn.pixabay.com/photo/2019/04/20/11/40/japan-4141581_1280.jpg",
    content: (
      <DummyContent
        title="Modern meets tradition."
        text="Experience the bustling Shibuya Crossing, savor sushi at Tsukiji Market, and visit serene temples."
        img="https://cdn.pixabay.com/photo/2022/11/30/19/21/zizhu-temple-7627473_1280.jpg"
      />
    ),
  },
  {
    category: "Sydney, Australia",
    title: "Enjoy stunning beaches and the iconic Opera House.",
    src: "https://cdn.pixabay.com/photo/2014/06/06/09/36/sydney-opera-house-363244_1280.jpg",
    content: (
      <DummyContent
        title="Australia’s shining harbor city."
        text="Surf at Bondi Beach, explore the Sydney Opera House, and take a ferry ride across Darling Harbour."
        img="https://cdn.pixabay.com/photo/2018/09/02/17/12/semper-opera-house-3649250_1280.jpg"
      />
    ),
  },
  {
    category: "Rome, Italy",
    title: "Walk through ancient history and Roman architecture.",
    src: "https://cdn.pixabay.com/photo/2023/09/21/14/17/italy-8266783_1280.jpg",
    content: (
      <DummyContent
        title="The Eternal City."
        text="Step into the Colosseum, explore the Roman Forum, and enjoy authentic Italian gelato."
        img="https://cdn.pixabay.com/photo/2021/10/07/00/48/boat-6686952_1280.jpg"
      />
    ),
  },
  {
    category: "Dubai, UAE",
    title: "Marvel at the skyscrapers and desert adventures.",
    src: "https://cdn.pixabay.com/photo/2017/03/17/14/08/dubai-2151681_1280.jpg",
    content: (
      <DummyContent
        title="Luxury in the desert."
        text="Climb the Burj Khalifa, shop at the Dubai Mall, and take a thrilling desert safari."
        img="https://cdn.pixabay.com/photo/2019/12/27/09/57/dubai-4722074_1280.jpg"
      />
    ),
  },
];
