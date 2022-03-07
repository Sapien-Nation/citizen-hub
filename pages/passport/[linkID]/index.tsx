import { useRouter } from 'next/router';
import { Fragment, useState } from 'react';
import { Transition } from '@headlessui/react';

// components
import { Head, Query } from 'components/common';
import {
  Auth,
  Avatar,
  FeedbackView,
  Figure as FigureView,
  Loading,
  Pending,
  StartView,
} from 'components/passport';

// context
import { useAuth } from 'context/user';

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
}

const PassportPage = () => {
  const [view, setView] = useState(View.Start);
  const [avatar, setAvatar] = useState<{ id: string } | null>(null);

  const { query } = useRouter();
  const { me, isLoggingIn } = useAuth();

  if (isLoggingIn === true || !query.linkID) return null;

  if (me === null)
    return <Auth redirect={`/passport/${query.linkID as string}`} />;

  const renderView = ({ code, statusCode }: LinkCheckResponse) => {
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
      case View.Loading:
        return <Loading />;
      case View.Avatar:
        return (
          <Transition
            as={Fragment}
            show
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0"
            enterTo="transform opacity-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100"
            leaveTo="transform opacity-0"
          >
            <Avatar avatar={avatar} />
          </Transition>
        );
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

export default PassportPage;
