import { useState } from 'react';
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
    <div>
      <h1>Welcome to the Sapien Tribe</h1>
      <span>
        To claim your passport please input your favorite historical figure.
        Your choice of figure should reflect the values you will champion as a
        member of our tribe.
      </span>
      {searchTerm && <span>TODO show UI here</span>}
    </div>
  );
};

export default HistoricalFiguresSearch;
