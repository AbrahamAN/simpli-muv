"use client";

import Image from "next/image";

interface CardCarouselProps {
  title: string;
  textPrimaryButton: string;
  textSecondaryButton: string;
  textButton: string;
  onClickPrimary: () => void;
  onClickSecondary: () => void;
  src: string;
  alt: string;
  width: number;
  height: number;
}

const CardCarousel = ({
  title,
  textSecondaryButton,
  textPrimaryButton,
  onClickPrimary,
  onClickSecondary,
  src,
  alt,
  width,
  height,
}: CardCarouselProps) => (
  <div className='flex flex-col items-center gap-5 p-10 w-full'>
    <h2 className='font-bold'>{title}</h2>
    <Image src={src} alt={alt} width={width} height={height}></Image>
    <button
      className='p-4 text-white rounded-lg w-full bg-custom-purple'
      onClick={onClickPrimary}
    >
      {textPrimaryButton}
    </button>
    <button className='text-custom-purple ' onClick={onClickSecondary}>
      {textSecondaryButton}
    </button>
  </div>
);
export default CardCarousel;
