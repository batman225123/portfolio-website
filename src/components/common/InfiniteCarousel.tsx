"use client";

import React, { useState, useEffect, useRef } from "react";

interface CarouselItem {
  id: string | number;
  content: React.ReactNode;
}

interface InfiniteCarouselProps {
  items: CarouselItem[];
  speed?: number;
  itemWidth?: number;
  pauseOnHover?: boolean;
  scaleOnHover?: boolean;
}

const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({
  items,
  speed = 1,
  itemWidth = 200,
  pauseOnHover = true,
  scaleOnHover = true,
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(0);
  const requestRef = useRef<number>();

  // We need more duplicates for truly seamless looping
  const clonedItems = React.useMemo(
    () => [...items, ...items, ...items, ...items],
    [items]
  );

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || items.length === 0) return;

    const totalWidth = items.length * itemWidth;

    const animate = (timestamp: number) => {
      if (!isPaused) {
        positionRef.current -= speed;

        // When we've scrolled one full set of items, reset position seamlessly
        if (positionRef.current <= -totalWidth) {
          positionRef.current = 0;
        }

        if (carouselRef.current) {
          carouselRef.current.style.transform = `translateX(${positionRef.current}px)`;
        }
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isPaused, speed, items, itemWidth]);

  const handleMouseEnter = () => {
    if (pauseOnHover) setIsPaused(true);
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) setIsPaused(false);
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={carouselRef}
        className="flex whitespace-nowrap will-change-transform"
      >
        {clonedItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className={`inline-flex items-center justify-center transition-transform duration-300 ${
              scaleOnHover ? "hover:scale-110" : ""
            }`}
            style={{ minWidth: `${itemWidth}px` }}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
