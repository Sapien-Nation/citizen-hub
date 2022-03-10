import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

// components
import { Head, Query } from 'components/common';
import {
  AuthView,
  AvatarView,
  DiscordView,
  FeedbackView,
  LookupView,
  GalleryView,
  LoadingView,
  PendingView,
  PurchaseView,
  StartView,
  SuccessView,
} from 'components/passport';

// context
import { useAuth } from 'context/user';

export enum View {
  // Not LoggedIn
  AuthView,

  // Last Step
  Avatar,

  // This view is where we show the Autocomplete, so they can confirm the historical figure
  Lookup,

  // Already Selected an HistoricalFigure View A.K.A Google images Grid
  Gallery,

  // Initial View
  Start,

  // View to render when calling ML (take up to 10 seconds)
  Loading,

  // Discord View, when the user Finish all the flow
  Success,

  // Status Pending, means Admins need to approve submission
  Pending,

  // Purchase Views
  Purchase,

  Feedback,
}

// TODO export
interface Avatar {
  image: File;
  isManual: string;
}

interface LinkCheckResponse {
  allowedPassports?: number;
  availablePassports?: number;
  code?: number;
  isSoldOut?: boolean;
  distributionId?: string;
  reservedFigure?: string | null;
  message?: string;
  statusCode?: number;
  passportId?: string;
}

const PassportPage = ({
  code,
  isSoldOut,
  statusCode,
  distributionId,
  reservedFigure,
  passportId,
}: LinkCheckResponse) => {
  const [view, setView] = useState(View.Start);
  const [avatar, setAvatar] = useState<Avatar | null>(null);
  const [figureName, setFigureName] = useState('');
  const [responseCode, setResponseCode] = useState<number | undefined>(
    code || statusCode
  );
  const [styledAvatar, setStyledAvatar] = useState<string | null>(null);

  if (responseCode === 104) {
    return (
      <PurchaseView
        onBuy={() => {
          setView(View.Start);
          setResponseCode(undefined);
        }}
        distributionId={distributionId}
        isSoldOut={isSoldOut}
      />
    );
  }

  if (responseCode) {
    if (responseCode === 201 || responseCode === 202) {
      return <PendingView />;
    }

    if (responseCode === 203) {
      return (
        <GalleryView
          figureName={reservedFigure}
          setView={setView}
          setAvatar={setAvatar}
          setResponseCode={setResponseCode}
        />
      );
    }

    return <FeedbackView code={responseCode} />;
  }

  // the order of this views are in order of appearance
  switch (view) {
    case View.Start:
      return <StartView setView={setView} />;

    case View.Lookup:
      return (
        <LookupView
          setView={setView}
          distributionId={distributionId}
          setFigureName={setFigureName}
        />
      );

    case View.Gallery:
      return (
        <GalleryView
          figureName={figureName}
          setView={setView}
          setAvatar={setAvatar}
          setResponseCode={setResponseCode}
        />
      );

    case View.Loading:
      return <LoadingView />;

    // Could be Pending or Avatar
    case View.Pending:
      return <PendingView />;

    // Last Steps
    case View.Avatar:
      return (
        <AvatarView
          passportId={passportId}
          setView={setView}
          figureName={figureName}
          avatarImage={avatar.image}
          isManual={avatar.isManual}
          onBack={() => {
            setAvatar(null);
            setFigureName(figureName || reservedFigure);
            setView(View.Gallery);
          }}
          setStyledAvatar={setStyledAvatar}
        />
      );

    case View.Success:
      return (
        <SuccessView styledAvatar={styledAvatar} reservedFigure={figureName} />
      );
  }
};

const PassportPageProxy = () => {
  const { query } = useRouter();
  const { me, isLoggingIn } = useAuth();

  if (isLoggingIn === true || !query.linkID) return null;

  if (me === null)
    return <AuthView redirect={`/passport/${query.linkID as string}`} />;

  const { linkID } = query;

  const isPurchase = linkID === 'purchase';

  if (isPurchase) {
    return (
      <>
        <Head title="WhiteList Only" />

        <FeedbackView code={300} />
      </>
    );
  }

  const queryParams = isPurchase ? '' : `?linkId=${linkID}`;
  return (
    <>
      <Head title="Create Passport" />

      <div className="flex-1 flex flex-row items-center justify-center">
        <main className="lg:relative h-full w-full">
          <div className="mx-auto max-w-6xl w-full pt-16 pb-20 text-center h-full lg:text-center">
            <Query api={`/api/v3/passport/status${queryParams}`}>
              {(response: LinkCheckResponse) => <PassportPage {...response} />}
            </Query>
          </div>
        </main>
      </div>
    </>
  );
};

export default PassportPageProxy;
