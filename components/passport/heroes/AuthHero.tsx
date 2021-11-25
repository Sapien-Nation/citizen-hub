import { ArrowRightIcon } from '@heroicons/react/outline';

const AuthHero = () => {
  return (
    <main className="lg:relative">
      <div className="mx-auto max-w-6xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
        <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
          <p className="mt-3 max-w-md mx-auto uppercase font-extrabold text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
            LOREM IPSUM DOLOR SIT AMET
          </p>
          <h1 className="text-4xl tracking-tight font-medium text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            <span className="block xl:inline">Lorem ipsum</span>{' '}
            <span className="block xl:inline">dolor sit amet</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-lg font-extralight text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
            Think wisely! You have 5 remaining selections.
          </p>
          <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div className="mt-1 relative">
              <input
                type="text"
                name="name"
                id="name"
                className="focus:ring-indigo-500 border-2 py-3 px-6 focus:border-indigo-500 block sm:text-sm border-gray-200 rounded-full"
                placeholder="Name"
              />
              <div className="absolute inset-y-0 right-2 flex items-center">
                <button
                  type="button"
                  className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <ArrowRightIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full flex items-center justify-center">
        <video
          className="text-center mt-14 mx-auto"
          width="500"
          height="750"
          controls
        >
          <source
            src="https://www.youtube.com/embed/sJzaZg9nuNo?w=540&h=960"
            type="video/mp4"
          />
        </video>
      </div>
    </main>
  );
};

export default AuthHero;
