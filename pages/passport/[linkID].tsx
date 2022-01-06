import { useRouter } from 'next/router';
import { Fragment, useState } from 'react';
import { Transition } from '@headlessui/react';

// components
import { Head, Query, Redirect } from 'components/common';
import {
  Auth,
  Avatar,
  FeedbackView,
  Figure as FigureView,
  Loading,
  StartView,
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
  AuthView,
  Avatar,
  Figure,
  Start,
  Loading,
}

const PassportPage = () => {
  const [view, setView] = useState(View.Start);

  const { query } = useRouter();
  const { me, isLoggingIn } = useAuth();

  if (isLoggingIn === true || !query.linkID) return null;

  if (me === null) return <Auth linkID={query.linkID as string} />;

  const renderView = ({ statusCode }: LinkCheckResponse) => {
    if (statusCode) {
      return <FeedbackView code={statusCode} />;
    }

    switch (view) {
      case View.Start:
        return <StartView setPassportView={setView} />;
      case View.Figure:
        return (
          <FigureView linkID={String(query.linkID)} setPassportView={setView} />
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
            <Avatar linkID={String(query.linkID)} />
          </Transition>
        );
        return;
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
