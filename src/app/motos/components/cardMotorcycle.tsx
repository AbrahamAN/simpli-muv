"use client";

import Image from "next/image";

interface CardMotorcycleProps {
  img: string;
  title: string;
  price: string;
  dealership: string;
  engine: string;
  descriptionEngine: string;
  category: string;
  descriptionCategory: string;
  tallness: string;
  descriptionTallness: string;
  chipText: string;
  textOfert?: string;
  onClick: () => void;
}

const CardMotorcycle = ({
  img,
  title,
  price,
  chipText,
  dealership,
  engine,
  descriptionEngine,
  category,
  descriptionCategory,
  tallness,
  descriptionTallness,
  textOfert,
  onClick,
}: CardMotorcycleProps) => {
  return (
    <div
      className='flex flex-col border-gray-200 border rounded-lg p-5 items-center cursor-pointer relative'
      onClick={onClick}
    >
      {textOfert && (
        <div className='absolute  border bg-custom-bg-radiant top-4 left-4 p-1 rounded-lg'>
          <h2 className='text-custom-purple font-medium '>{textOfert}</h2>
        </div>
      )}

      <Image src={img} alt={title} width={288} height={288} />
      <div className='flex items-center border border-gray-200   rounded-full w-28 gap-2 '>
        <div className='inline-flex items-center bg-custom-red-chip text-white text-sm font-bold px-3 py-3 rounded-full' />
        <h2 className='text-custom-gray text-xs font-semibold'>{chipText}</h2>
      </div>
      <h2 className='text-lg font-bold'>{title}</h2>
      <h3 className='text-custom-gray text-xs'>
        ARG{" "}
        <span className='text-custom-gray font-bold text-base'>{price}</span>
      </h3>
      <div className='items-center flex flex-col '>
        <div className='flex items-center my-2'>
          <svg
            width='15'
            height='15'
            viewBox='0 0 15 15'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M10.875 0.9375C10.2656 0.9375 9.70312 1.08984 9.1875 1.39453C8.67188 1.69922 8.26172 2.10937 7.95703 2.625C7.65234 3.14063 7.5 3.70313 7.5 4.3125C7.5 4.57031 7.54688 4.85156 7.64062 5.15625C7.71094 5.40234 7.82812 5.70703 7.99219 6.07031C8.25 6.66797 8.57812 7.30664 8.97656 7.98633C9.45703 8.80664 9.9375 9.5625 10.418 10.2539L10.875 10.9219L11.7891 9.58594C12.1523 9.03516 12.4805 8.50195 12.7734 7.98633C13.1719 7.30664 13.5 6.66797 13.7578 6.07031C13.9219 5.70703 14.0391 5.40234 14.1094 5.15625C14.2031 4.85156 14.25 4.57031 14.25 4.3125C14.25 3.70313 14.0977 3.14063 13.793 2.625C13.4883 2.10937 13.0781 1.69922 12.5625 1.39453C12.0469 1.08984 11.4844 0.9375 10.875 0.9375ZM5.23242 2.02734L0.75 3.94336V14.7363L5.26758 12.7852L9.76758 14.4727L14.25 12.5566V7.65234C13.957 8.21484 13.582 8.85938 13.125 9.58594V11.8184L10.3125 13.0137V12.0996L9.1875 10.4648V13.0664L5.8125 11.8008V3.43359L6.42773 3.66211C6.48633 3.27539 6.58594 2.91211 6.72656 2.57227L5.23242 2.02734ZM10.875 2.0625C11.2852 2.0625 11.6602 2.16211 12 2.36133C12.3516 2.56055 12.627 2.83594 12.8262 3.1875C13.0254 3.52734 13.125 3.90234 13.125 4.3125C13.125 4.42969 13.0898 4.61133 13.0195 4.85742C12.9492 5.0918 12.8555 5.34375 12.7383 5.61328C12.5273 6.09375 12.2109 6.69727 11.7891 7.42383C11.5195 7.88086 11.2441 8.32031 10.9629 8.74219L10.875 8.88281L10.7871 8.74219C10.5059 8.32031 10.2305 7.88086 9.96094 7.42383C9.53906 6.69727 9.22266 6.09375 9.01172 5.61328C8.89453 5.34375 8.80078 5.0918 8.73047 4.85742C8.66016 4.61133 8.625 4.42969 8.625 4.3125C8.625 3.90234 8.72461 3.52734 8.92383 3.1875C9.12305 2.83594 9.39258 2.56055 9.73242 2.36133C10.084 2.16211 10.4648 2.0625 10.875 2.0625ZM4.6875 3.46875V11.8184L1.875 13.0137V4.68164L4.6875 3.46875ZM10.875 3.46875C10.6406 3.46875 10.4414 3.55078 10.2773 3.71484C10.1133 3.87891 10.0312 4.07812 10.0312 4.3125C10.0312 4.54688 10.1133 4.74609 10.2773 4.91016C10.4414 5.07422 10.6406 5.15625 10.875 5.15625C11.1094 5.15625 11.3086 5.07422 11.4727 4.91016C11.6367 4.74609 11.7188 4.54688 11.7188 4.3125C11.7188 4.07812 11.6367 3.87891 11.4727 3.71484C11.3086 3.55078 11.1094 3.46875 10.875 3.46875Z'
              fill='#626262'
            />
          </svg>

          <h4 className='text-custom-gray text-xs'>{dealership}</h4>
        </div>
        <div className='flex w-full items-center justify-center '>
          <div className=' border border-gray-200 flex flex-col p-4 items-center rounded-sm h-24 '>
            <svg
              width='25'
              height='25'
              viewBox='0 0 17 18'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M6.6543 0.59375L6.55176 1.12695L6.16211 3.0752C5.57422 3.30762 5.00684 3.64258 4.45996 4.08008L2.55273 3.42383L2.04004 3.25977L0.194336 6.45898L2.06055 8.09961L2.04004 8.28418C1.97168 8.65332 1.9375 8.93359 1.9375 9.125C1.9375 9.31641 1.97168 9.59668 2.04004 9.96582L2.06055 10.1504L0.194336 11.791L2.04004 14.9902L2.55273 14.8262L4.45996 14.1699C5.00684 14.6074 5.57422 14.9424 6.16211 15.1748L6.6543 17.6562H10.3457L10.8379 15.1748C11.4258 14.9424 11.9932 14.6074 12.54 14.1699L14.4473 14.8262L14.96 14.9902L16.8057 11.791L14.9395 10.1504L14.96 9.96582C15.0283 9.59668 15.0625 9.31641 15.0625 9.125C15.0625 8.93359 15.0283 8.65332 14.96 8.28418L14.9395 8.09961L16.8057 6.45898L14.96 3.25977L14.4473 3.42383L12.54 4.08008C11.9932 3.64258 11.4258 3.30762 10.8379 3.0752L10.3457 0.59375H6.6543ZM7.7207 1.90625H9.2793L9.68945 3.99805L10.0586 4.12109C10.8105 4.35352 11.4736 4.73633 12.0479 5.26953L12.335 5.53613L14.3652 4.83887L15.1445 6.17188L13.832 7.34082L13.5244 7.58691L13.627 7.97656C13.709 8.3457 13.75 8.72852 13.75 9.125C13.75 9.52148 13.709 9.9043 13.627 10.2734L13.5449 10.6631L15.1445 12.0781L14.3652 13.4111L12.335 12.7139L12.0479 12.9805C11.4736 13.5137 10.8105 13.8965 10.0586 14.1289L9.68945 14.252L9.2793 16.3438H7.7207L7.31055 14.252L6.94141 14.1289C6.18945 13.8965 5.52637 13.5137 4.95215 12.9805L4.66504 12.7139L2.63477 13.4111L1.85547 12.0781L3.16797 10.9092L3.47559 10.6631L3.37305 10.2734C3.29102 9.9043 3.25 9.52148 3.25 9.125C3.25 8.72852 3.29102 8.3457 3.37305 7.97656L3.47559 7.58691L3.16797 7.34082L1.85547 6.17188L2.63477 4.83887L4.66504 5.53613L4.95215 5.26953C5.52637 4.73633 6.18945 4.35352 6.94141 4.12109L7.31055 3.99805L7.39258 3.6084L7.7207 1.90625ZM8.5 5.84375C7.91211 5.84375 7.36523 5.99414 6.85938 6.29492C6.35352 6.58203 5.9502 6.97852 5.64941 7.48438C5.3623 7.99023 5.21875 8.53711 5.21875 9.125C5.21875 9.71289 5.3623 10.2598 5.64941 10.7656C5.9502 11.2715 6.35352 11.6748 6.85938 11.9756C7.36523 12.2627 7.91211 12.4062 8.5 12.4062C9.08789 12.4062 9.63477 12.2627 10.1406 11.9756C10.6465 11.6748 11.043 11.2715 11.3301 10.7656C11.6309 10.2598 11.7812 9.71289 11.7812 9.125C11.7812 8.53711 11.6309 7.99023 11.3301 7.48438C11.043 6.97852 10.6465 6.58203 10.1406 6.29492C9.63477 5.99414 9.08789 5.84375 8.5 5.84375ZM8.5 7.15625C9.04688 7.15625 9.51172 7.34766 9.89453 7.73047C10.2773 8.11328 10.4688 8.57812 10.4688 9.125C10.4688 9.67188 10.2773 10.1367 9.89453 10.5195C9.51172 10.9023 9.04688 11.0938 8.5 11.0938C7.95312 11.0938 7.48828 10.9023 7.10547 10.5195C6.72266 10.1367 6.53125 9.67188 6.53125 9.125C6.53125 8.57812 6.72266 8.11328 7.10547 7.73047C7.48828 7.34766 7.95312 7.15625 8.5 7.15625Z'
                fill='#903DF7'
              />
            </svg>

            <h2 className='text-custom-gray text-sm'>{engine}</h2>
            <h2 className=' text-sm'>{descriptionEngine}</h2>
          </div>
          <div className=' border border-gray-200 flex flex-col  p-4  items-center  rounded-sm h-24 '>
            <svg
              width='25'
              height='25'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M0.78125 0.90625V15.3438H15.2188V0.90625H0.78125ZM2.09375 2.21875H7.34375V7.46875H2.09375V2.21875ZM8.65625 2.21875H13.9062V7.46875H8.65625V2.21875ZM4.71875 3.53125L2.75 6.15625H6.6875L4.71875 3.53125ZM9.96875 3.53125V6.15625H12.5938V3.53125H9.96875ZM2.09375 8.78125H7.34375V14.0312H2.09375V8.78125ZM8.65625 8.78125H13.9062V14.0312H8.65625V8.78125ZM11.2812 9.4375L9.96875 11.4062L11.2812 13.375L12.5938 11.4062L11.2812 9.4375ZM4.71875 10.0938C4.34961 10.0938 4.03516 10.2236 3.77539 10.4834C3.5293 10.7295 3.40625 11.0371 3.40625 11.4062C3.40625 11.7754 3.5293 12.0898 3.77539 12.3496C4.03516 12.5957 4.34961 12.7188 4.71875 12.7188C5.08789 12.7188 5.39551 12.5957 5.6416 12.3496C5.90137 12.0898 6.03125 11.7754 6.03125 11.4062C6.03125 11.0371 5.90137 10.7295 5.6416 10.4834C5.39551 10.2236 5.08789 10.0938 4.71875 10.0938Z'
                fill='#903DF7'
              />
            </svg>
            <h2 className='text-custom-gray text-sm'>{category}</h2>
            <h2 className=' text-sm'>{descriptionCategory}</h2>
          </div>
          <div className=' border border-gray-200 flex flex-col  p-4  items-center  rounded-sm  h-24'>
            <svg
              width='25'
              height='25'
              viewBox='0 0 12 22'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M0.75 0.625V21.625H11.25V0.625H0.75ZM2.0625 1.9375H9.9375V3.90625H5.34375V5.21875H9.9375V6.53125H7.3125V7.84375H9.9375V9.15625H5.34375V10.4688H9.9375V11.7812H7.3125V13.0938H9.9375V14.4062H5.34375V15.7188H9.9375V17.0312H7.3125V18.3438H9.9375V20.3125H2.0625V1.9375Z'
                fill='#903DF7'
              />
            </svg>
            <h2 className='text-custom-gray text-sm'>{tallness}</h2>
            <h2 className=' text-sm'>{descriptionTallness}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMotorcycle;
