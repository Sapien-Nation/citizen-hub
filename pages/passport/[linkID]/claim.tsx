import { useRouter } from 'next/router';
import { useState } from 'react';
import { useTheme } from 'next-themes';

// utils
import { mergeClassNames } from 'utils/styles';

// components
import { Head, Query } from 'components/common';
import { Auth, Confirm, Discord, FeedbackView } from 'components/passport';

// context
import { useAuth } from 'context/user';
import { useToast } from 'context/toast';

// types
import type { ISOString } from 'tools/types/common';
import { claimFigureName } from 'api/passport/claim';

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
  Claimed,
  Confirm,
  Discord,
  Expired,
  LinkNotActive,
}

enum Status {
  UserAlreadyHavePassport = 100,
  LinkIsNotActiveYet = 101,
  ExpiredLink = 102,
  NoPassportsAvailableForThisLink = 103,
}

const ClaimPassportPage = () => {
  const [view, setView] = useState(View.Confirm);

  const toast = useToast();
  const { query } = useRouter();
  const { theme } = useTheme();
  const { me, isLoggingIn } = useAuth();

  if (isLoggingIn === true || !query.linkID) return null;

  if (me === null)
    return <Auth redirect={`/passport/${query.linkID as string}/claim`} />;

  const renderView = ({
    code,
    distributionId,
    reservedFigure,
    expiresAt,
    statusCode,
  }: LinkCheckResponse) => {
    const handleConfirm = async () => {
      try {
        await claimFigureName(distributionId);
        setView(View.Discord);
      } catch (error) {
        toast({
          message:
            error ||
            'Something Went wrong please contact passport@sapien.network',
        });
      }
    };

    if (code || statusCode) {
      const responseCode = code || statusCode;
      switch (responseCode) {
        case Status.UserAlreadyHavePassport:
          return <Discord />;
        default:
          return <FeedbackView code={responseCode} />;
      }
    }

    switch (view) {
      case View.Confirm:
        return (
          <Confirm
            onConfirm={handleConfirm}
            expiresAt={expiresAt}
            reservedFigure={reservedFigure}
          />
        );
      case View.Discord:
        return <Discord reservedFigure={reservedFigure} />;
    }
  };

  return (
    <>
      <Head title="Confirm Passport" />

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
