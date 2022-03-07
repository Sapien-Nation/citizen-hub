import { useState } from 'react';

// api
import { createStyledAvatar } from 'api/passport';

// components
import FiguresGallery from './FiguresGallery';
import FiguresLookup from './FiguresLookup';

// constants
import { View as PassportViews } from 'pages/passport/[linkID]';

// context
import { useToast } from 'context/toast';

// types
import type { Figure } from 'types/figure';

interface Avatar extends Figure {
  image: File;
}

interface Props {
  linkID: string;
  setAvatar: (data: Avatar) => void;
  setPassportView: (view: PassportViews) => void;
}

const FigureView = ({ setAvatar, setPassportView }: Props) => {
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
      formData.append('IMAGE', passportFile);
      const [{ fileName, imageData, mimeType }] = await createStyledAvatar(
        formData
      );

      const res = await fetch(imageData);
      const blob = await res.blob();
      const file = new File([blob], fileName, { type: mimeType });
      setAvatar({
        image: file,
        ...figure,
      });
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
        <p
          className={`max-w-lg mx-auto text-md font-light text-gray-500 sm:text-xl md:mt-5 transition delay-150 duration-300 ease-in-out ${
            isSearching ? 'scale-75' : ''
          }`}
        >
          To claim your passport please input your favorite historical figure.
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
          onSelect={(file) => setPassportFile(file)}
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
