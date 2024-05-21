"use client";

import { Button } from "@/app/components/button/button";
import { Menu } from "@/app/components/menu/menu";

export const Overview = () => {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <>
      <Menu />
    </>
  );
};
