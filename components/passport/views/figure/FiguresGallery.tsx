import { RefreshIcon } from '@heroicons/react/solid';
import { useEffect, useState } from 'react';
import useSWR, { useSWRConfig } from 'swr';

// api
import { replaceFigure } from 'api/passport';

// context
import { useToast } from 'context/toast';

// utils
import { mergeClassNames } from 'utils/styles';

interface Props {
  name: string;
  onSelect: (file: File) => void;
  setView: () => void;
  setIsLoading: (isLoading: boolean) => void;
}

const FiguresGallery = ({ name, onSelect, setView, setIsLoading }: Props) => {
  const [refreshedImages, setRefreshedImages] = useState<Array<string>>([]);
  const [isRefreshing, setRefreshing] = useState<boolean>(false);
  const [selectedImageToRefresh, setSelectedImageToRefresh] = useState<
    string | null
  >(null);

  const toast = useToast();
  const { mutate } = useSWRConfig();

  const apiKey = `/api/v3/passport/avatar-lookup?term=${name}`;
  const { data, error, isValidating } =
    useSWR<{ images: Array<string> }>(apiKey);

  const isLoading = (!error && !data) || isValidating;

  const handleRefresh = async (url: string) => {
    setIsLoading(true);
    setRefreshing(true);
    try {
      const newRefreshedImages = [...refreshedImages, url];
      const newFigure = await replaceFigure({
        term: name,
        ignoreUrls: [...newRefreshedImages, ...data!.images],
      });

      setRefreshedImages(newRefreshedImages);
      mutate(
        apiKey,
        (data: any) => ({
          ...data,
          images: data.images.map((image: string) =>
            image === url ? newFigure : image
          ),
        }),
        false
      );
    } catch (err) {
      if (err?.code === 204) {
        setRefreshedImages([]);
      }
      toast({
        message: error.message,
      });
    }
    setRefreshing(false);
    setSelectedImageToRefresh(null);
    setIsLoading(false);
  };

  useEffect(() => setIsLoading(isLoading), [isLoading, setIsLoading]);

  if (isLoading) {
    return (
      <ul
        role="list"
        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
      >
        <li className="animate-pulse relative">
          <div className="group block w-full h-72 aspect-w-10 aspect-h-7 rounded-lg bg-gray-200 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden"></div>
        </li>
        <li className="animate-pulse relative">
          <div className="group block w-full h-72 aspect-w-10 aspect-h-7 rounded-lg bg-gray-200 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden"></div>
        </li>
        <li className="animate-pulse relative">
          <div className="group block w-full h-72 aspect-w-10 aspect-h-7 rounded-lg bg-gray-200 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden"></div>
        </li>
        <li className="animate-pulse relative">
          <div className="group block w-full h-72 aspect-w-10 aspect-h-7 rounded-lg bg-gray-200 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden"></div>
        </li>
      </ul>
    );
  }
  return (
    <>
      <ul
        role="list"
        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
      >
        {data.images.map((image, index) => (
          <div key={index}>
            {isRefreshing && image === selectedImageToRefresh ? (
              <li className="animate-pulse relative">
                <div className="group block w-full h-72 aspect-w-10 aspect-h-7 rounded-lg bg-gray-200 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden"></div>
              </li>
            ) : (
              <li
                className={mergeClassNames(
                  image === selectedImageToRefresh
                    ? 'ring-2 ring-indigo-500'
                    : '',
                  'group flex cursor-pointer	justify-center items-center w-full h-72 aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 overflow-hidden'
                )}
                onClick={async () => {
                  const blob = await (await fetch(image)).blob();
                  const imageFile = new File([blob], 'image.jpg', {
                    type: blob.type,
                  });
                  onSelect(imageFile);
                  setSelectedImageToRefresh(image);
                }}
              >
                <button
                  className="text-white z-10 absolute opacity-0 group-hover:opacity-100"
                  onClick={(event) => {
                    event.stopPropagation();
                    setSelectedImageToRefresh(image);
                    handleRefresh(image);
                  }}
                >
                  <RefreshIcon
                    className={isLoading ? `animate-spin h-5 w-5` : `h-5 w-5`}
                  />
                </button>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image}
                  alt={`Search Image result for search term ${name}`}
                  className="object-cover h-full w-full pointer-events-none group-hover:opacity-75"
                  onError={(event) => {
                    (event.target as HTMLImageElement).src =
                      'https://d151dmflpumpzp.cloudfront.net/images/tribes/default_temp.jpeg';
                  }}
                />
              </li>
            )}
          </div>
        ))}
      </ul>
      <div className="mt-12">
        <h2 className="text-lg font-medium text-gray-900">
          Dont Find what you where looking for?
        </h2>
        <button type="button" className="text-center" onClick={setView}>
          <p className="mt-5 text-sm text-gray-500">Upload your own image</p>
        </button>
      </div>
    </>
  );
};

export default FiguresGallery;
