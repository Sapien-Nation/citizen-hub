import { useRouter } from 'next/router';
import { useState } from 'react';

// components
import { Head, Redirect, Query } from 'components/common';
import {
  Auth,
  Avatar,
  Discord,
  FeedbackView,
  Figure as FigureView,
  Loading,
  Pending,
  StartView,
} from 'components/passport';

// context
import { useAuth } from 'context/user';

// types
import type { Figure } from 'types/figure';

interface LinkCheckResponse {
  allowedPassports?: number;
  availablePassports?: number;
  code?: number;
  distributionId?: string;
  message?: string;
  statusCode?: number;
}

export enum View {
  AuthView,
  Avatar,
  Figure,
  Start,
  Loading,
  Success,
  Pending,
}

// TODO export
interface Avatar extends Figure {
  image: File;
  isManual: string;
}

const PassportPage = () => {
  const [view, setView] = useState(View.Start);
  const [avatar, setAvatar] = useState<Avatar | null>(null);

  const { query } = useRouter();
  const { me, isLoggingIn } = useAuth();

  if (isLoggingIn === true || !query.linkID) return null;

  if (me === null)
    return <Auth redirect={`/passport/${query.linkID as string}`} />;

  const renderView = ({
    code,
    statusCode,
    distributionId,
  }: LinkCheckResponse) => {
    const responseCode = code || statusCode;

    if (responseCode) {
      if (responseCode === 104) {
        return <Pending />;
      }

      if (responseCode === 105) {
        return <></>;
      }

      return <FeedbackView code={responseCode} />;
    }

    switch (view) {
      case View.Start:
        return <StartView setPassportView={setView} />;
      case View.Figure:
        return (
          <FigureView
            linkID={String(query.linkID)}
            setPassportView={setView}
            setAvatar={setAvatar}
          />
        );
      case View.Pending:
        return <Pending />;
      case View.Loading:
        return <Loading />;
      case View.Avatar:
        return (
          <Avatar
            avatar={avatar}
            setDiscordView={() => setView(View.Success)}
            setPendingView={() => setView(View.Pending)}
            distributionId={distributionId}
          />
        );
      case View.Success:
        return <Discord />;
    }
  };

  return (
    <>
      <Head title="Create Passport" />

      <div className="flex-1 flex flex-row items-center justify-center">
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

// export default PassportPage;

const RedirectProxy = () => {
  return <Redirect path="/" />;
};

export default RedirectProxy;
