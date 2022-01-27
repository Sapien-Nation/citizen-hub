import AOS from 'aos';
import Link from 'next/link';
import { useEffect } from 'react';

// components
import { Animation, Head } from 'components/common';

// hooks
import { useAuth } from 'context/user';

// types
import { NextPage } from 'next';

const IndexPage: NextPage = () => {
  const { me } = useAuth();

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head title="Nation" />
      <div className="bg-gray-100">
        <main className="lg:relative">
          <div className="relative bg-white dark:bg-black border-b">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-black"></div>
              <Animation />
            </div>
            <div className=" max-w-6xl items-center mx-auto max-w-8xl w-full pt-20 pb-24 lg:py-28 lg:text-left relative">
              <div className="py-12 lg:px-8 px-6 sm:px-6">
                <p
                  data-aos="zoom-y-out"
                  data-aos-delay="300"
                  className="mt-3 text-white font-bold rounded-full text-xl sm:text-3xl md:mt-5"
                >
                  {"We're giving you back control. Reclaim your agency"}
                </p>
                <h1
                  data-aos="zoom-y-out"
                  data-aos-delay="600"
                  className="text-4xl rounded-3xl p-12 bg-black max-w-7xl text-white mt-5 tracking-tight font-extrabold sm:text-5xl md:text-6xl lg:text-5xl xl:text-5xl"
                >
                  <span className="block xl:inline">
                    <span className="pb-3 bg-clip-text text-transparent bg-gradient-to-r from-sapien to-sapien-40">
                      Sapien
                    </span>{' '}
                    is building the tools, community, and protocol for the next
                    generation of{' '}
                    <span className="pb-3 bg-clip-text text-transparent bg-gradient-to-r from-sapien to-sapien-40 sm:pb-5">
                      human connections
                    </span>
                    .
                  </span>{' '}
                </h1>
                <div className="mt-10 flex">
                  <div className="rounded-full shadow">
                    {/* <Link href="/passport">
                      <a
                        href="#"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white dark:text-black bg-sapien hover:bg-sapien-60 md:py-4 md:text-lg md:px-10"
                      >
                        Get Passport
                      </a>
                    </Link> */}
                  </div>
                  <div data-aos="zoom-y-out" data-aos-delay="600">
                    <Link href="https://discord.gg/HQnSZZSw">
                      <a className="bg-gradient-to-r from-sapien to-sapien-40 font-extrabold justify-center px-2 py-3 m rounded-md text-white md:py-3 md:text-xl md:px-8">
                        Join our Community
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <div className="max-w-6xl mx-auto rounded my-8">
        {/* Full stack section */}
        <div
          className="py-12 lg:px-8 px-6"
          data-aos="zoom-y-out"
          data-aos-delay="350"
        >
          <div className="lg:w-3/4">
            <p className="whitespace-pre-line leading-relaxed text-xl sm:text-2xl text-center lg:text-left">
              {`From tech empires to financial institutions, we're surrounded by big black boxes that control how society operates with zero input from average people. Because they're so large, we're left with no choice but to engage with them. Some of these institutions shroud themselves in secrecy and complexity to reduce accountability and enable exploitation.

                With the right tools, we can get rid of big black boxes and go back to relying on the only thing we really need, each other. 
              `}
            </p>
          </div>
        </div>
        <hr />
        <div className="py-12 lg:px-8 px-6">
          <div className="lg:flex" data-aos="zoom-y-out" data-aos-delay="350">
            <div className="lg:w-3/4">
              <p className="whitespace-pre-line leading-relaxed lg:text-left text-center text-xl sm:text-2xl">
                {`We recognize that the problems we're facing run deep. There's no one tool or easy solution that's going to fix the problem. That's why we're taking a holistic approach and developing a complete stack of tools to help communities thrive and realize their true potential. The future of the internet is being built on Web 3.0 through blockchain technology and we're watching it happen in real time. Let's make sure that future is built by people with the right vision.
                  `}
              </p>
            </div>
          </div>
          <div className="mt-24 max-w-lg mx-auto lg:max-w-none">
            <div
              data-aos="zoom-y-out"
              data-aos-delay="350"
              className="relative flex mb-12 bg-white dark:bg-black rounded-3xl"
            >
              <div className="px-8 py-12 rounded-3xl border border-black shadow-[8px_8px_#eaeaea] dark:shadow-[8px_8px_#27272a]">
                <h4 className="text-2xl sm:text-3xl font-extrabold">
                  Informational
                </h4>
                <p className="mt-3 text-xl sm:text-2xl whitespace-pre-line">
                  {`The algorithms that power social media are failing us. In an age of endless information, people are becoming more polarized and confused.                    
                    
                    That's why we're putting humans at the center of our solution with human curation. The content you consume will be vetted by humans you can trust because they're endorsed by the communities you're a part of. 
                    `}
                </p>
              </div>
            </div>
            <div
              data-aos="zoom-y-out"
              data-aos-delay="350"
              className="relative flex mb-12 bg-white dark:bg-black rounded-3xl"
            >
              <div className=" px-8 py-12 rounded-3xl border border-black shadow-[8px_8px_#eaeaea] dark:shadow-[8px_8px_#27272a]">
                <h4 className="text-2xl sm:text-3xl font-extrabold">Social</h4>
                <p className="mt-3 text-xl sm:text-2xl whitespace-pre-line">
                  {`It’s difficult to know what or who you can believe. Specific endorsements from communities you’re part of makes it much easier. 

                    Our NFT Passports allow communities to have shared networks where communities can sign off on another user’s passport in support of their skills, knowledge, and history on the platform.
                    `}
                </p>
              </div>
            </div>
            <div
              data-aos="zoom-y-out"
              data-aos-delay="350"
              className="relative flex mb-12 bg-white dark:bg-black rounded-3xl"
            >
              <div className="px-8 py-12 rounded-3xl border border-black shadow-[8px_8px_#eaeaea] dark:shadow-[8px_8px_#27272a]">
                <h4 className="text-2xl sm:text-3xl font-extrabold">
                  Economic
                </h4>
                <p className="mt-3 text-xl sm:text-2xl whitespace-pre-line">
                  {`Cooperation > Competition.

                    It’s easy to believe that the world is win-lose and the only way to get ahead is to push others down. We’re here to tell you that’s not true. 
                    
                    Sapien is working on building a win-win economic system built on a brand new token protocol that gives communities ultimate control over their financial agency.
                    `}
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        {/* Contribue Section */}
        <div className="py-12 mb-24 relative">
          <div className="relative rounded-2xl px-6">
            {/* <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-red-200 via-yellow-100 to-sapien-20 opacity-20"></div>
            </div> */}
            <div className="relative">
              <h3
                data-aos="zoom-y-out"
                data-aos-delay="350"
                className="font-extrabold text-2xl sm:text-3xl dark:text-white "
              >
                Contribute
              </h3>
              <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                <div
                  data-aos="zoom-y-out"
                  data-aos-delay="450"
                  className="bg-black px-8 py-12 rounded-3xl flex-col overflow-hidden text-white dark:text-black"
                >
                  <h4 className="text-2xl sm:text-3xl dark:text-white font-extrabold">
                    Community
                  </h4>
                  <p className="mt-8 text-xl sm:text-2xl text-white">
                    {
                      "We're looking for existing communities that want to join our mission and be first to use our tools to organize their communities."
                    }
                  </p>
                </div>
                <div
                  data-aos="zoom-y-out"
                  data-aos-delay="850"
                  className="bg-black px-8 py-12 rounded-3xl flex-col overflow-hidden text-white dark:text-black"
                >
                  <h4 className="text-2xl sm:text-3xl dark:text-white font-extrabold ">
                    Team
                  </h4>
                  <p className="mt-8 text-xl sm:text-2xl text-white">
                    {
                      "Our project is rapidly expanding and we're always in need of new, talented people to help move our mission forward."
                    }
                  </p>
                </div>
                <div
                  data-aos="zoom-y-out"
                  data-aos-delay="1250"
                  className="bg-black px-8 py-12 rounded-3xl flex-col overflow-hidden text-white dark:text-black"
                >
                  <h4 className="text-2xl sm:text-3xl dark:text-white font-extrabold">
                    Governance
                  </h4>
                  <p className="mt-8 text-xl sm:text-2xl text-white">
                    {
                      "This is a community built project and the decisions we're making are based on input from the community. Help drive those decisions."
                    }
                  </p>
                </div>
              </div>
              <div className="my-12">
                <Link href="https://discord.gg/HQnSZZSw">
                  <a className="relative shine bg-gradient-to-r from-sapien to-sapien-40 font-extrabold justify-center px-2 py-3 m rounded-md text-white md:py-3 md:text-xl md:px-8">
                    Join our Community
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
