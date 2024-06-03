import { useEffect, useRef, useState } from "react";
import ArrowRightIcon from "../assets/icons/arrow-right.svg?react";

interface IProps {
  children: React.ReactNode;
}

export const HorizontalScroll: React.FC<IProps> = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isEndReached, setIsEndReached] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScrollBack = () => {
    setScrollPosition((prevPosition) => Math.max(prevPosition - 400, 0));
  };

  const handleScrollForward = () => {
    if (scrollContainerRef.current) {
      const scrollContainer = scrollContainerRef.current;
      const scrollWidth = scrollContainer.scrollWidth;
      const clientWidth = scrollContainer.clientWidth;
      const maxScrollPosition = scrollWidth - clientWidth;

      setScrollPosition((prevPosition) =>
        Math.min(prevPosition + 400, maxScrollPosition)
      );
    }
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
      const scrollContainer = scrollContainerRef.current;
      const scrollWidth = scrollContainer.scrollWidth;
      const clientWidth = scrollContainer.clientWidth;
      const maxScrollPosition = scrollWidth - clientWidth;

      setIsEndReached(scrollPosition >= maxScrollPosition);
    }
  }, [scrollPosition]);

  return (
    <div className="relative overflow-x-auto md:overflow-hidden">
      <div
        ref={scrollContainerRef}
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${scrollPosition}px)` }}
      >
        {children}
      </div>
      <button
        className={`absolute hidden  left-0 w-[7rem]  h-full text-gray-800 transform -translate-y-1/2 top-1/2 bg-gradient-to-r from-base-100 from-30% to-transparent ${
          scrollPosition === 0 ? "hidden" : "md:block"
        }`}
        onClick={handleScrollBack}
      >
        <ArrowRightIcon className="rotate-180 w-7" />
      </button>
      <button
        className={`absolute hidden  justify-end items-center right-0 w-[7rem] h-full text-gray-800 transform -translate-y-1/2 top-1/2 bg-gradient-to-l from-base-100 from-30% to-transparent ${
          isEndReached ? "hidden" : "md:flex"
        }`}
        onClick={handleScrollForward}
      >
        <ArrowRightIcon className="w-7" />
      </button>
    </div>
  );
};
