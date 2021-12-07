import { RefreshIcon } from '@heroicons/react/solid';
import useSWR from 'swr';

// types
import type { Figure } from 'types/figure';

interface Props {
  figure: Figure;
}

const FiguresGallery = ({ figure }: Props) => {
  const { data, error, isValidating } = useSWR<{ images: Array<string> }>(
    `/api/v3/passport/avatar-lookup?term=${figure.name}`
  );
  const isLoading = (!error && !data) || isValidating;

  if (isLoading) {
    return (
      <ul
        role="list"
        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
      >
        <li className="animate-pulse relative">
          <div className="group block w-full h-72 aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden"></div>
        </li>
        <li className="animate-pulse relative">
          <div className="group block w-full h-72 aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden"></div>
        </li>
        <li className="animate-pulse relative">
          <div className="group block w-full h-72 aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden"></div>
        </li>
        <li className="animate-pulse relative">
          <div className="group block w-full h-72 aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden"></div>
        </li>
      </ul>
    );
  }
  return (
    <ul
      role="list"
      className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
    >
      {data.images.map((image, index) => (
        <li key={index} className="relative">
          <div className="group flex cursor-pointer	justify-center items-center w-full h-72 aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
            <button className="text-white z-10 absolute opacity-0 group-hover:opacity-100">
              <RefreshIcon
                className={isLoading ? `animate-spin h-5 w-5` : `h-5 w-5`}
              />
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt={`Search Image result for search term ${figure.name}`}
              className="object-cover h-full w-full pointer-events-none group-hover:opacity-75"
              onError={(event) => {
                (event.target as HTMLImageElement).src =
                  'https://d151dmflpumpzp.cloudfront.net/images/tribes/default_temp.jpeg';
              }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FiguresGallery;
