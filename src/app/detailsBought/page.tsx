"use client";
import Link from "next/link";
import { Menu } from "../components/menu/menu";
import { useStoreGlobal } from "../store/store";
import { formatARS } from "../utils/format";
import { Layout } from "../layout/layout";

const ThankYouPage = () => {
  const { accessories, quantity } = useStoreGlobal();

  console.log(accessories);

  return (
    <Layout className='w-full flex flex-col justify-center items-center'>
      <div className='  flex flex-col items-center  justify-center w-full gap-10 max-sm:p-5 '>
        <div className='flex flex-col justify-center items-center gap-1'>
          <svg
            width='33'
            height='33'
            viewBox='0 0 33 33'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M16.55 0.453126C13.6735 0.453126 11.0007 1.17861 8.53144 2.62959C6.13861 4.02966 4.24215 5.92611 2.84209 8.31895C1.39111 10.7882 0.665625 13.461 0.665625 16.3375C0.665625 19.214 1.39111 21.8868 2.84209 24.3561C4.24215 26.7489 6.13861 28.6453 8.53144 30.0454C11.0007 31.4964 13.6735 32.2219 16.55 32.2219C19.4265 32.2219 22.0993 31.4964 24.5686 30.0454C26.9614 28.6453 28.8578 26.7489 30.2579 24.3561C31.7089 21.8868 32.4344 19.214 32.4344 16.3375C32.4344 14.4538 32.1544 12.7864 31.5943 11.3354L29.6088 13.2828C29.8633 14.301 29.9906 15.3193 29.9906 16.3375C29.9906 18.7813 29.3797 21.0468 28.1578 23.1342C26.9868 25.1706 25.3831 26.7743 23.3467 27.9453C21.2593 29.1672 18.9937 29.7781 16.55 29.7781C14.1062 29.7781 11.8407 29.1672 9.75332 27.9453C7.71686 26.7743 6.11315 25.1706 4.94219 23.1342C3.72031 21.0468 3.10937 18.7813 3.10937 16.3375C3.10937 13.8938 3.72031 11.6282 4.94219 9.54082C6.11315 7.50436 7.71686 5.90065 9.75332 4.72969C11.8407 3.50781 14.1062 2.89688 16.55 2.89688C18.3574 2.89688 20.0756 3.24053 21.7048 3.92783C23.2576 4.56423 24.6322 5.48063 25.8286 6.67705L27.5469 4.95879C26.1214 3.53327 24.454 2.42595 22.5448 1.63682C20.6611 0.84769 18.6628 0.453126 16.55 0.453126ZM30.3343 5.68428L16.55 19.4686L11.3188 14.2374L9.5624 15.9938L15.6718 22.1032L16.55 22.9433L17.4282 22.1032L32.0907 7.44072L30.3343 5.68428Z'
              fill='#903DF7'
            />
          </svg>
          <h2 className='text-2xl font-bold'>We’ve Received Your Request!</h2>

          <h2 className=' text-sm text-custom-gray'>
            A dealer will follow up with next steps regarding your reservation.
          </h2>
        </div>

        <div className='border border-custom-gray p-4 rounded-lg  w-full flex flex-col max-sm:w-full max-sm:p-5 my-5  '>
          <h2 className=' font-bold'>Resumen de tu compra</h2>
          <div className='border-t border-gray-200 my-4'></div>
          <h2 className='font-bold'>Productos</h2>
          <span>
            {accessories ? (
              <span>
                {accessories[0]?.name} (x{quantity})
              </span>
            ) : null}
          </span>

          <div className='border-t border-gray-200 my-4'></div>
          <div>
            <h2 className='font-bold'>Detalle del pago</h2>
            <h2 className='text-custom-gray text-sm'>
              Método de pago: Tarjeta de crédito/débito
            </h2>
          </div>

          <div className='border-t border-gray-200 my-4' />
          <div className='flex items-center justify-between'>
            <span className='text-custom-gray'>Subtotal</span>
            <span className='text-custom-gray'>
              {formatARS(
                (Number(accessories?.[0]?.variants[0]?.prices[0].amount) || 0) *
                  Number(quantity)
              )}
            </span>
          </div>
          <div className='flex items-center justify-between'>
            <span className='text-custom-gray'>Envío Gratis</span>
            <span className='text-custom-gray'>Gratis</span>
          </div>

          <div className='border-t border-gray-200 my-4' />
          <div className=' flex justify-center mt-2'>
            <Link
              href='/'
              className='bg-custom-purple p-4 rounded-lg w-2/4  text-center text-white'
            >
              Back to Store
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ThankYouPage;
