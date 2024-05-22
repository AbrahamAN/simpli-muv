"use client";

import CardCarousel from "@/app/components/cardCarousel/cardCarousel";
import Carousel from "@/app/components/carousel/carousel";
import { Menu } from "@/app/components/menu/menu";
import { motorcycles } from "@/app/contants/motorcycles";
import { useRouter } from "next/navigation";

export const Overview = () => {
  const router = useRouter();

  return (
    <>
      {/* Menu section */}
      <Menu />
      {/* carousel section  */}
      <div className='flex justify-center w-full h-min mt-10'>
        <Carousel
          className='rounded-lg'
          content={[
            "https://www.1zoom.me/big2/13/186231-purs.jpg",
            "https://i.pinimg.com/originals/e6/ec/a9/e6eca9e180b4d7d9767558a63843e20c.jpg",
            "https://fondosmil.co/fondo/17757.jpg",
          ]}
          width={800}
          height={300}
        />
      </div>
      {/* Motos section */}
      <div className='flex justify-center flex-col items-center gap-2 mt-20 mx-10'>
        <h2 className='font-extrabold text-3xl'>Conoce a la Familia Meteor</h2>
        <h5 className='text-gray-500'>
          Sapien, duis commodo risus molestie pulvinar sit id id. Malesuada quam
          leo, quis venenatis integer pellentesque mauris.
        </h5>
        <div className='mx-20'>
          <Carousel
            className='rounded-lg  w-full '
            groupContent={true}
            content={motorcycles.map((motorcycle) => (
              <CardCarousel
                key={motorcycle.id}
                alt='motorcycle'
                height={250}
                width={250}
                onClickPrimary={() => router.push("/motos")}
                onClickSecondary={() => console.log("secondary")}
                src={motorcycle.img}
                textButton='Reservar'
                title={motorcycle.title}
                textPrimaryButton={motorcycle.textPrimaryButton}
                textSecondaryButton={motorcycle.textSecondaryButton}
              />
            ))}
          />
        </div>
      </div>
      {/* note section */}
      <div className='w-full flex mt-20 h-full p-20 justify-between bg-custom-bg-radiant'>
        <h2 className='text-white text-3xl font-bold w-2/4'>
          Entérate del último recorrido de la Meteor 350 por las sierras de
          Córdoba.
        </h2>
        <button className='text-white border-white bg-transparent border p-2 rounded-lg h-3/5'>
          Leer nota completa
        </button>
      </div>
      {/* Accesorios section */}
      <div className='flex justify-center flex-col items-center gap-2 mt-20 mx-10'>
        <h2 className='font-extrabold text-3xl'>Accesorios</h2>
        <h5 className='text-gray-500'>
          ¡Elige el producto que mejor se adapte a ti y a tu estilo!
        </h5>
      </div>
    </>
  );
};
