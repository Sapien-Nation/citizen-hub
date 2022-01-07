import { ArrowNarrowRightIcon } from '@heroicons/react/solid';
import Link from 'next/link';

// components
import { Head, LottiePlayer } from 'components/common';

// hooks
import { useAuth } from 'context/user';

// types
import { NextPage } from 'next';

const IndexPage: NextPage = () => {
  const { me } = useAuth();
  return (
    <>
      <Head title="Nation" />
      <div className="bg-gray-50">
        <main className="lg:relative">
          <div className="relative">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-indigo-800 mix-blend-multiply"></div>
            </div>
            <div className="items-center mx-auto max-w-6xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left relative">
              <div className="px-4 sm:px-8 xl:pr-16 text-center">
                <p className="mt-3 max-w-md mx-auto uppercase font-extrabold text-lg text-gray-400 sm:text-xl md:mt-5 md:max-w-3xl">
                  {"We're giving you back control. Reclaim your agency"}
                </p>
                <h1 className="text-4xl mt-5 tracking-tight font-extrabold text-gray-200 sm:text-5xl md:text-6xl lg:text-5xl xl:text-5xl">
                  <span className="block xl:inline">
                    Sapien is building the tools, community, and protocol for
                    the next generation of human connection.
                  </span>{' '}
                </h1>
                <div className="mt-10 flex justify-center">
                  <div className="rounded-full shadow">
                    {/* <Link href="/passport">
                      <a
                        href="#"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10"
                      >
                        Get Passport
                      </a>
                    </Link> */}
                  </div>
                  <div className="mt-3 rounded-full shadow sm:mt-0 sm:ml-3">
                    {me === null && (
                      <Link href="/register">
                        <a
                          href="#"
                          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-purple-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                        >
                          Sign up
                        </a>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <div className="max-w-6xl mx-auto shadow-lg rounded my-8">
        {/* Full stack section */}
        <div className="py-12 bg-gray-50 lg:flex lg:px-8 px-4 sm:px-6">
          <div className="lg:w-1/2">
            <p className="whitespace-pre-line leading-relaxed text-lg text-center lg:text-left text-gray-600">
              {`From tech empires to financial institutions, we're surrounded by big black boxes that control how society operates with zero input from average people. Because they're so large, we're left with no choice but to engage with them. Some of these institutions shroud themselves in secrecy and complexity to reduce accountability and enable exploitation.

                With the right tools, we can get rid of big black boxes and go back to relying on the only thing we really need, each other. 
              `}
            </p>
          </div>
          <div className="lg:w-1/2">
            <LottiePlayer
              width="500"
              lottie="https://assets3.lottiefiles.com/packages/lf20_ailluhhv.json"
            />
          </div>
        </div>
        <div className="py-12 bg-gray-900 lg:px-8 px-4 sm:px-6">
          <div className="lg:flex text-gray-300">
            <div className="lg:w-1/2">
              <LottiePlayer
                width="500"
                lottie="https://assets7.lottiefiles.com/packages/lf20_6x8fn1vr.json"
              />
            </div>
            <div className="lg:w-1/2">
              <p className="whitespace-pre-line lg:text-left text-center leading-loose text-lg text-gray-300">
                {`We recognize that the problems we're facing run deep. There's no one tool or easy solution that's going to fix the problem. That's why we're taking a holistic approach and developing a complete stack of tools to help communities thrive and realize their true potential. The future of the internet is being built on Web 3.0 through blockchain technology and we're watching it happen in real time. Let's make sure that future is built by people with the right vision.
                  `}
              </p>
            </div>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            <div className="relative flex">
              <div className="bg-sky-700 px-6 py-14 rounded-xl text-center">
                <h4 className="text-md font-medium tracking-wider uppercase text-white">
                  Informational
                </h4>
                <p className="mt-3 text-base whitespace-pre-line text-gray-300">
                  {`The algorithms that power social media are failing us. In an age of endless information, people are becoming more polarized and confused.                    
                    
                    That's why we're putting humans at the center of our solution with human curation. The content you consume will be vetted by humans you can trust because they're endorsed by the communities you're a part of. 
                    `}
                </p>
              </div>
            </div>
            <div className="relative flex">
              <div className="bg-purple-900 px-6 py-14 rounded-xl text-center">
                <h4 className="text-md font-medium tracking-wider uppercase text-white">
                  Social
                </h4>
                <p className="mt-3 text-base whitespace-pre-line text-gray-300">
                  {`It’s difficult to know what or who you can believe. Specific endorsements from communities you’re part of makes it much easier. 

                    Our NFT Passports allow communities to have shared networks where communities can sign off on another user’s passport in support of their skills, knowledge, and history on the platform.
                    `}
                </p>
              </div>
            </div>
            <div className="relative flex">
              <div className="bg-orange-700 px-6 py-14 rounded-xl text-center">
                <h4 className="text-md font-medium tracking-wider uppercase text-white">
                  Economic
                </h4>
                <p className="mt-3 text-base whitespace-pre-line text-gray-300">
                  {`Cooperation > Competition.

                    It’s easy to believe that the world is win-lose and the only way to get ahead is to push others down. We’re here to tell you that’s not true. 
                    
                    Sapien is working on building a win-win economic system built on a brand new token protocol that gives communities ultimate control over their financial agency.
                    `}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Contribue Section */}
        <div className="py-12 relative">
          <div aria-hidden="true" className="hidden md:block">
            <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-3xl"></div>
            <svg
              className="absolute top-8 left-1/2 -ml-3"
              width="404"
              height="392"
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200"
                    fill="currentColor"
                  ></rect>
                </pattern>
              </defs>
              <rect
                width="404"
                height="392"
                fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
              ></rect>
            </svg>
          </div>
          <div className="relative px-6 py-10 bg-purple-900 overflow-hidden shadow-xl sm:px-12 sm:py-20">
            <div
              aria-hidden="true"
              className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
            >
              <svg
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 1463 360"
              >
                <path
                  className="text-rose-400 text-opacity-40"
                  fill="currentColor"
                  d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                ></path>
                <path
                  className="text-rose-600 text-opacity-40"
                  fill="currentColor"
                  d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                ></path>
              </svg>
            </div>
            <div className="relative text-center">
              <h3 className="text-white uppercase font-bold text-lg">
                Contribute
              </h3>
              <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                <div className="bg-purple-900 px-6 py-14 transition-all hover:rounded-none ease-in-out flex-col rounded-tr-[50px] shadow-2xl overflow-hidden text-white text-center">
                  <h4 className="text-xl font-medium">Community</h4>
                  <p className="mt-8 text-base text-gray-300">
                    {
                      "We're looking for existing communities that want to join our mission and be first to use our tools to organize their communities."
                    }
                  </p>
                </div>
                <div className="bg-purple-900 px-6 py-14 transition-all hover:rounded-none ease-in-out flex-col rounded-br-[50px] shadow-2xl overflow-hidden text-white text-center">
                  <h4 className="text-xl font-medium">Team</h4>
                  <p className="mt-8 text-base text-gray-300">
                    {
                      "Our project is rapidly expanding and we're always in need of new, talented people to help move our mission forward."
                    }
                  </p>
                </div>
                <div className="bg-purple-900 px-6 py-14 transition-all hover:rounded-none ease-in-out flex-col rounded-tl-[50px] shadow-2xl overflow-hidden text-white text-center">
                  <h4 className="text-xl font-medium">Governance</h4>
                  <p className="mt-8 text-base text-gray-300">
                    {
                      "This is a community built project and the decisions we're making are based on input from the community. Help drive those decisions."
                    }
                  </p>
                </div>
              </div>
              <a
                href="https://discord.gg/HQnSZZSw"
                target="_blank"
                rel="noreferrer"
                className="inline-flex shadow-2xl items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-900 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-8"
              >
                Join Our Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
