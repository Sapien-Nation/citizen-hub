import { useRouter } from 'next/router';
import { useState } from 'react';

// components
import { Head, Query } from 'components/common';
import { Auth, Claimed, Confirm, Discord, Expired } from 'components/passport';

// context
import { useAuth } from 'context/user';

interface LinkCheckResponse {
  allowedPassports?: number;
  availablePassports?: number;
  distributionId?: string;
  statusCode?: number;
  message?: string;
}

export enum View {
  Claimed,
  Confirm,
  Discord,
  Expired,
}

const ConfirmPassportPage = () => {
  const [view] = useState(View.Confirm);

  const { query } = useRouter();
  const { me, isLoggingIn } = useAuth();

  if (isLoggingIn === true || !query.linkID) return null;

  if (me === null)
    return <Auth redirect={`/passport/${query.linkID as string}/confirm`} />;

  const renderView = () => {
    switch (view) {
      case View.Claimed:
        return <Claimed />;
      case View.Confirm:
        return <Confirm />;
      case View.Discord:
        return <Discord />;
      case View.Expired:
        return <Expired />;
    }
  };

  return (
    <>
      <Head title="Confirm Passport" />

      <div className="bg-gray-50 flex-1 flex flex-row items-center justify-center">
        <main className="lg:relative h-full w-full">
          <div className="mx-auto max-w-6xl w-full pt-16 pb-20 text-center h-full lg:text-center">
            <Query api={`/api/v3/passport/check-link?linkId=${query.linkID}`}>
              {(response: LinkCheckResponse) => <>{renderView()}</>}
            </Query>
          </div>
        </main>
      </div>
    </>
  );
};

export default ConfirmPassportPage;
