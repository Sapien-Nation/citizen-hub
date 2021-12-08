import { useState } from 'react';

// api
import { createPassport } from 'api/passport';

// components
import FiguresGallery from './FiguresGallery';
import FigureImageUpload from './FigureImageUpload';
import FiguresLookup from './FiguresLookup';

// constants
import { View as PassportViews } from 'pages/passport/[linkID]';

// context
import { useToast } from 'context/toast';

// types
import type { Figure } from 'types/figure';

enum View {
  FigureGallery,
  FigureImageUpload,
}

interface Props {
  linkID: string;
  setPassportView: (view: PassportViews) => void;
}

const FigureView = ({ linkID, setPassportView }: Props) => {
  const [view, setView] = useState<View>(View.FigureGallery);
  const [figure, setFigure] = useState<Figure | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const [passportFile, setPassportFile] = useState<File | null>(null);

  const toast = useToast();

  const renderView = () => {
    switch (view) {
      case View.FigureGallery:
        return (
          <FiguresGallery
            name={figure.name}
            onSelect={(file) => setPassportFile(file)}
            setView={() => setView(View.FigureImageUpload)}
            setIsFetching={setIsFetching}
          />
        );
      case View.FigureImageUpload:
        return (
          <FigureImageUpload
            setView={() => setView(View.FigureGallery)}
            setFile={(file) => setPassportFile(file)}
          />
        );
    }
  };

  const handleContinue = async () => {
    setPassportView(PassportViews.Loading);
    try {
      const formData = new FormData();

      formData.append('distributionId', linkID);
      formData.append('image', passportFile);
      formData.append('figureName', figure.name);
      formData.append(
        'isManual',
        view === View.FigureImageUpload ? 'true' : 'false'
      );

      await createPassport(formData);

      setPassportView(PassportViews.Avatar);
    } catch (error) {
      toast({
        message: error ?? 'Error Creating Passport, please try another figure',
      });
      setPassportView(PassportViews.Figure);
    }
    setIsFetching(false);
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
          {figure && renderView()}
          <div className="mt-10 flex flex-col justify-center items-center">
            {Boolean(passportFile) && (
              <div className="rounded-full shadow mt-14 mb-6">
                <button
                  disabled={isFetching}
                  type="button"
                  className={`flex items-center bg-purple-600 hover:bg-purple-700 justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white md:py-4 md:text-lg md:px-10 ${
                    isFetching ? 'animate-pulse' : ''
                  }`}
                  onClick={handleContinue}
                >
                  Generate Avatar
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default FigureView;
