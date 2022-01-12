import { useState } from 'react';

// api
import { createPassport } from 'api/passport';

// components
import FiguresGallery from './FiguresGallery';
import FiguresLookup from './FiguresLookup';

// constants
import { View as PassportViews } from 'pages/passport/[linkID]';

// context
import { useToast } from 'context/toast';

// types
import type { Figure } from 'types/figure';

interface Props {
  linkID: string;
  setPassportView: (view: PassportViews) => void;
}

const FigureView = ({ linkID, setPassportView }: Props) => {
  const [figure, setFigure] = useState<Figure | null>(null);
  const [isManual, setIsManual] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [isSearching, setSearching] = useState(false);
  const [passportFile, setPassportFile] = useState<File | null>(null);

  const toast = useToast();

  const handleContinue = async () => {
    setPassportView(PassportViews.Loading);
    try {
      const formData = new FormData();

      formData.append('distributionId', linkID);
      formData.append('image', passportFile);
      formData.append('figureName', figure.name);
      formData.append('isManual', isManual ? 'true' : 'false');

      // await createPassport(formData);

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
      <div
        className={`transition delay-150 duration-300 ease-in-out ${
          isSearching ? 'scale-75 -translate-y-1/4' : 'px-4 xl:px-0 '
        }`}
      >
        <h3
          className={`mt-3 max-w-sm mx-auto font-bold md:mt-5 lg:text-2xl sm:text-xl`}
        >
          Welcome to the{' '}
          <span className="underline decoration-4 decoration-sapien">
            Sapien Tribe!
          </span>
        </h3>
        <p
          className={`mt-3 max-w-lg mx-auto text-md font-light py-4 text-gray-500 sm:text-xl md:mt-5 transition delay-150 duration-300 ease-in-out ${
            isSearching ? 'scale-75' : ''
          }`}
        >
          To claim your passport please input your favorite historical figure.
          Your choice of figure should reflect the values you will champion as a{' '}
          <span className="underline decoration-4 decoration-purple-200">
            member of our tribe.
          </span>
        </p>
      </div>
      <div
        className={`transition delay-150 duration-300 ease-in-out ${
          isSearching ? '-translate-y-20' : ''
        }`}
      >
        <FiguresLookup
          onFigureSelect={(selectedFigure) => setFigure(selectedFigure)}
          setSearching={setSearching}
          onSelect={setPassportFile}
        />
        <main className="lg:relative">
          <div className="mx-auto max-w-6xl w-full pt-16 px-4 xl:px-0">
            {figure && (
              <FiguresGallery
                name={figure.name}
                onSelect={(file) => setPassportFile(file)}
                setIsFetching={setIsFetching}
                setIsManual={setIsManual}
              />
            )}
            <div className="mt-20 sticky -bottom-10 flex flex-col justify-center items-center">
              {Boolean(passportFile) && (
                <button
                  disabled={isFetching}
                  type="button"
                  className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-sapien hover:bg-sapien-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${
                    isFetching ? 'animate-pulse' : ''
                  }`}
                  onClick={handleContinue}
                >
                  Generate Avatar
                </button>
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default FigureView;
