import Link from 'next/link';
import { XIcon } from '@heroicons/react/outline';

interface Props {
  handleCookie: (accept: boolean) => void;
}

const Cookies = ({ handleCookie }: Props) => (
  <div className="fixed bottom-0 inset-x-0 pb-2 sm:pb-5">
    <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="p-2 rounded-lg bg-indigo-900 shadow-lg sm:p-3">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <p className="ml-3 text-sm text-gray-200">
              <span className="inline">
                At Sapien, we value your privacy. This Sapien website and other
                related Sapien products that can be accessed through this
                website use cookies. Cookies are used to manage your login
                session, improve user experience, and to provide analytics on
                the use of our website and related products. You can control
                and/or delete cookies if you wish. Please refer to{' '}
                <Link href="/cookie-policy">
                  <a className="underline" target="_blank" rel="noreferrer">
                    Sapien’s cookie policy
                  </a>
                </Link>{' '}
                for more information.
              </span>
            </p>
          </div>
          <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <button
              type="button"
              className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
              onClick={() => handleCookie(true)}
            >
              Accept
            </button>
          </div>
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
            <button
              type="button"
              className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white"
              onClick={() => handleCookie(false)}
            >
              <span className="sr-only">Dismiss</span>
              <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Cookies;
