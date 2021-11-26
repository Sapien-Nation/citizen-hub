import { ArrowSmRightIcon } from '@heroicons/react/solid';
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
  const handleSearch = () => {
    setSearchTerm('');
  };

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
      <h3 className="mt-3 max-w-sm mx-auto font-bold lg:text-2xl sm:text-xl md:mt-5">
        Welcome to the Sapien Tribe!
      </h3>
      <p className="mt-3 max-w-lg mx-auto text-md font-light py-4 text-gray-500 sm:text-xl md:mt-5">
        To claim your passport please input your favorite historical figure.
        Your choice of figure should reflect values your yourself will champion
        as a member of our tribe.
      </p>
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
          <div className="mx-auto max-w-6xl w-full pt-16 pb-20 lg:py-20">
            <ul
              role="list"
              className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
            >
              {isLoadingFigures
                ? renderLoading()
                : figures?.images.map((image, index) => (
                    <li key={index} className="relative">
                      <div className="group block w-full h-72 aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                        <img
                          src={image}
                          alt="Figure"
                          className="object-cover h-full w-full pointer-events-none group-hover:opacity-75"
                        />
                      </div>
                    </li>
                  ))}
              {}
            </ul>
          </div>
        </main>
      )}
    </>
  );
};

export default HistoricalFiguresSearch;
