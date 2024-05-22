import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { useSwipeable } from "react-swipeable";

interface CarouselProps {
  content: string[] | JSX.Element[];
  width?: number;
  height?: number;
  className?: string;
  groupContent?: boolean;
}

const Carousel = ({
  content,
  width,
  height,
  className,
  groupContent,
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  let groupedContent: (string | JSX.Element)[][] = [];
  if (groupContent) {
    for (let i = 0; i < content.length; i += 4) {
      groupedContent.push(content.slice(i, i + 4));
    }
  } else {
    for (let i = 0; i < content.length; i++) {
      groupedContent.push([content[i]]);
    }
  }

  const nextContent = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % groupedContent.length);
  };

  const prevContent = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + groupedContent.length) % groupedContent.length
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => nextContent(),
    onSwipedRight: () => prevContent(),
  });

  const renderContent = () => {
    if (groupContent) {
      return groupedContent[currentIndex];
    } else if (typeof content[currentIndex] === "string") {
      return (
        <Image
          className={className}
          src={content[currentIndex]}
          alt='carousel'
          width={width}
          height={height}
        />
      );
    } else {
      return content[currentIndex];
    }
  };

  return (
    <div
      className='lg:overflow-visible relative sm:overflow-hidden flex'
      {...handlers}
    >
      <button
        onClick={prevContent}
        disabled={currentIndex === 0}
        className='absolute -left-12 top-1/2 transform -translate-y-1/2  rounded-full p-2 sm:hidden lg:block'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className={`w-6 h-6 ${
            currentIndex === 0 ? "text-gray-400" : "text-custom-purple"
          }`}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18'
          />
        </svg>
      </button>
      {renderContent()}
      <button
        onClick={nextContent}
        disabled={currentIndex === groupedContent.length - 1}
        className='absolute -right-12 top-1/2 transform -translate-y-1/2  rounded-full p-2 sm:hidden lg:block'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='currentColor'
          className={`w-6 h-6 ${
            currentIndex === groupedContent.length - 1
              ? "text-gray-400"
              : "text-custom-purple"
          }`}
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
          />
        </svg>
      </button>
      <div className='block absolute -bottom-12 left-1/2 transform -translate-x-1/2 space-x-2'>
        {groupedContent.map((_, index) => (
          <div
            key={index}
            className={`inline-block h-2 w-10 rounded-full ${
              currentIndex === index ? "bg-fuchsia-700" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
