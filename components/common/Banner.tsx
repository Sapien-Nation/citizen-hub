import Link from 'next/link';
import { SpeakerphoneIcon, XIcon } from '@heroicons/react/outline';

interface IBanner {
  title: string;
  message: string;
  action?: () => void;
}

export default function Banner({ title, message, action }: IBanner) {
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
            <Link href="/passport/purchase">
              <a className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-extrabold text-indigo-600 bg-white hover:bg-indigo-50">
                Purchase Passport
              </a>
            </Link>
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
