import { ArrowSmRightIcon, RefreshIcon } from '@heroicons/react/solid';
import { useRef, useState } from 'react';
import useSWR, { useSWRConfig } from 'swr';

// api
import { replaceFigure, uploadManualFigure } from 'api/passport';

// hooks
import { useToast } from 'context/toast';

interface Props {
  allowedPassports: number;
  availablePassports: number;
  linkID: string;
}

const HistoricalFiguresSearch = ({ linkID }: Props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFetching, setIsFetching] = useState(false);
  const [manualFigureURL, setManualFigureURL] = useState(false);
  const [refreshedImages, setRefreshedImages] = useState<Array<string>>([]);

  const searchInputRef = useRef(null);

  const toast = useToast();
  const { mutate } = useSWRConfig();

  const figureLookupAPIKey = searchTerm
    ? `/api/v3/passport/avatar-lookup?term=${searchTerm}`
    : '';
  const { data: figures, error, isValidating } = useSWR(figureLookupAPIKey);
  const isLoadingFigures = (!error && !figures) || isValidating;

  //--------------------------------------------------------------------------------------------------------------------
  const handleFileUpload = async (file: File) => {
    setIsFetching(true);
    const formData = new FormData();
    formData.append('figure', file);

    try {
      const { url } = await uploadManualFigure(formData);

      setManualFigureURL(url);
    } catch (error) {
      toast({
        message: error,
      });
    }
    setIsFetching(false);
  };

  const handleRefresh = async ({ url }: { url: string }) => {
    setIsFetching(true);
    try {
      const newRefreshedImages = [...refreshedImages, url];
      const newFigure = await replaceFigure({
        term: searchTerm,
        ignoreUrls: [...newRefreshedImages, ...figures!.images],
      });

      setRefreshedImages(newRefreshedImages);
      mutate(
        figureLookupAPIKey,
        (data: any) => ({
          ...data,
          images: data.images.map((image: string) =>
            image === url ? newFigure : image
          ),
        }),
        false
      );
    } catch (error) {
      if (error.code === 204) {
        setRefreshedImages([]);
      }

      toast({
        message: error,
      });
    }
    setIsFetching(false);
  };

  const renderLoading = () => (
    <>
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
    </>
  );

  //--------------------------------------------------------------------------------------------------------------------
  return (
    <>
      <div className="px-4 xl:px-0">
        <h3 className="mt-3 max-w-sm mx-auto font-bold lg:text-2xl sm:text-xl md:mt-5">
          Welcome to the Sapien Tribe!
        </h3>
        <p className="mt-3 max-w-lg mx-auto text-md font-light py-4 text-gray-500 sm:text-xl md:mt-5">
          To claim your passport please input your favorite historical figure.
          Your choice of figure should reflect values your yourself will
          champion as a member of our tribe.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="relative mt-6 max-w-sm w-full">
          <input
            ref={searchInputRef}
            id="search"
            name="search"
            className="block w-full h-12 px-3 py-2 border border-gray-300 rounded-3xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
            placeholder="Name"
            type="search"
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                setSearchTerm((event as any).target.value);
              }
            }}
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
            <ArrowSmRightIcon
              onClick={() => {
                setSearchTerm(searchInputRef.current.value);
              }}
              className="h-8 w-8 text-white bg-purple-500 rounded-full"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
      {searchTerm && (
        <main className="lg:relative">
          <div className="mx-auto max-w-6xl w-full pt-16 px-4 xl:px-0">
            <ul
              role="list"
              className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
            >
              {isLoadingFigures
                ? renderLoading()
                : figures?.images.map((image, index) => (
                    <li
                      key={index}
                      className="relative"
                      onClick={() => handleRefresh({ url: image })}
                    >
                      <div className="group flex cursor-pointer	justify-center items-center w-full h-72 aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                        <button className="text-white z-10 absolute opacity-0 group-hover:opacity-100">
                          <RefreshIcon
                            className={
                              isFetching ? `animate-spin h-5 w-5` : `h-5 w-5`
                            }
                          />
                        </button>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={image}
                          alt="Figure"
                          className="object-cover h-full w-full pointer-events-none group-hover:opacity-75"
                        />
                      </div>
                    </li>
                  ))}
            </ul>
            <div className="mt-10 flex flex-col justify-center items-center">
              <div className="rounded-full shadow mt-14 mb-6">
                <button
                  disabled={isLoadingFigures || isFetching}
                  type="button"
                  className={`flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10 ${
                    isFetching || isLoadingFigures
                      ? 'pointer-events-none cursor-not-allowed'
                      : ''
                  }`}
                >
                  Continue
                </button>
              </div>
              <div>
                or{' '}
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                  <span>Browse</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                  />
                </label>{' '}
                files to upload your own image
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default HistoricalFiguresSearch;
