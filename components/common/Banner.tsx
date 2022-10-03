import Link from 'next/link';
import { SpeakerphoneIcon } from '@heroicons/react/outline';

// components
import { Query } from 'components/common';

// context
import { useAuth } from 'context/user';

interface IBanner {
  title: string;
  message: string;
  action?: () => void;
}

const protocolURL = process.env.NEXT_PUBLIC_PROTOCOL_URL;
export default function Banner({ title, message, action }: IBanner) {
  const { me } = useAuth();

  const handleRedirectToProtocol = (path = '') => {
    const getURL = () => {
      if (typeof window === 'undefined') return `${protocolURL}mint`;

      return `${protocolURL}${path}`;
    };

    return window.location.replace(getURL());
  };

  const renderView = (code: number) => {
    if (code === null)
      return (
        <button
          onClick={() => handleRedirectToProtocol()}
          className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-extrabold text-indigo-600 bg-white hover:bg-indigo-50"
        >
          Launch App
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
    <div className="bg-gradient-to-r from-sapien to-sapien-blue-100 z-10">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap gap-0 sm:gap-2">
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
            {me === null ? (
              <Link href="/passport/purchase">
                <a className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-extrabold text-indigo-600 bg-white hover:bg-indigo-50">
                  Purchase Passport
                </a>
              </Link>
            ) : (
              <Query api="/passport-api/mint-checker" ignoreError>
                {({ code }: { code: number | null }) => renderView(code)}
              </Query>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
