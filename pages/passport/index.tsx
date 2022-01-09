// components
import { Head } from 'components/common';

const logos = [
  { name: 'Harambe', url: '/images/partners/harambe.png' },
  { name: 'DoinGud', url: '/images/partners/doingud.png' },
  { name: 'Polygon', url: '/images/partners/polygon.png' },
];

// types
import type { NextPage } from 'next';

const PassportPage: NextPage = () => {
  return (
    <>
      <Head title="Passport" />
      <div className="py-16">
        <div className="mx-auto px-4 py-20 sm:px-6 lg:px-10 bg-gray-100 text-center max-w-6xl">
          <h2 className="text-2xl font-semibold">
            The Sapien Passport is Your Ticket to:
          </h2>
          <div className="md:flex flex-row justify-center gap-2 mt-5 space-y-4 md:space-y-0">
            <div className="h-16 bg-purple-800 text-white flex flex-row items-center px-4 -skew-x-12 min-width-10">
              <div className="skew-x-12">Our Metaverse</div>
            </div>
            <div className="h-16 bg-purple-800 text-white flex flex-row items-center px-4 -skew-x-12">
              <div className="skew-x-12">Next Generation Communities</div>
            </div>
            <div className="h-16 bg-purple-800 text-white flex flex-row items-center px-4 -skew-x-12">
              <div className="skew-x-12">Digital and Real World Agency</div>
            </div>
          </div>
        </div>
        <div className="mx-auto px-4 py-12 sm:px-6 lg:px-10 bg-gray-900 text-gray-300 text-center max-w-6xl">
          <h2 className="text-xl font-semibold mb-5">What It Is:</h2>
          <p className="max-w-2xl m-auto">
            The Sapien Passport is a first of its kind NFT that gives you a
            digital persona and citizenship in the Sapien ecosystem. The
            communities you’re part of can stamp your Passport to signify your
            membership in their community. They can also add titles and stamps
            to speak to your expertise on a topic, signify to others that you’re
            someone they work with, or speak in support of your talents.
          </p>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            <div className="relative flex">
              <div className="bg-pink-700 px-6 py-14 text-center">
                <h4 className="text-md font-medium tracking-wider uppercase text-white">
                  Sapien’s NFT Passport is Key to Addressing the Issues We Find
                  in Most Social Media Today
                </h4>
                <p className="mt-3 text-base whitespace-pre-line text-gray-300">
                  {`Many Existing platforms are plagued by trolls, astroturfing, and a whole host of different types of spam. Our NFT Passport aims to remedy this by creating a digital social ledger you carry with you everywhere you go in our ecosystem. Existing platforms are plagued by trolls, astroturfing, and a whole host of different types of spam. Our NFT Passport aims to remedy this by creating a digital social ledger you carry with you everywhere you go in our ecosystem 
                    `}
                </p>
              </div>
            </div>
            <div className="relative flex">
              <div className="bg-sky-700 px-6 py-14 text-center">
                <h4 className="text-md font-medium tracking-wider uppercase text-white">
                  Anonymous Participation Online Has Led to Unaccountable
                  Engagement
                </h4>
                <p className="mt-3 text-base whitespace-pre-line text-gray-300">
                  {`When you post something online, you’re making yourself vulnerable and sharing a part of yourself and that’s a uniquely beautiful thing. Unfortunately, this can open the door for faceless strangers to criticize and attack you, often unfairly, with no consequences for their behavior. 
                  When you post something online, you’re making yourself vulnerable and sharing a part of yourself and that’s a uniquely beautiful thing. Unfortunately, this can open the door for faceless strangers to criticize and attack you, often unfairly, with no consequences for their behavior. 
                    `}
                </p>
              </div>
            </div>
            <div className="relative flex">
              <div className="bg-orange-700 px-6 py-14 text-center">
                <h4 className="text-md font-medium tracking-wider uppercase text-white">
                  Now, The Internet Is Changing as We Move Towards the Metaverse
                  and Web 3.0
                </h4>
                <p className="mt-3 text-base whitespace-pre-line text-gray-300">
                  {`This transition presents the potential for a scary step in the wrong direction for human connection where the metaverse takes over our daily lives and these issues become even more pronounced. As we build, it’s important that what we’re building with quality and honesty in mind from the ground up
                  `}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:mx-auto py-12 sm:px-6 lg:px-10 lg:max-w-6xl lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start bg-gray-100">
          <div className="relative sm:py-16 lg:py-0">
            <div
              aria-hidden="true"
              className="hidden md:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
            >
              <svg
                className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={392}
                  fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
                />
              </svg>
            </div>
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
              <div className="relative py-20 rounded-2xl shadow-xl overflow-hidden">
                <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-sapien via-sapien opacity-90" />
                <div className="relative px-8">
                  <div className="relative text-lg font-medium text-white md:flex-grow">
                    <p className="relative">
                      In The Sapien Ecosystem, The Sapien Passport Aims to
                      Reintroduce Accountability Without Sacrificing Your
                      Privacy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <div className="mt-6 text-gray-500 space-y-6">
                <p className="text-lg">
                  Our vision for the Passport is a form of digital identity that
                  allows communities to create networks and share these networks
                  with other communities. These networks will represent an
                  entire community’s support of an individual and their
                  contributions. Through these networks we can help begin to
                  solve the issues with anonymous participation without
                  sacrificing anonymity itself.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mx-auto px-4 sm:px-6 lg:px-10 bg-gray-900 text-gray-300 max-w-6xl">
          <div className="relative flex flex-row items-center h-56 bg-gradient-to-r from-sky-700 to-sky-300 p-8 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
            <div className="relative text-xl font-medium text-white md:flex-grow text-center">
              <p className="mt-2 text-white text-xl font-extrabold tracking-tight sm:text-4xl">
                Passports
              </p>
            </div>
          </div>
          <div className="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
            <div className="md:ml-auto md:w-1/2 md:pl-10">
              <p className="mt-3 text-lg text-gray-300">
                Sapien is connecting with community organizers, thought leaders,
                and forward thinking people of all types to build the first
                community of passport holders.
              </p>
            </div>
          </div>
        </div>

        {/* Logo cloud section */}
        <div className="relative mx-auto px-4 sm:px-6 lg:px-10 text-gray-300 max-w-6xl py-12 text-center">
          <div className="">
            <div>
              <h2 className="text-3xl text-gray-900 tracking-tight sm:text-4xl">
                {`Who's On Board`}
              </h2>
            </div>
            <div className="mt-12 gap-0.5 lg:mt-0 flex flex-row justify-center items-center">
              {logos.map((logo) => (
                <div key={logo.name} className="">
                  <img src={logo.url} alt={logo.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PassportPage;
