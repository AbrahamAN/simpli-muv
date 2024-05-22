import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='flex flex-col sm:flex-row w-full p-5'>
      <div className='w-full sm:w-2/5 flex justify-between'>
        <Image
          src='https://simplimuv.com/wp-content/uploads/2020/09/simplimuv-prueba-1.png'
          alt='logo'
          width={200}
          height={200}
        />
        <button className='sm:hidden' onClick={toggle}>
          {isOpen ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              className='h-6 w-6 text-gray-500'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              className='h-6 w-6 text-gray-500'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          )}
        </button>
      </div>
      <ul
        className={`flex gap-10  flex-col sm:flex-row items-center w-full   sm:w-3/5 ${
          isOpen ? "block" : "hidden"
        } sm:flex`}
      >
        <Link href='/motos'>Motos </Link>
        <Link href='/accesorios'>Accesorios </Link>
        <Link href='/'>Indumentaria </Link>
        <Link href='/'>Eventos </Link>
        <Link href='/'>Servicios </Link>
      </ul>
    </div>
  );
};
