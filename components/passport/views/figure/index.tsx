import { useState } from 'react';

// api
import { uploadManualFigure } from 'api/passport';

// components
import FiguresGallery from './FiguresGallery';
import FiguresLookup from './FiguresLookup';

// hooks
import { useToast } from 'context/toast';

// types
import type { Figure } from 'types/figure';

interface Props {
  allowedPassports: number;
  availablePassports: number;
  linkID: string;
}

const HistoricalFiguresSearch = (_: Props) => {
  const [figure, setFigure] = useState<Figure | null>(null);
  const [fileURL, setFileURL] = useState<string | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const [selectedFigureImage, setSelectedFigureImage] = useState<string | null>(
    null
  );

  const toast = useToast();

  const handleFileUpload = async (event) => {
    setIsFetching(true);
    const formData = new FormData();
    formData.append('figure', event.target.files[0]);

    try {
      const { url } = await uploadManualFigure(formData);

      setFileURL(url);
    } catch (error) {
      toast({
        message: error,
      });
    }
    setIsFetching(false);
  };

  const noImage = selectedFigureImage === null || fileURL === null;
  return (
    <>
      <div className="px-4 xl:px-0">
        <h3 className="mt-3 max-w-sm mx-auto font-bold lg:text-2xl sm:text-xl md:mt-5">
          Welcome to the Sapien Tribe!
        </h3>
        <p className="mt-3 max-w-lg mx-auto text-md font-light py-4 text-gray-500 sm:text-xl md:mt-5">
          To claim your passport please input your favorite historical figure.
          Your choice of figure should reflect the values you will champion as a
          member of our tribe.
        </p>
      </div>
      <FiguresLookup
        onFigureSelect={(selectedFigure) => setFigure(selectedFigure)}
      />
      <main className="lg:relative">
        <div className="mx-auto max-w-6xl w-full pt-16 px-4 xl:px-0">
          {figure && <FiguresGallery figure={figure} />}
          <div className="mt-10 flex flex-col justify-center items-center">
            <div className="rounded-full shadow mt-14 mb-6">
              <button
                disabled={noImage || isFetching}
                type="button"
                className={`flex items-center bg-purple-600 hover:bg-purple-700 justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white md:py-4 md:text-lg md:px-10 ${
                  noImage || isFetching
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
                  onChange={handleFileUpload}
                />
              </label>{' '}
              files to upload your own image{' '}
              {selectedFigureImage && fileURL
                ? 'We will use the image uploaded for the passport creation'
                : ''}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HistoricalFiguresSearch;
