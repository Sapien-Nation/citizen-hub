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
  setIsFetching: (isFetching: boolean) => void;
}

const FiguresGallery = ({ name, onSelect, setView, setIsFetching }: Props) => {
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [refreshedImages, setRefreshedImages] = useState<Array<string>>([]);

  const toast = useToast();
  const { mutate } = useSWRConfig();

  const apiKey = `/api/v3/passport/avatar-lookup?term=${name}`;
  const { data, error, isValidating } =
    useSWR<{ images: Array<string> }>(apiKey);

  const loadingData = (!error && !data) || isValidating;

  const generateImageFile = async (image: string) => {
    try {
      const fetchedImage = await fetch(image);
      const blob = await fetchedImage.blob();
      return new File([blob], name, {
        type: blob.type,
      });
    } catch (err) {
      toast({
        message: error.message,
      });
    }
  };

  const handleImageSelect = async (image: string, handleFetch = true) => {
    if (handleFetch) {
      setIsFetching(true);
    }
    try {
      const imageFile = await generateImageFile(image);
      onSelect(imageFile);
      setSelectedImage(image);
    } catch (error) {
      toast({
        message:
          'There was an Error selecting this image, please select another one',
      });
      setSelectedImage(null);
      onSelect(null);
    }
    if (handleFetch) {
      setIsFetching(false);
    }
  };

  const handleRefresh = async (url: string) => {
    setIsRefreshing(true);
    try {
      const newRefreshedImages = [...refreshedImages, url];
      const newFigure = await replaceFigure({
        term: name,
        ignoreUrls: [...newRefreshedImages, ...data!.images],
      });

      await handleImageSelect(newFigure, false);

      setRefreshedImages(newRefreshedImages);
      mutate(
        apiKey,
        (data: { images: Array<string> }) => ({
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
    setIsRefreshing(false);
  };

  useEffect(
    () => setIsFetching(loadingData || isRefreshing),
    [isRefreshing, loadingData, setIsFetching]
  );

  if (loadingData) {
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
            {isRefreshing && image === selectedImage ? (
              <li className="animate-pulse relative">
                <div className="absolute group block w-full h-72 aspect-w-10 aspect-h-7 rounded-lg bg-gray-200 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                  <RefreshIcon className="animate-spin h-5 w-5" />
                </div>
              </li>
            ) : (
              <li
                className={mergeClassNames(
                  image === selectedImage ? 'ring-2 ring-indigo-500' : '',
                  'group flex cursor-pointer	justify-center items-center w-full h-72 aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 overflow-hidden'
                )}
                onClick={async () => {
                  await handleImageSelect(image);
                }}
              >
                <button
                  className="text-white z-10 absolute opacity-0 group-hover:opacity-100"
                  onClick={(event) => {
                    event.stopPropagation();
                    setSelectedImage(image);
                    handleRefresh(image);
                  }}
                >
                  <RefreshIcon className="h-5 w-5" />
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
