import { useState } from 'react';

// api
import { createPassport } from 'api/passport';

// components
import FiguresGallery from './FiguresGallery';
import FigureImageUpload from './FigureImageUpload';
import FiguresLookup from './FiguresLookup';

// context
import { useToast } from 'context/toast';

// types
import type { Figure } from 'types/figure';

enum View {
  Gallery,
  ImageUpload,
}

interface Props {
  allowedPassports: number;
  availablePassports: number;
  linkID: string;
}

const HistoricalFiguresSearch = ({ linkID }: Props) => {
  const [view, setView] = useState<View>(View.Gallery);
  const [figure, setFigure] = useState<Figure | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [passportFile, setPassportFile] = useState<File | null>(null);

  const toast = useToast();

  const renderView = () => {
    if (figure === null) return null;
    switch (view) {
      case View.Gallery:
        return (
          <FiguresGallery
            name={figure.name}
            onSelect={(file) => setPassportFile(file)}
            setView={() => setView(View.ImageUpload)}
            setIsLoading={setIsLoading}
          />
        );
      case View.ImageUpload:
        return (
          <FigureImageUpload
            setView={() => setView(View.Gallery)}
            setFile={(file) => setPassportFile(file)}
          />
        );
    }
  };

  const handleContinue = async () => {
    try {
      const formData = new FormData();

      formData.append('distributionId', linkID);
      formData.append('avatar', passportFile);
      formData.append('figure', figure.name);

      await createPassport(formData);
    } catch (error) {
      toast({
        message: error,
      });
    }
  };

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
          {renderView()}
          <div className="mt-10 flex flex-col justify-center items-center">
            {Boolean(passportFile) && (
              <div className="rounded-full shadow mt-14 mb-6">
                <button
                  disabled={isLoading}
                  type="button"
                  className="flex items-center bg-purple-600 hover:bg-purple-700 justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white md:py-4 md:text-lg md:px-10"
                  onClick={handleContinue}
                >
                  Continue
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default HistoricalFiguresSearch;
