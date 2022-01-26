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

// types
import type { ISOString } from 'tools/types/common';

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

const ConfirmPassportPage = () => {
  const [view, setView] = useState(View.Confirm);

  const { query } = useRouter();
  const { me, isLoggingIn } = useAuth();
  const { theme } = useTheme();

  if (isLoggingIn === true || !query.linkID) return null;

  if (me === null)
    return <Auth redirect={`/passport/${query.linkID as string}/confirm`} />;

  const handleConfirm = () => {
    setView(View.Discord);
  };

  const renderView = ({ code }: LinkCheckResponse) => {
    if (code === null) {
      switch (view) {
        case View.Confirm:
          return <Confirm onConfirm={handleConfirm} />;
        case View.Discord:
          return <Discord />;
      }
    }

    switch (code) {
      case Status.UserAlreadyHavePassport:
        return <Discord />;
      case Status.ExpiredLink:
      case Status.LinkIsNotActiveYet:
      case Status.NoPassportsAvailableForThisLink:
        return <FeedbackView code={code} />;
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

export default ConfirmPassportPage;
