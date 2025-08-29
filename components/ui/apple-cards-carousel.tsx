"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Image, { ImageProps } from "next/image";
import { useOutsideClick } from "@/hooks/use-outside-click";

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

type CardType = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({ onCardClose: () => {}, currentIndex: 0 });

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
  };

  const scrollByCard = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const card = carouselRef.current.querySelector<HTMLDivElement>("div > div");
    const cardWidth = card ? card.offsetWidth : 300; // fallback
    const gap = 16; // gap between cards
    const scrollAmount = direction === "left" ? -(cardWidth + gap) : cardWidth + gap;
    carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const handleCardClose = (index: number) => {
    if (!carouselRef.current) return;
    const card = carouselRef.current.querySelector<HTMLDivElement>("div > div");
    const cardWidth = card ? card.offsetWidth : 300;
    const gap = 16;
    carouselRef.current.scrollTo({
      left: (cardWidth + gap) * index,
      behavior: "smooth",
    });
    setCurrentIndex(index);
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-auto scroll-smooth py-8 md:py-16 gap-4 pl-4"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 * index, ease: "easeOut" } }}
              className="flex-shrink-0 rounded-2xl"
            >
              {item}
            </motion.div>
          ))}
        </div>

        {/* Arrow Buttons */}
        <div className="absolute top-1/2 right-4 flex -translate-y-1/2 gap-2">
          <button
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
            onClick={() => scrollByCard("left")}
            disabled={!canScrollLeft}
          >
            <IconArrowNarrowLeft className="h-5 w-5 text-gray-500" />
          </button>
          <button
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
            onClick={() => scrollByCard("right")}
            disabled={!canScrollRight}
          >
            <IconArrowNarrowRight className="h-5 w-5 text-gray-500" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

// Smaller, cleaner Card
export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: CardType;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { onCardClose } = useContext(CarouselContext);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => e.key === "Escape" && handleClose();
    window.addEventListener("keydown", handleEscape);
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 h-screen overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-full w-full bg-black/80 backdrop-blur-md"
            />
            <motion.div
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="relative z-60 mx-auto my-10 max-w-3xl rounded-2xl bg-white p-6 md:p-10 dark:bg-neutral-900"
            >
              <button
                className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-black dark:bg-white"
                onClick={handleClose}
              >
                <IconX className="h-5 w-5 text-white dark:text-black" />
              </button>
              <p className="text-sm font-medium text-black dark:text-white">{card.category}</p>
              <p className="mt-2 text-xl font-semibold text-neutral-700 md:text-3xl dark:text-white">
                {card.title}
              </p>
              <div className="py-6">{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
<motion.button
  layoutId={layout ? `card-${card.title}` : undefined}
  onClick={handleOpen}
  className="relative z-10 flex h-136 w-86 flex-col overflow-hidden rounded-3xl bg-gray-100 dark:bg-neutral-900"
>
  <div className="absolute inset-x-0 top-0 z-20 h-full bg-gradient-to-b from-black/50 via-transparent to-transparent" />
  <div className="relative z-30 p-6 md:p-8">
    <p className="text-sm md:text-base font-medium text-white">{card.category}</p>
    <p className="mt-2 text-lg md:text-2xl font-semibold text-white">{card.title}</p>
  </div>
  <BlurImage
    src={card.src}
    alt={card.title}
    className="absolute inset-0 z-10 object-cover"
  />
</motion.button>


    </>
  );
};

export const BlurImage = ({ height, width, src, className, alt, ...rest }: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <img
      className={cn("h-full w-full transition duration-300", isLoading ? "blur-0" : "blur-0", className)}
      onLoad={() => setLoading(false)}
      src={src as string}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      alt={alt || "Beautiful view"}
      {...rest}
    />
  );
};
