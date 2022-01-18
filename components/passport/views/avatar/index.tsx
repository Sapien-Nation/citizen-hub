import { useState } from 'react';
import { CheckCircleIcon } from '@heroicons/react/solid';
import Image from 'next/image';

// context
import { useToast } from 'context/toast';

// components
import { Query } from 'components/common';

// utils
import { mergeClassNames } from 'utils/styles';

interface Props {
  linkID: string;
}

const HistoricalFiguresSearch = ({ linkID }: Props) => {
  const [avatar, setAvatar] = useState<string | null>(null);
  const [isFetching, setIsFetching] = useState(false);

  const toast = useToast();

  const handleContinue = async () => {
    setIsFetching(true);
    try {
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
          We’ve produced several stylizations for you. Whichever you choose will
          be your new passport avatar
        </p>
      </div>
      <main className="lg:relative">
        <div className="mx-auto max-w-6xl w-full pt-16 px-4 xl:px-0">
          <ul
            role="list"
            className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-5 xl:gap-x-8"
          >
            <Query
              api="/api/v3/passport/avatar"
              options={{
                fetcher: () => [
                  'https://via.placeholder.com/150?id=0',
                  'https://via.placeholder.com/150?id=1',
                  'https://via.placeholder.com/150?id=2',
                  'https://via.placeholder.com/150?id=3',
                  'https://via.placeholder.com/150?id=4',
                  'https://via.placeholder.com/150?id=5',
                ],
              }}
            >
              {(data: Array<string>) => (
                <>
                  {data.map((image) => (
                    <li
                      className="relative transition ease-in-out"
                      key={image}
                      onClick={() => setAvatar(image)}
                    >
                      <div
                        className={mergeClassNames(
                          image === avatar ? 'ring-2 ring-indigo-500' : '',
                          'relative group flex cursor-pointer justify-center items-center w-full aspect-w-10 h-56 aspect-h-7 rounded-lg bg-gray-100 overflow-hidden after:absolute hover:after:sm:bg-black hover:after:sm:bg-opacity-30 hover:after:w-full hover:after:h-full hover:after:top-0'
                        )}
                      >
                        {image === avatar && (
                          <CheckCircleIcon className="h-5 w-5 text-purple-900 absolute right-2 top-2 left-auto z-10 drop-shadow-lg" />
                        )}
                        <Image
                          alt={'Avatar Image result for the selected figure'}
                          src={image}
                          layout="fill"
                          objectFit="cover"
                          quality={100}
                          className="object-cover h-full w-full pointer-events-none group-hover:opacity-75"
                          onError={(event) => {
                            (event.target as HTMLImageElement).src =
                              'https://d151dmflpumpzp.cloudfront.net/images/tribes/default_temp.jpeg';
                          }}
                        />
                      </div>
                    </li>
                  ))}
                </>
              )}
            </Query>
          </ul>
          <div className="mt-20 sticky bottom-10 flex flex-col justify-center items-center">
            {Boolean(avatar) && (
              <button
                disabled={isFetching}
                type="button"
                className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-sapien hover:bg-sapien-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${
                  isFetching ? 'animate-pulse' : ''
                }`}
                onClick={handleContinue}
              >
                Generate Passport
              </button>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default HistoricalFiguresSearch;
