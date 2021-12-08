import { useRouter } from 'next/router';
import { useState } from 'react';

// components
import { Head, Query, Redirect } from 'components/common';
import {
  Avatar,
  FeedbackView,
  Figure as FigureView,
  Loading,
} from 'components/passport';

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
  Avatar,
  Figure,
  Loading,
}

const PassportPage = () => {
  const [view, setView] = useState(View.Figure);

  const { query } = useRouter();
  const { me, isLoggingIn } = useAuth();

  if (isLoggingIn === true) return null;

  if (me === null) return <Redirect path="/" />;

  if (!query.linkID) return null;

  const renderView = ({ statusCode }: LinkCheckResponse) => {
    if (statusCode) {
      return <FeedbackView code={statusCode} />;
    }

    switch (view) {
      case View.Figure:
        return (
          <FigureView linkID={String(query.linkID)} setPassportView={setView} />
        );
      case View.Loading:
        return <Loading />;
      case View.Avatar:
        return <Avatar linkID={String(query.linkID)} />;
    }
  };

  return (
    <>
      <Head title="Create Passport" />

      <div className="bg-gray-50">
        <main className="lg:relative">
          <div className="mx-auto max-w-6xl w-full pt-16 pb-20 text-center lg:py- lg:text-center">
            <Query api={`/api/v3/passport/check-link?linkId=${query.linkID}`}>
              {(response: LinkCheckResponse) => <>{renderView(response)}</>}
            </Query>
          </div>
        </main>
      </div>
    </>
  );
};

export default PassportPage;
