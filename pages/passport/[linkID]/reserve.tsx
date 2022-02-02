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
  const [_, setSearching] = useState(false);
  const [figure, setFigure] = useState<Figure | null>(null);

  const toast = useToast();
  const { query } = useRouter();
  const { theme } = useTheme();
  const { me, isLoggingIn } = useAuth();

  if (isLoggingIn === true || !query.linkID) return null;

  if (me === null)
    return <Auth redirect={`/passport/${query.linkID as string}/reserve`} />;

  const renderView = ({ code, distributionId }: LinkCheckResponse) => {
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

    if (code) {
      switch (code) {
        case 100:
          return <Discord reservedFigure={figure.name} />;
        default:
          return <FeedbackView code={code} />;
      }
    }

    switch (view) {
      case View.Reserve:
        return (
          <>
            <FiguresLookup
              onFigureSelect={(selectedFigure) => setFigure(selectedFigure)}
              setSearching={setSearching}
              onSelect={() => {}}
            />
            {figure && <button onClick={handleConfirm}>Reserve</button>}
          </>
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
