"use client";
import React, { useEffect, useState } from "react";
import { Menu } from "../components/menu/menu";
import CardMotorcycle from "./components/cardMotorcycle";
import { getMotorcycles } from "../services/getMotorcycles";
import Link from "next/link";
import { MotorcycleTypes } from "./types";

const MotorcyclesPage = () => {
  const [motorcycles, setMotorcycles] = useState<MotorcycleTypes[]>([]);

  useEffect(() => {
    async function fetchMotorcycles() {
      const data = await getMotorcycles();
      setMotorcycles(data);
    }

    fetchMotorcycles();
  }, []);

  return (
    <div>
      <Menu />
      <div className='w-full flex   h-20 items-center justify-center bg-custom-bg-radiant'>
        <h2 className='text-white text-3xl font-bold '>
          Lorem ipsum dolor sit amet
        </h2>
      </div>
      <div className='grid grid-cols-4 gap-10 w-full p-20 max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {motorcycles.map((motorcycle) => {
          console.log(motorcycle);
          return (
            <Link href={`/motos/${motorcycle.uuid}`} key={motorcycle.uuid}>
              <CardMotorcycle
                img={motorcycle.variants[0].images[0].url}
                title={motorcycle.name}
                price={motorcycle.variants[0].prices[0].amount}
                currency={motorcycle.variants[0].prices[0].currency}
                dealership={motorcycle.seller.name}
                descriptionEngine={
                  motorcycle.variants[0].details.motors[0].value
                }
                descriptionYear={motorcycle.variants[0].details.years[0].value}
                descriptionKm={
                  motorcycle.variants[0].details.kilometers[0].value
                }
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MotorcyclesPage;
