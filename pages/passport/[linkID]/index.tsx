import { useRouter } from 'next/router';
import { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

// components
import { Head, Query } from 'components/common';
import {
  AuthView,
  AvatarView,
  FeedbackView,
  LookupView,
  GalleryView,
  LoadingView,
  PendingView,
  PurchaseView,
  SuccessView,
  ConfirmView,
} from 'components/passport';
import { Steps } from 'components/navigation';

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

  // Show Gallery from a Claim Figure
  GalleryClaim,

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
  isManual: boolean;
}

interface LinkCheckResponse {
  avatarURL?: string;
  allowedPassports?: number;
  availablePassports?: number;
  code?: number;
  isSoldOut?: boolean;
  distributionId?: string;
  reservedFigure?: string | null;
  message?: string;
  statusCode?: number;
  passportId?: string;
  amount: number;
}

const PassportPage = ({
  avatarURL,
  code,
  isSoldOut,
  statusCode,
  distributionId,
  reservedFigure,
  passportId,
  amount,
}: LinkCheckResponse) => {
  const [view, setView] = useState(View.Lookup);
  const [avatar, setAvatar] = useState<Avatar | null>(null);
  const [figureName, setFigureName] = useState('');
  const [responseCode, setResponseCode] = useState<number | undefined>(
    code || statusCode
  );
  const [styledAvatar, setStyledAvatar] = useState<string | null>(null);

  const steps = [
    {
      id: 1,
      name: 'Purchase Your Passport',
      view: View.Purchase,
      status: 'current',
    },
    {
      id: 2,
      name: 'Select Your Avatar',
      view: View.Lookup,
      status: 'upcoming',
    },
    {
      id: 3,
      name: 'Stylize Your Avatar',
      view: View.Gallery,
      status: 'upcoming',
    },
    {
      id: 4,
      name: 'Save Your Avatar',
      view: View.Success,
      status: 'upcoming',
    },
    // { id: 5, name: 'Mint Your Passport', status: 'upcoming' },
  ];

  if (responseCode) {
    if (responseCode === 1000) {
      return (
        <>
          <Steps steps={steps} setView={setView} active={2} />
          <ConfirmView
            reservedFigure={reservedFigure}
            onSuccess={() => {
              setView(View.GalleryClaim);
              setResponseCode(undefined);
            }}
            distributionId={distributionId}
          />
        </>
      );
    }

    if (responseCode === 104) {
      return (
        <>
          <Steps steps={steps} setView={setView} active={1} />
          <PurchaseView
            onBuy={() => {
              setView(View.Lookup);
              setResponseCode(undefined);
            }}
            distributionId={distributionId}
            isSoldOut={isSoldOut}
            amount={amount}
          />
        </>
      );
    }

    if (responseCode === 201 || responseCode === 202) {
      return <PendingView responseCode={responseCode} />;
    }

    if (responseCode === 204) {
      return (
        <>
          <Steps steps={steps} setView={setView} active={4} />
          <SuccessView
            reservedFigure={reservedFigure}
            styledAvatar={avatarURL}
          />
        </>
      );
    }

    if (responseCode === 203) {
      return (
        <>
          <Steps steps={steps} setView={setView} active={3} />
          <GalleryView
            figureName={reservedFigure}
            setView={setView}
            setAvatar={setAvatar}
            setResponseCode={setResponseCode}
          />
        </>
      );
    }

    return <FeedbackView code={responseCode} />;
  }

  // the order of this views are in order of appearance
  switch (view) {
    case View.Lookup:
      return (
        <>
          <Steps steps={steps} setView={setView} active={2} />
          <LookupView
            setView={setView}
            distributionId={distributionId}
            setFigureName={setFigureName}
          />
        </>
      );

    case View.GalleryClaim:
      return (
        <>
          <Steps steps={steps} setView={setView} active={3} />
          <GalleryView
            figureName={reservedFigure}
            setView={setView}
            setAvatar={setAvatar}
            setResponseCode={setResponseCode}
          />
        </>
      );

    case View.Gallery:
      return (
        <>
          <Steps steps={steps} setView={setView} active={3} />
          <GalleryView
            figureName={reservedFigure || figureName}
            setView={setView}
            setAvatar={setAvatar}
            setResponseCode={setResponseCode}
          />
        </>
      );

    case View.Loading:
      return (
        <>
          <Steps steps={steps} setView={setView} active={3} />
          <LoadingView />
        </>
      );

    // Could be Pending or Avatar
    case View.Pending:
      return <PendingView />;

    // Last Steps
    case View.Avatar:
      return (
        <>
          <Steps steps={steps} setView={setView} active={3} />
          <AvatarView
            passportId={passportId}
            setView={setView}
            figureName={figureName}
            avatarImage={avatar.image}
            isManual={avatar.isManual}
            onBack={() => {
              setAvatar(null);
              setFigureName(reservedFigure || figureName);
              setView(View.Gallery);
            }}
            setStyledAvatar={setStyledAvatar}
          />
        </>
      );

    case View.Success:
      return (
        <>
          <Steps steps={steps} setView={setView} active={4} />
          <SuccessView
            styledAvatar={styledAvatar}
            reservedFigure={reservedFigure || figureName}
          />
        </>
      );
  }
};

const PassportPageProxy = () => {
  const { asPath, replace, query } = useRouter();
  const { me, isLoggingIn } = useAuth();

  if (isLoggingIn === true || !query.linkID) return null;

  if (me === null)
    return (
      <div className="flex flex-col justify-center flex-1">
        <AuthView redirect={`/passport/${query.linkID as string}`} />
      </div>
    );

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

  const myErrorHandler = (error: Error, info: { componentStack: string }) => {
    console.log(error.message);
  };

  return (
    <>
      <Head title="Create Passport" />

      <div className="flex-1 flex flex-row items-center justify-center">
        <main className="lg:relative h-full w-full">
          <div className="mx-auto max-w-6xl w-full pt-16 pb-20 text-center h-full lg:text-center">
            <Query api={`/passport-api/status${queryParams}`}>
              {(response: LinkCheckResponse) => (
                <ErrorBoundary
                  FallbackComponent={ErrorFallback}
                  onReset={() => {
                    replace(asPath);
                  }}
                  onError={myErrorHandler}
                >
                  <PassportPage {...response} />
                </ErrorBoundary>
              )}
            </Query>
          </div>
        </main>
      </div>
    </>
  );
};

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden text-left">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          src="https://images.newindianexpress.com/uploads/user/imagelibrary/2021/11/27/w1200X800/Metaverse_is_Coming.jpg"
          alt="People working on laptops"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-purple-900 mix-blend-multiply" />
      </div>
      <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          <span className="block text-white">
            There was an unexpected error. We are working on fixing it.
          </span>
        </h1>
        <p className="mt-6 max-w-lg text-xl text-white font-semibold sm:max-w-3xl">
          Our Engineers have been automatically notified about this issue. You
          can try clicking the button below to reload the page.
        </p>
        <div className="mt-10 max-w-sm sm:max-w-none sm:flex">
          <button
            onClick={resetErrorBoundary}
            className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-sapien bg-white hover:bg-indigo-50 sm:px-8"
          >
            Retry
          </button>
        </div>
      </div>
    </div>
  );
}

export default PassportPageProxy;
