"use client";
import Image from "next/image";
import { Menu } from "../components/menu/menu";
import { useEffect } from "react";
import { getAccessories } from "../services/getAccessories";
import { useStoreGlobal } from "../store/store";
import { formatUSD } from "../utils/format";
import Link from "next/link";

const Accessories = () => {
  const { accessories, setAccessories } = useStoreGlobal();

  useEffect(() => {
    async function fetchMotorcycles() {
      const data = await getAccessories();
      setAccessories(data);
    }

    fetchMotorcycles();
  }, []);

  console.log(accessories, "accessories");
  return (
    <div>
      <Menu />
      <div className='w-full flex   h-20 items-center justify-center bg-custom-bg-radiant'>
        <h2 className='text-white text-3xl font-bold '>
          Lorem ipsum dolor sit amet
        </h2>
      </div>
      <div className='grid grid-cols-4 gap-10 w-full p-20 max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {accessories?.map((accessorie) => (
          <Link href={`/accessories/${accessorie.uuid}`} key={accessorie.uuid}>
            <div
              key={accessorie.uuid}
              className=' border border-gray-200 p-2  flex flex-col justify-center items-center rounded-lg'
            >
              <Image
                alt='logo'
                width={200}
                height={200}
                className='w-full h-52 object-contain'
                src={accessorie.variants[0].images[0].url || ""}
              />
              <h2 className='font-bold'>{accessorie?.name}</h2>
              <span className='text-custom-gray'>
                {formatUSD(accessorie?.variants[0].prices[0].amount)}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Accessories;
