"use client";
import React from "react";
interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

export const Button = ({ text, onClick, disabled, className }: ButtonProps) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};
