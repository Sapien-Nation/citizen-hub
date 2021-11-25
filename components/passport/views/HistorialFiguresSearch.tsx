import { useState } from 'react';
import useSWR, { useSWRConfig } from 'swr';

// tailwind ui
import { ArrowSmRightIcon } from '@heroicons/react/solid';

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

  const toast = useToast();
  const { mutate } = useSWRConfig();

  const figureLookupAPIKey = searchTerm
    ? `/api/v3/passport/avatar-lookup?term=${searchTerm}`
    : '';
  const { data: figures, error, isValidating } = useSWR(figureLookupAPIKey);
  const isLoadingFigures = (!error && !figures) || isValidating;

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

  return (
    <div className="bg-gray-50">
      <main className="lg:relative">
        <div className="mx-auto max-w-6xl w-full pt-16 pb-20 text-center lg:py- lg:text-center">
          <h3 className="mt-3 max-w-sm mx-auto font-bold lg:text-2xl sm:text-xl md:mt-5">
            Welcome to the Sapien Tribe!
          </h3>
          <p className="mt-3 max-w-lg mx-auto text-md font-light py-4 text-gray-500 sm:text-xl md:mt-5">
            To claim your passport please input your favorite historical figure.
            Your choice of figure should reflect values your yourself will
            champion as a member of our tribe.
          </p>
          <div className="flex justify-center items-center">
            <div className="relative mt-6 max-w-sm w-full">
              <input
                id="search"
                name="search"
                className="block w-full h-12 px-3 py-2 border border-gray-300 rounded-3xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                placeholder="Name"
                type="search"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <ArrowSmRightIcon
                  className="h-8 w-8 text-white bg-purple-500 rounded-full"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      {searchTerm && <span>TODO show UI here</span>}
    </div>
  );
};

export default HistoricalFiguresSearch;
