"use client";
import React, { ReactNode } from "react";
import { Footer } from "../components/footer/footer";
import { Menu } from "../components/menu/menu";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export const Layout = ({ children, className }: LayoutProps) => {
  return (
    <div className={className}>
      <Menu />
      <div className='flex-1 flex flex-col'>
        <div className='flex-1'>{children}</div>
      </div>
      <Footer />
    </div>
  );
};
