import Image from 'next/image';

const mockData = [
  {
    id: 1,
    name: 'Competitive exchange rates',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  },
  {
    id: 2,
    name: 'No hidden fees',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  },
  {
    id: 3,
    name: 'Transfers are instant',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
  },
];

const PassportFeatures = () => {
  return (
    <div className="mx-auto px-4 py-10 sm:px-6 lg:px-8 bg-gray-100">
      <div className="container bg-gray-100 mx-auto">
        <div className="max-w-7xl mx-auto py-6 lg:py-7 flex items-center justify-between">
          <div className="text-gray-900 sm:text-4xl text-3xl">
            Passport features
          </div>
          <div className="flex mt-0 lg:flex-shrink-0">
            <button
              type="button"
              className="inline-flex rounded-full items-center px-1.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="#777E91"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
            </button>
            <button
              type="button"
              className="inline-flex rounded-full ml-1 items-center px-1.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="#777E91"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto py-2 lg:flex lg:items-center lg:justify-between">
          <div className="text-3xl sm:text-4xl">
            <img
              alt="passport"
              className="md:mx-auto"
              src="https://d1bdmh0gdusw0k.cloudfront.net/images/misc/passport.png"
              width="350"
            />
          </div>
          <div className="mt-8 flex lg:mt-0 max-w-2xl justify-end">
            <dl className="mt-10">
              {mockData?.map((item) => (
                <div
                  key={item.id}
                  className="relative py-4 px-2 rounded-xl hover:shadow-2xl"
                >
                  <dt>
                    <p className="ml-6 text-lg leading-6 font-medium text-gray-900">
                      {item.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-6 text-base text-gray-500">
                    {item.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassportFeatures;
