import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='flex flex-col justify-between items-center sm:flex-row w-full p-5'>
      <div className='w-4/12 max-sm:w-full  flex justify-between'>
        <Link href='/'>
          <Image
            src='https://simplimuv.com/wp-content/uploads/2020/09/simplimuv-prueba-1.png'
            alt='logo'
            width={200}
            height={200}
          />
        </Link>
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
        className={`flex gap-10  flex-col sm:flex-row items-center w-2/5 max-sm:mt-2    max-sm:w-full ${
          isOpen ? "block" : "hidden"
        } sm:flex`}
      >
        <Link href='/motorcycles'>Motos </Link>
        <Link href='/accessories'>Accesorios </Link>
        <Link href='/'>Indumentaria </Link>
        <Link href='/'>Eventos </Link>
        <Link href='/'>Servicios </Link>
      </ul>

      <div className='w-1/5 flex justify-end cursor-pointer max-sm:hidden'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z'
          />
        </svg>
      </div>
    </div>
  );
};
