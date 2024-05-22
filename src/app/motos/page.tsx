"use client";
import React from "react";
import { Menu } from "../components/menu/menu";
import CardMotorcycle from "./components/cardMotorcycle";
import { motorcyclesCategory } from "../contants/motorcycles";

const MotorcyclesPage = () => {
  return (
    <div>
      <Menu />
      <div className='w-full flex   h-20 items-center justify-center bg-custom-bg-radiant'>
        <h2 className='text-white text-3xl font-bold '>
          Lorem ipsum dolor sit amet
        </h2>
      </div>
      <div className='grid grid-cols-4 gap-10 w-full p-20 max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {motorcyclesCategory.map((motorcycle) => (
          <CardMotorcycle
            textOfert={motorcycle.textOfert}
            onClick={() => console.log(motorcycle.id)}
            key={motorcycle.id}
            img={motorcycle.img}
            title={motorcycle.title}
            price={motorcycle.price}
            dealership={motorcycle.dealership}
            engine={motorcycle.engine}
            descriptionEngine={motorcycle.descriptionEngine}
            category={motorcycle.category}
            descriptionCategory={motorcycle.descriptionCategory}
            tallness={motorcycle.tallness}
            descriptionTallness={motorcycle.descriptionTallness}
            chipText={motorcycle.chipText}
          />
        ))}
      </div>
    </div>
  );
};

export default MotorcyclesPage;
