import Link from 'next/link';
import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline';
import { Query } from 'components/common';

interface IBanner {
  title: string;
  message: string;
  action?: () => void;
}

export default function Banner({ title, message, action }: IBanner) {
  const renderView = (code: number) => {
    const handleRedirectToProtocol = (path = '') => {
      const getURL = () => {
        if (typeof window === 'undefined')
          return 'https://www.sapien.network/passport/purchase';

        const { host } = window.location;

        if (host === 'https://passport-sandbox.sapien.network')
          return `https://front-sandbox.sapien.network/${path}`;
        else if (host === 'localhost:3000')
          return `http://localhost:3000/${path}`;
        else if (host === 'https://passport-qat.sapien.network')
          return `https://front-qat.sapien.network/${path}`;

        return `https://protocol.sapien.network/${path}`;
      };

      return window.location.replace(getURL());
    };

    if (code === null)
      return (
        <button
          onClick={() => handleRedirectToProtocol()}
          className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-extrabold text-indigo-600 bg-white hover:bg-indigo-50"
        >
          Go to the Protocol
        </button>
      );
    if (code === 100)
      return (
        <button
          onClick={() => handleRedirectToProtocol('mint')}
          className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-extrabold text-indigo-600 bg-white hover:bg-indigo-50"
        >
          Time to mint your passport
        </button>
      );

    if (code === 101)
      return (
        <Link href="/passport/purchase">
          <a className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-extrabold text-indigo-600 bg-white hover:bg-indigo-50">
            Purchase Passport
          </a>
        </Link>
      );

    if (code === 102)
      return (
        <Link href="/passport/purchase">
          <a className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-extrabold text-indigo-600 bg-white hover:bg-indigo-50">
            Continue to Passport Flow
          </a>
        </Link>
      );
  };

  return (
    <div className="bg-sapien z-10">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="lg:w-0 flex-1 flex items-center">
            <span className="flex p-2 rounded-lg bg-neutral-900">
              <SpeakerphoneIcon
                className="h-6 w-6 text-white"
                aria-hidden="true"
              />
            </span>
            <p className="ml-3 font-extrabold text-white sm:truncate">
              <span className="md:hidden">{title}</span>
              <span className="hidden md:inline">{message}</span>
            </p>
          </div>
          <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <Query api="/passport-api/mint-checker">
              {({ code }: { code: number | null }) => renderView(code)}
            </Query>
          </div>
          {/* <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              type="button"
              className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
            >
              <span className="sr-only">Dismiss</span>
              <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
