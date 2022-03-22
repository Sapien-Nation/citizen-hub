import Link from 'next/link';

// components
import { Head } from 'components/common';

// types
import { NextPage } from 'next';

const NotFoundPage: NextPage = () => {
  return (
    <>
      <Head title="404" />
      <div className="h-full">
        <div className="flex flex-col justify-center items-center h-full">
          <img
            className="pr-1 w-20"
            src="/landing/logooutlined.svg"
            alt="sapien"
          />
          <h1 className="text-xl mt-3 font-semibold lg:text-2xl">
            Whoops looks like something went wrong...
          </h1>
          <div className="mt-6 text-center">
            <Link href={`/`}>
              <a className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm  text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                Back Home
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
