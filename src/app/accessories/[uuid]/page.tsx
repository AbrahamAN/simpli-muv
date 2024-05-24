"use client";
import Carousel from "@/app/components/carousel/carousel";
import { Layout } from "@/app/layout/layout";
import { formatARS } from "@/app/utils/format";
import { useParams } from "next/navigation";
import { useAccessoryDetails } from "../hooks/useAccessoryDetails";

const AccessoriesIdPage = () => {
  const params = useParams();
  const { uuid } = params;

  const { accessories, quantity, setQuantity, handleFormSubmit } =
    useAccessoryDetails(uuid as string);
  return (
    <Layout>
      <div>
        <div className='grid grid-cols-1 md:grid-cols-2 justify-center w-full h-min mt-10 gap-28 px-32 py-10 max-sm:p-5'>
          <div className='flex flex-col gap-20  justify-center items-center'>
            <Carousel
              className='w-full h-72 object-contain'
              content={
                accessories?.[0]?.variants[0]?.images.map(
                  (image) => image.url
                ) || []
              }
              width={800}
              height={300}
            />
            <div className='flex flex-col justify-center items-center'>
              <h2>{accessories?.[0].name}</h2>
            </div>
          </div>

          <div className='flex flex-col gap-2 w-10/12 max-sm:w-full '>
            <h2 className=' text-xl font-bold'>{accessories?.[0].name}</h2>
            <h2 className='text-custom-gray font-semibold'>
              {accessories?.[0]?.variants[0]?.prices[0]?.currency}
              {formatARS(accessories?.[0]?.variants[0]?.prices[0]?.amount || 0)}
            </h2>
            <h2 className='text-sm text-custom-gray'>
              {accessories?.[0]?.variants[0]?.details.features[0].value}
            </h2>
            <div className='flex gap-2 items-center'>
              <button
                className=' text-lg p-2 rounded-lg w-16  text-custom-purple border border-gray-200 '
                onClick={() =>
                  setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1))
                }
                disabled={quantity === 1}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                className=' text-lg p-2 rounded-lg w-16  text-custom-purple border border-gray-200 '
                onClick={() =>
                  setQuantity((prevQuantity) => Math.min(prevQuantity + 1, 5))
                }
                disabled={quantity === 5}
              >
                +
              </button>
            </div>

            <div className='border-t border-gray-200 my-4'></div>
            <button
              onClick={handleFormSubmit}
              className=' bg-custom-purple text-white text-center p-3 rounded-lg w-full cursor-pointer'
            >
              Comprar
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AccessoriesIdPage;
