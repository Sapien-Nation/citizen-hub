import { useState } from 'react';
import { CheckCircleIcon } from '@heroicons/react/solid';
import Image from 'next/image';

// context
import { useToast } from 'context/toast';

// components
import { Query } from 'components/common';

// types
import type { Figure } from 'types/figure';

interface Avatar extends Figure {
  image: File;
}

interface Props {
  avatar: Avatar;
}

const HistoricalFiguresSearch = ({ avatar }: Props) => {
  const [isFetching, setIsFetching] = useState(false);

  const toast = useToast();

  const handleCreatePassport = async () => {
    setIsFetching(true);
    try {
      // TODO
    } catch (error) {
      toast({
        message: error,
      });
    }
    setIsFetching(false);
  };

  return (
    <>
      <div className="px-4 xl:px-0">
        <p className="mt-3 max-w-lg mx-auto text-md font-light py-4 text-gray-500 sm:text-xl md:mt-5">
          We’ve produced an stylizated version of the image you provide.
        </p>
      </div>
      <main className="lg:relative">
        <div className="mx-auto max-w-6xl w-full pt-16 px-4 xl:px-0">
          <div className="flex justify-center">
            {/* // eslint-disable-next-line @next/next/no-img-element */}
            <img src={URL.createObjectURL(avatar.image)} alt={avatar.name} />
          </div>
          <div className="mt-20 sticky bottom-10 flex flex-col justify-center items-center">
            <button
              disabled={isFetching}
              type="button"
              className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-sapien hover:bg-sapien-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${
                isFetching ? 'animate-pulse' : ''
              }`}
              onClick={handleCreatePassport}
            >
              Generate Passport
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default HistoricalFiguresSearch;
