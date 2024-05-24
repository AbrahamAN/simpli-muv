"use client";
import Carousel from "@/app/components/carousel/carousel";
import { getMotorcycleById } from "@/app/services/getMotorcyleById";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { formatUSD } from "@/app/utils/format";
import { Menu } from "@/app/components/menu/menu";
import Link from "next/link";
import { createLead } from "@/app/services/postCreateLead";
import { useRouter } from "next/navigation";
import { useStoreGlobal } from "@/app/store/store";

const MotosId = () => {
  const params = useParams();
  const { uuid } = params;
  const router = useRouter();
  const {
    motorcycle,
    setMotorcycle,
    name,
    lastname,
    email,
    phone,
    setName,
    setLastname,
    setEmail,
    setPhone,
  } = useStoreGlobal();

  const [showDetails, setShowDetails] = useState(true);

  useEffect(() => {
    async function fetchMotorcycle() {
      const data = await getMotorcycleById(uuid as string);
      setMotorcycle(data);
    }

    fetchMotorcycle();
  }, [uuid, setMotorcycle]);

  const handleButtonClick = () => {
    setShowDetails(false);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (Array.isArray(uuid)) {
      console.error("UUID no puede ser un array");
      return;
    }

    const data = {
      uuid: uuid,
      accesories: [],
      contact: {
        firstname: name,
        lastname: lastname,
        email: email,
        phone: phone,
        finace: true,
        trade: false,
      },
    };
    setName(name);
    setLastname(lastname);
    setEmail(email);
    setPhone(phone);

    try {
      await createLead(data);
      router.push("/thankYou");
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  };
  return (
    <div>
      <Menu />
      <div className='grid grid-cols-1 md:grid-cols-2 justify-center w-full h-min mt-10 gap-28 px-32'>
        <div className='flex flex-col gap-20  justify-center items-center'>
          <Carousel
            className='w-full h-72 object-contain'
            content={
              motorcycle?.[0]?.variants[0]?.images.map((image) => image.url) ||
              []
            }
            width={800}
            height={300}
          />
          <div className='flex flex-col justify-center items-center'>
            <h2>{motorcycle?.[0].name}</h2>
            <span className='text-custom-gray text-sm'>
              Motor : {motorcycle?.[0].variants[0].details.features[1].value}
            </span>
            <span className='text-custom-gray text-sm'>
              Potencia: {motorcycle?.[0].variants[0].details.features[0].value}
            </span>
          </div>
        </div>

        <div className='flex flex-col gap-2 w-10/12 '>
          <div className='flex items-center gap-4'>
            <svg
              width='8'
              height='13'
              viewBox='0 0 8 13'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M7.11035 0.399414L7.87402 1.16309L2.41211 6.625L7.87402 12.0869L7.11035 12.8506L1.2666 7.00684L0.901367 6.625L1.2666 6.24316L7.11035 0.399414Z'
                fill='#9A9A9A'
              />
            </svg>
            <Link className='text-custom-gray' href={`/motorcycles`}>
              Volver{" "}
            </Link>
          </div>

          <h2 className=' text-xl font-bold'>{motorcycle?.[0].name}</h2>
          <h2 className='text-custom-gray font-semibold'>
            {formatUSD(motorcycle?.[0]?.variants[0]?.prices[0]?.amount || 0)}
          </h2>
          <div className='border-t border-gray-200 my-4'></div>
          <div className='flex flex-col gap-3 '>
            {showDetails ? (
              <>
                <h2 className='font-bold text-lg'>Detalle de la cotización</h2>
                <span className='text-custom-gray  text-sm'>
                  {" "}
                  Motor :{" "}
                  {motorcycle?.[0].variants[0].details.features[1].value}
                </span>
                <span className='text-custom-gray  text-sm'>
                  {" "}
                  Potencia:{" "}
                  {motorcycle?.[0].variants[0].details.features[0].value}
                </span>
                <div className='flex justify-between '>
                  <h2 className=' text-custom-gray font-semibold'>Precio</h2>
                  <span className='font-bold  text-sm '>
                    {motorcycle?.[0]?.variants[0]?.prices[0]?.currency}
                    {formatUSD(
                      motorcycle?.[0]?.variants[0]?.prices[0]?.amount || 0
                    )}
                  </span>
                </div>
              </>
            ) : (
              <form onSubmit={handleFormSubmit} className='space-y-4'>
                <label className='block'>
                  <span className='font-bold'>Email:</span>
                  <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className='mt-1 py-1 block w-full rounded-md border-gray-300 border shadow-sm'
                  />
                </label>
                <label className='block'>
                  <span className='font-bold'>Teléfono:</span>
                  <input
                    type='tel'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className='mt-1 py-1 block w-full rounded-md border-gray-300 border shadow-sm'
                  />
                </label>
                <label className='block'>
                  <span className='font-bold'>Nombre:</span>
                  <input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className='mt-1 py-1 block w-full rounded-md border-gray-300 border shadow-sm'
                  />
                </label>
                <label className='block'>
                  <span className='font-bold'>Apellido:</span>
                  <input
                    type='text'
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    required
                    className='mt-1 py-1 block w-full rounded-md border-gray-300 border shadow-sm'
                  />
                </label>
                <input
                  type='submit'
                  value='Reservar'
                  className=' bg-custom-purple text-white p-3 rounded-lg w-full cursor-pointer'
                />
              </form>
            )}
            {showDetails ? (
              <button
                className=' bg-custom-purple text-white p-3 rounded-lg'
                onClick={handleButtonClick}
              >
                Solicitar Cotización
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotosId;