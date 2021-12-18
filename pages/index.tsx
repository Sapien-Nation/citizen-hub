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
          <div className="flex items-center mx-auto max-w-6xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
            <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
              <p className="mt-3 max-w-md mx-auto uppercase font-extrabold text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
                Take the control back
              </p>
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                <span className="block xl:inline">The social</span>{' '}
                <span className="block xl:inline">media you/we deserve</span>
              </h1>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-full shadow">
                  <Link href="/passport">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10"
                    >
                      Get Passport
                    </a>
                  </Link>
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
            <div className="lg:w-1/2 flex items-center justify-center">
              {/*<LottiePlayer width="500" lottie="https://assets5.lottiefiles.com/packages/lf20_6x8fn1vr.json" />*/}
              <LottiePlayer
                width="500"
                lottie="https://assets3.lottiefiles.com/packages/lf20_ailluhhv.json"
              />
            </div>
          </div>
        </main>
      </div>
      <div className="overflow-hidden my-12">
        <div className="relative max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Sensemaking
            </h2>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              Tribes are the basis for social sensemaking
            </p>
          </div>
          <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid lg:grid-cols-11 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
            <div className="lg:col-span-5 rounded-lg shadow-lg px-6 py-6 border-4 border-red-200">
              <dt>
                <p className="flex text-lg leading-6 font-medium text-gray-900 text-red-500">
                  Big Black Box
                </p>
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Consequuntur omnis dicta cumque, inventore atque ab dolores
                aspernatur tempora ab doloremque.
              </dd>
            </div>
            <div className="lg:col-span-1 flex items-center justify-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                <ArrowNarrowRightIcon className="h-6 w-6" aria-hidden="true" />
              </div>
            </div>
            <div className="lg:col-span-5 rounded-lg shadow-lg px-6 py-6 border-4 border-green-200">
              <dt>
                <p className="flex text-lg leading-6 font-medium text-gray-900 text-green-500">
                  TribeChat
                </p>
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Corporis quisquam nostrum nulla veniam recusandae temporibus
                aperiam officia incidunt at distinctio ratione.
              </dd>
            </div>

            <div className="lg:col-span-5 rounded-lg shadow-lg px-6 py-6 border-4 border-red-200">
              <dt>
                <p className="flex text-lg leading-6 font-medium text-gray-900 text-red-500">
                  Polarization-to-Profit Pipeline
                </p>
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Consequuntur omnis dicta cumque, inventore atque ab dolores
                aspernatur tempora ab doloremque.
              </dd>
            </div>
            <div className="lg:col-span-1 flex items-center justify-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                <ArrowNarrowRightIcon className="h-6 w-6" aria-hidden="true" />
              </div>
            </div>
            <div className="lg:col-span-5 rounded-lg shadow-lg px-6 py-6 border-4 border-green-200">
              <dt>
                <p className="flex text-lg leading-6 font-medium text-gray-900 text-green-500">
                  Metaverse Newspaper
                </p>
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Corporis quisquam nostrum nulla veniam recusandae temporibus
                aperiam officia incidunt at distinctio ratione.
              </dd>
            </div>

            <div className="lg:col-span-5 rounded-lg shadow-lg px-6 py-6 border-4 border-red-200">
              <dt>
                <p className="flex text-lg leading-6 font-medium text-gray-900 text-red-500">
                  Erosion of Communities
                </p>
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Consequuntur omnis dicta cumque, inventore atque ab dolores
                aspernatur tempora ab doloremque.
              </dd>
            </div>
            <div className="lg:col-span-1 flex items-center justify-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                <ArrowNarrowRightIcon className="h-6 w-6" aria-hidden="true" />
              </div>
            </div>
            <div className="lg:col-span-5 rounded-lg shadow-lg px-6 py-6 border-4 border-green-200">
              <dt>
                <p className="flex text-lg leading-6 font-medium text-gray-900 text-green-500">
                  Digital Passport
                </p>
              </dt>
              <dd className="mt-2 text-base text-gray-500">
                Corporis quisquam nostrum nulla veniam recusandae temporibus
                aperiam officia incidunt at distinctio ratione.
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Full stack section */}
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-gray-100 lg:flex">
        <div className="lg:w-1/2">
          <p className="whitespace-pre-line leading-relaxed text-lg text-gray-600">
            {`From tech empires to financial institutions, we're surrounded by big black boxes that control how society operates with zero input from average people. Because they're so large, we're left with no choice but to engage with them. Some of these institutions shroud themselves in secrecy and complexity to reduce accountability and enable exploitation.

              With the right tools, we can get rid of big black boxes and go back to relying on the only thing we really need, each other. 
              
              Sapien is building the tools, community, and protocol for the next generation of human connection. 
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
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-gray-500">
        <div className="lg:flex text-white">
          <div className="lg:w-1/2">
            <LottiePlayer
              width="500"
              lottie="https://assets3.lottiefiles.com/packages/lf20_ailluhhv.json"
            />
          </div>
          <div className="lg:w-1/2">
            <p className="whitespace-pre-line text-right leading-loose text-lg">
              {`We recognize that the problems we're facing run deep. There's no one tool or easy solution that's going to fix the problem. That's why we're taking a holistic approach and developing a complete stack of tools to help communities thrive and realize their true potential. The future of the internet is being built on Web 3.0 through blockchain technology and we're watching it happen in real time. Let's make sure that future is built by people with the right vision.
                `}
            </p>
          </div>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          <div className="relative flex">
            <div className="absolute inset-x-0 top-0 transform translate-y-px">
              <div className="flex justify-center transform -translate-y-1/2">
                <span className="inline-flex rounded-full bg-emerald-700 px-4 py-1 text-md font-medium tracking-wider uppercase text-white">
                  Community
                </span>
              </div>
            </div>
            <div className="bg-sky-700 px-6 py-14 rounded-xl text-white text-center">
              <p className="mt-3 text-base whitespace-pre-line">
                {`The algorithms that power social media are failing us. In an age of endless information, people are becoming more polarized and confused.                    
                  
                  That's why we're putting humans at the center of our solution with human curation. The content you consume will be vetted by humans you can trust because they're endorsed by the communities you're a part of. 
                  `}
              </p>
            </div>
          </div>
          <div className="relative flex">
            <div className="absolute inset-x-0 top-0 transform translate-y-px">
              <div className="flex justify-center transform -translate-y-1/2">
                <span className="inline-flex rounded-full bg-emerald-700 px-4 py-1 text-md font-medium tracking-wider uppercase text-white">
                  Social
                </span>
              </div>
            </div>
            <div className="bg-purple-900 px-6 py-14 rounded-xl text-white text-center">
              <p className="mt-3 text-base whitespace-pre-line">
                {`There's no endorsement more powerful than a guarantee from someone you trust. 

                  Our NFT Passports allow communities to have shared networks of trust where people you trust can sign off on another user's passport to vouch for their skills, knowledge, and character. 
                  `}
              </p>
            </div>
          </div>
          <div className="relative flex">
            <div className="absolute inset-x-0 top-0 transform translate-y-px">
              <div className="flex justify-center transform -translate-y-1/2">
                <span className="inline-flex rounded-full bg-emerald-700 px-4 py-1 text-md font-medium tracking-wider uppercase text-white">
                  Economic
                </span>
              </div>
            </div>
            <div className="bg-orange-800 px-6 py-14 rounded-xl text-white text-center">
              <p className="mt-3 text-base whitespace-pre-line">
                {`Cooperation > Competition.

                  We've been conditioned to believe that the world is win-lose and the only way to get ahead is to push others down. We're here to tell you that's not true. 
                  
                  Sapien is working on building a win-win economic system built on a brand new token protocol that gives communities ultimate control over their financial agency.
                   
                  `}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Contribue Section */}
      <div className="max-w-6xl mx-auto py-12 mb-12 px-4 sm:px-6 lg:px-8 bg-gray-100 text-center">
        <h3 className="text-xl">Contribute</h3>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          <div className="bg-purple-900 px-6 py-14 transition-all hover:rounded-none ease-in-out flex-col rounded-tr-[50px] border-r shadow-lg overflow-hidden border-t-4 border-sky-500 text-white text-center">
            <h4 className="text-xl font-medium">Community</h4>
            <p className="mt-3 text-base">
              {
                "We're looking for existing communities that want to join our mission and be first to use our tools to organize their communities."
              }
            </p>
          </div>
          <div className="bg-purple-900 px-6 py-14 transition-all hover:rounded-none ease-in-out flex-col rounded-br-[50px] border-r shadow-lg overflow-hidden border-t-4 border-sky-500 text-white text-center">
            <h4 className="text-xl font-medium">Team</h4>
            <p className="mt-3 text-base">
              {
                "Our project is rapidly expanding and we're always in need of new, talented people to help move our mission forward."
              }
            </p>
          </div>
          <div className="bg-purple-900 px-6 py-14 transition-all hover:rounded-none ease-in-out flex-col rounded-tl-[50px] border-r shadow-lg overflow-hidden border-t-4 border-sky-500 text-white text-center">
            <h4 className="text-xl font-medium">Governance</h4>
            <p className="mt-3 text-base">
              {
                "This is a community built project and the decisions we're making are based on input from the community. Help drive those decisions."
              }
            </p>
          </div>
        </div>
        <a
          href="#"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-900 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-8"
        >
          Join Our Discord
        </a>
      </div>
    </>
  );
};

export default IndexPage;
