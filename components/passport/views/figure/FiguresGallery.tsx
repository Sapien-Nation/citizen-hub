import { RefreshIcon, XIcon, CheckCircleIcon } from '@heroicons/react/solid';
import { useEffect, useRef, useState } from 'react';
import useSWR, { useSWRConfig } from 'swr';

// api
import { replaceFigure } from 'api/passport';

// components
import ErrorView from '../FeedbackView';

// context
import { useToast } from 'context/toast';

// utils
import { mergeClassNames } from 'utils/styles';

interface Props {
  name: string;
  onSelect: (file: File) => void;
  setIsFetching: (isFetching: boolean) => void;
  setIsManual: (isManual: boolean) => void;
}

interface ManualFile {
  file: File;
  preview: string;
}

const FiguresGallery = ({
  name,
  onSelect,
  setIsFetching,
  setIsManual,
}: Props) => {
  const [manualFiles, setManualFiles] = useState<Array<ManualFile>>([]);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [refreshedImages, setRefreshedImages] = useState<Array<string>>([]);

  const toast = useToast();
  const fileRef = useRef();
  const { mutate } = useSWRConfig();

  const apiKey = `/api/v3/passport/avatar-lookup?term=${name}`;
  const { data, error } = useSWR<{ images: Array<string> }>(apiKey);

  const loadingData = !error && !data;

  const generateImageFile = async (image: string) => {
    try {
      const fetchedImage = await fetch(image, { mode: 'no-cors' });
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
      setIsManual(false);
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
        message: error?.message ?? 'No more relevant images found',
      });
    }
    setIsRefreshing(false);
  };

  useEffect(
    () => setIsFetching(loadingData || isRefreshing),
    [isRefreshing, loadingData, setIsFetching]
  );

  if (error) {
    if (error === 'Historic Figure is not valid') {
      return <ErrorView code={408} />;
    }

    return <ErrorView code={407} />;
  }

  if (loadingData) {
    return (
      <ul
        role="list"
        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
      >
        <li className="animate-pulse relative">
          <div className="group block w-full h-72 aspect-w-10 aspect-h-7 rounded-lg bg-gradient-to-r from-purple-900 to-indigo-800 mix-blend-multiply focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden"></div>
        </li>
        <li className="animate-pulse relative">
          <div className="group block w-full h-72 aspect-w-10 aspect-h-7 rounded-lg bg-gradient-to-r from-purple-900 to-indigo-800 mix-blend-multiply focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden"></div>
        </li>
        <li className="animate-pulse relative">
          <div className="group block w-full h-72 aspect-w-10 aspect-h-7 rounded-lg bg-gradient-to-r from-purple-900 to-indigo-800 mix-blend-multiply focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden"></div>
        </li>
        <li className="animate-pulse relative">
          <div className="group block w-full h-72 aspect-w-10 aspect-h-7 rounded-lg bg-gradient-to-r from-purple-900 to-indigo-800 mix-blend-multiply focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden"></div>
        </li>
      </ul>
    );
  }

  return (
    <>
      <ul
        role="list"
        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-5 xl:gap-x-8"
      >
        {data.images.map((image, index) => (
          <li key={index} className="relative transition ease-in-out">
            {isRefreshing && image === selectedImage ? (
              <div className="flex justify-center items-center animate-pulse group w-full h-56 rounded-lg bg-gray-200 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                <RefreshIcon className="animate-spin h-5 w-5 text-gray-700" />
              </div>
            ) : (
              <div
                className={mergeClassNames(
                  image === selectedImage ? 'ring-2 ring-indigo-500' : '',
                  'group flex cursor-pointer justify-center items-center w-full aspect-w-10 h-56 aspect-h-7 rounded-lg bg-gray-100 overflow-hidden after:absolute hover:after:bg-black hover:after:bg-opacity-30 hover:after:w-full hover:after:h-full hover:after:top-0'
                )}
                onClick={async () => {
                  await handleImageSelect(image);
                }}
              >
                {image === selectedImage && (
                  <CheckCircleIcon className="h-5 w-5 text-purple-900 absolute right-2 top-2 left-auto z-10 drop-shadow-lg" />
                )}

                <button
                  className="text-white z-10 w-12 text-center h-12 absolute inset-y-1/2 inset-x-1/2 -translate-x-1/2 -translate-y-1/2 hidden flex-row justify-center items-center bg-black bg-opacity-30 rounded-md group-hover:flex"
                  onClick={(event) => {
                    event.stopPropagation();
                    setSelectedImage(image);
                    handleRefresh(image);
                  }}
                >
                  <RefreshIcon className="h-5 w-5 text-white" />
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
              </div>
            )}
          </li>
        ))}
        {manualFiles.map(({ file, preview }, index) => (
          <li
            key={index}
            className="relative transition ease-in-out hover:scale-105"
          >
            <div
              className={mergeClassNames(
                selectedImage === preview ? 'ring-2 ring-indigo-500' : '',
                'group flex cursor-pointer justify-center items-center w-full aspect-w-10 h-56 aspect-h-7 rounded-lg bg-gray-100 overflow-hidden'
              )}
              onClick={() => {
                onSelect(file);
                setSelectedImage(preview);
                setIsManual(true);
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={preview}
                alt={`Search Image result for search term ${name}`}
                className="object-cover h-full w-full pointer-events-none group-hover:opacity-75"
                onError={(event) => {
                  (event.target as HTMLImageElement).src =
                    'https://d151dmflpumpzp.cloudfront.net/images/tribes/default_temp.jpeg';
                }}
              />
            </div>
          </li>
        ))}
        <li
          className="relative transition ease-in-out"
          onClick={() => {
            // @ts-ignore
            fileRef.current.click();
          }}
        >
          <div className="group flex cursor-pointer justify-center items-center w-full h-56 rounded-lg bg-gray-100 overflow-hidden border-4 border-dashed border-gray-200">
            <div className="text-center">
              <svg
                className="animate-bounce mx-auto h-8 w-8 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="mt-2 leading-normal text-sm text-gray-700">
                Upload <span className="text-sapien-60">{name}</span> image
                manually
              </span>
              <p className="text-xs text-gray-500 mt-2">
                PNG, JPG, GIF up to 10MB
              </p>
              <input
                type="file"
                className="hidden"
                ref={fileRef}
                onChange={async (event) => {
                  const file = event.target.files[0];
                  const preview = URL.createObjectURL(file);
                  try {
                    setManualFiles([
                      ...manualFiles,
                      {
                        preview,
                        file,
                      },
                    ]);
                    onSelect(file);
                    setSelectedImage(preview);
                    setIsManual(true);
                  } catch (err) {
                    toast({
                      message: err?.message ?? 'No more relevant images found',
                    });
                  }
                }}
              />
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};

export default FiguresGallery;
