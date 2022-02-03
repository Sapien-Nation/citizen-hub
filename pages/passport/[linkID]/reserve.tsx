/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useTheme } from 'next-themes';

// api
import { reserveFigure } from 'api/passport/reserve';

// utils
import { mergeClassNames } from 'utils/styles';

// components
import { Head, Query } from 'components/common';
import {
  Auth,
  Discord,
  FeedbackView,
  FiguresLookup,
} from 'components/passport';

// context
import { useAuth } from 'context/user';
import { useToast } from 'context/toast';

// types
import type { ISOString } from 'tools/types/common';
import type { Figure } from 'types/figure';

interface LinkCheckResponse {
  allowedPassports: number;
  availablePassports: number;
  code?: number;
  statusCode?: number;
  distributionId?: string;
  message?: string;
  isValid: boolean;
  isReserved: boolean;
  reservedFigure: string | null;
  expiresAt: ISOString | null;
}

export enum View {
  Discord,
  Reserve,
}

const ClaimPassportPage = () => {
  const [view, setView] = useState(View.Reserve);
  const [isSearching, setSearching] = useState(false);
  const [figure, setFigure] = useState<Figure | null>(null);

  const toast = useToast();
  const { query } = useRouter();
  const { theme } = useTheme();
  const { me, isLoggingIn } = useAuth();

  if (isLoggingIn === true || !query.linkID) return null;

  if (me === null)
    return <Auth redirect={`/passport/${query.linkID as string}/reserve`} />;

  const renderView = ({
    code,
    distributionId,
    statusCode,
  }: LinkCheckResponse) => {
    const handleConfirm = async () => {
      try {
        await reserveFigure(distributionId, { figureName: figure.name });

        setView(View.Discord);
      } catch (error) {
        toast({
          message: error,
        });
      }
    };

    if (code || statusCode) {
      const responseCode = code || statusCode;
      switch (responseCode) {
        case 100:
          return <Discord reservedFigure={figure?.name} />;
        default:
          return <FeedbackView code={responseCode} />;
      }
    }

    switch (view) {
      case View.Reserve:
        return (
          <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover"
                src="https://images.newindianexpress.com/uploads/user/imagelibrary/2021/11/27/w1200X800/Metaverse_is_Coming.jpg"
                alt="People working on laptops"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-purple-900 mix-blend-multiply" />
            </div>
            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
              <p
                className={`max-w-lg mx-auto text-md font-light text-white sm:text-xl md:mt-5 transition delay-150 duration-300 ease-in-out ${
                  isSearching ? 'scale-75 -translate-y-12' : ''
                }`}
              >
                To claim your passport please input your favorite historical
                figure.
              </p>
              <div
                className={`transition delay-150 duration-300 ease-in-out ${
                  isSearching ? '-translate-y-12' : ''
                }`}
              >
                <FiguresLookup
                  onFigureSelect={(selectedFigure) => setFigure(selectedFigure)}
                  setSearching={setSearching}
                  onSelect={() => {}}
                />
                {figure && (
                  <button
                    className="absolute left-2/4 -translate-x-2/4 mt-12 border font-extrabold justify-center px-2 py-3 m rounded-md text-white md:py-3 md:text-xl md:px-8"
                    onClick={handleConfirm}
                  >
                    Reserve
                  </button>
                )}
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <>
      <Head title="Reserve Your Figure Passport" />

      <div
        className={mergeClassNames(
          theme && theme === 'light' ? 'bg-gray-50' : '',
          'flex-1 flex flex-row items-center justify-center'
        )}
      >
        <main className="lg:relative h-full w-full">
          <div className="mx-auto max-w-6xl w-full pt-16 pb-20 text-center h-full lg:text-center">
            <Query api={`/api/v3/passport/check-link?linkId=${query.linkID}`}>
              {(response: LinkCheckResponse) => <>{renderView(response)}</>}
            </Query>
          </div>
        </main>
      </div>
    </>
  );
};

export default ClaimPassportPage;
