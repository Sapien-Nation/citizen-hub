// components
import { Head } from 'components/common';
import PassportLinkForm from 'components/passport/PassportLinkForm';

// types
import type { NextPage } from 'next';

const features = [
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

const PassportPage: NextPage = () => {
  return (
    <>
      <Head title="Passport" />
      <div>
        <main className="lg:relative">
          <div className="mx-auto max-w-6xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
            <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
                <span className="block xl:inline">Sapien Passports</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto uppercase font-extrabold text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                Sapien Passport
              </p>
              <PassportLinkForm />
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
        <div className="mx-auto px-4 py-12 sm:px-6 lg:px-10 bg-gray-100">
          <div className="container bg-gray-100 mx-auto">
            <div className="max-w-6xl mx-auto py-6 lg:py-7 flex items-center justify-between">
              <div className="text-gray-900 sm:text-4xl text-3xl">
                Passport features
              </div>
            </div>
            <div className="max-w-6xl mx-auto py-2 lg:flex lg:items-center lg:justify-between">
              <div className="text-3xl sm:text-4xl">
                {/* // eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="passport"
                  className="mx-auto"
                  src="https://d1bdmh0gdusw0k.cloudfront.net/images/misc/passport.png"
                  width="350"
                />
              </div>
              <div className="mt-4 flex lg:mt-0 max-w-2xl justify-end">
                <dl className="mt-10">
                  {features.map((item) => (
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
      </div>
    </>
  );
};

export default PassportPage;
