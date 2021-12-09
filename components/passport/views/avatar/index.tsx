import { useState } from 'react';
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
            className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
          >
            <Query
              api="/api/v3/passport/avatar"
              options={{
                fetcher: () => [
                  'https://via.placeholder.com/150',
                  'https://via.placeholder.com/150',
                  'https://via.placeholder.com/150',
                  'https://via.placeholder.com/150',
                  'https://via.placeholder.com/150',
                  'https://via.placeholder.com/150',
                ],
              }}
            >
              {(data: Array<string>) => (
                <>
                  {data.map((image) => (
                    <div
                      key={image}
                      className={mergeClassNames(
                        image === avatar ? 'ring-2 ring-indigo-500' : '',
                        'group flex cursor-pointer justify-center items-center w-full h-72 aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 overflow-hidden'
                      )}
                      onClick={() => setAvatar(image)}
                    >
                      <Image
                        src={image}
                        width={400}
                        height={400}
                        alt={'Avatar Image result for the selected figure'}
                        className="object-cover h-full w-full pointer-events-none group-hover:opacity-75"
                        onError={(event) => {
                          (event.target as HTMLImageElement).src =
                            'https://d151dmflpumpzp.cloudfront.net/images/tribes/default_temp.jpeg';
                        }}
                      />
                    </div>
                  ))}
                </>
              )}
            </Query>
          </ul>

          <div className="mt-10 flex flex-col justify-center items-center">
            {Boolean(avatar) && (
              <div className="rounded-full shadow mt-14 mb-6">
                <button
                  disabled={isFetching}
                  type="button"
                  className={`flex items-center bg-purple-600 hover:bg-purple-700 justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white md:py-4 md:text-lg md:px-10 ${
                    isFetching ? 'animate-pulse' : ''
                  }`}
                  onClick={handleContinue}
                >
                  Generate Passport
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
