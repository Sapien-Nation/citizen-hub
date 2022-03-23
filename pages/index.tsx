import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

// components
import { Head } from 'components/common';
import { Globe } from 'components/landing';
import { Footer } from 'components/navigation';

// utils
import { preloadImages } from 'utils/homepage';

// types
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

// icons
import {
  IdentificationIcon,
  ChartSquareBarIcon,
  KeyIcon,
  CashIcon,
} from '@heroicons/react/outline';

const IndexPage: NextPage = () => {
  return (
    <>
      <Head
        title="Homepage"
        description="Sapien is building the world’s first sovereign digital nation, a Republic of DAOs powered by Sapien’s first-of-its-kind NFT passport."
        image="/landing/Human.png"
      />
      <div data-scroll-section className="m-auto overflow-hidden relative">
        <Globe />
        <section className="max-w-6xl -mt-10 min-h-screen flex flex-col justify-center align-center mx-auto px-8">
          <div>
            <h2
              className="content__title md:text-8xl text-4xl font-extrabold drop-shadow-lg md:filter-none"
              data-scroll
              data-scroll-speed="2"
            >
              Become a Freshly Minted Citizen of the Metaverse
            </h2>
            <div className="my-12">
              <Link href="/passport/purchase">
                <a className="relative shine bg-gradient-to-r from-sapien to-sapien-40 font-extrabold justify-center px-2 py-3 m rounded-md text-white md:py-3 md:text-xl md:px-8">
                  Get your Passport
                </a>
              </Link>
            </div>
            <p className="text-lg md:text-3xl font-bold drop-shadow-xl md:filter-none z-10">
              Find Your Tribes. Launch Your Own Tokens. Shape the New
              Renaissance.
            </p>
          </div>
        </section>
        <div
          data-scroll
          data-scroll-speed="1"
          className="mt-24 mb-8 flex items-center justify-center lg:mx-auto px-8 md:px-6 lg:px-10"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sapien to-sapien-40">
              One tool
            </span>{' '}
            to help you do it{' '}
            <span className=" bg-clip-text text-transparent bg-gradient-to-r from-sapien to-sapien-40">
              all
            </span>
            .
          </h2>
        </div>
        <div
          data-scroll
          data-scroll-speed="2"
          className="lg:mx-auto lg:grid lg:grid-cols-3 lg:gap-8 lg:items-start"
        >
          <div className="relative sm:py-16 lg:py-0 lg:col-span-2">
            <div className="lg:inset-y-0 lg:right-0">
              <img
                src="https://d1bdmh0gdusw0k.cloudfront.net/images/misc/asset2.jpeg"
                alt="Passport image"
              />
            </div>
          </div>
          <div className="relative m-8 lg:m-0 mt-8 lg:mr-8 lg:px-0">
            {/* Content area */}
            <p className="text-lg mb-4">
              The Passport will be a unique NFT that grants citizenship to the
              Sapien Tribe.
            </p>
            <p className="text-lg mb-4">
              The NFT Passport will include powerful utilities to navigate the
              Metaverse:
            </p>

            <ul className="list-none text-lg">
              <li className="ml-3 mb-3 flex">
                <IdentificationIcon className="h-10 w-10 -mt-1 mr-2 text-white" />
                Identify yourself while maintaining privacy and sharing only
                what you need to
              </li>
              <li className="ml-3 mb-3 flex">
                <ChartSquareBarIcon className="h-10 w-10 -mt-1 mr-2 text-white" />
                Build reputation and record your contributions to your tribes on
                a Social Ledger
              </li>
              <li className="ml-3 mb-3 flex">
                <KeyIcon className="h-10 w-10 -mt-1 mr-2 text-white" />
                Access exclusive events and digital spaces in the Sapien
                Metaverse
              </li>
              <li className="ml-3 mb-3 flex">
                <CashIcon className="h-10 w-10 -mt-1 mr-2 text-white" />
                Create social currencies backed by a network of value-aligned
                Tribes
              </li>
              <p className="text-lg mb-12">
                Join our{' '}
                <Link href="https://discord.gg/DgUfraghMW">
                  <a target="_blank">
                    <span className="underline underline-offset-4 cursor-pointer">
                      Discord
                    </span>{' '}
                  </a>
                </Link>{' '}
                to secure your spot on the whitelist.
              </p>
              <Link href="/passport">
                <a
                  target="_blank"
                  className="mt-12 border font-extrabold justify-center px-2 py-3 m rounded-md text-white md:py-3 md:text-xl md:px-8"
                >
                  Learn more
                </a>
              </Link>
            </ul>
          </div>
        </div>

        <div
          data-scroll
          data-scroll-speed="1"
          className="relative flex justify-center mx-8 lg:mx-0 mt-24 mb-36"
        >
          <div className="px-8 py-12 lg:max-w-6xl rounded-xl bg-gradient-to-r from-sapien to-sapien-40 shadow-xl shadow-sapien/50">
            <h2 className="text-xl font-bold sm:text-3xl mb-12">
              Holders will have the opportunity to choose an avatar of one of
              their favorite figures from history to celebrate our diverse
              histories and unite to build our shared future.
            </h2>
            <Link href="/passport/purchase">
              <a className="border font-extrabold justify-center px-2 py-3 m rounded-md text-white md:py-3 md:text-xl md:px-8">
                Purchase Passport
              </a>
            </Link>
          </div>
        </div>

        <div
          data-scroll
          data-scroll-speed="1"
          className="flex flex-col items-center justify-center mb-8 lg:mx-auto px-8"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold">
            {' '}
            <span className="pb-3 bg-clip-text text-transparent bg-gradient-to-r from-sapien to-sapien-40">
              Win-win
            </span>{' '}
            Tokenomics.
          </h2>
        </div>

        <div
          data-scroll
          data-scroll-speed="1"
          className="lg:mx-auto lg:grid lg:grid-cols-3 lg:gap-8 lg:items-start"
        >
          <div className="relative mx-auto mb-12 px-8 lg:px-0">
            {/* Content area */}
            <div className="mt-4 md:pl-8">
              <p className="text-lg mb-8">
                Sustainability. Scalability. Sapien.
              </p>

              <p className="text-lg mb-8">
                Backed by their own vaults of curated digital and physical
                assets, each community will be able to:
              </p>

              <ul className="list-disc text-lg">
                <li className="ml-6 mb-2">
                  Launch their own social currency collateralized by their vault
                </li>
                <li className="ml-6 mb-2">
                  Invest in the people, projects, and communities that matter
                </li>
                <li className="ml-6 mb-2">
                  Connect to a broader economy linked by a shared AMM liquidity
                  network{' '}
                </li>
                <li className="ml-6 mb-2">
                  Govern to pursue powerful initiatives like Universal Basic
                  Income, Crowdfunding, and Mutual Aid{' '}
                </li>
              </ul>
            </div>
          </div>
          <div className="relative lg:col-span-2">
            <div className="lg:inset-y-0 lg:left-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Sustainability. Scalability. Sapien"
                src="https://d1bdmh0gdusw0k.cloudfront.net/images/misc/Scene_2_B-01.jpeg"
              />
              {/* <div
              className=" bg-center bg-cover sm:h-screen h-96 lg:top-12"
              style={{
                backgroundImage:
                  "url('https://d1bdmh0gdusw0k.cloudfront.net/images/misc/asset2.jpeg')",
              }}
            ></div> */}
            </div>
            {/* <div className="relative mx-auto max-w-md sm:max-w-3xl px-6 lg:px-0 lg:max-w-none lg:py-20">
            <div className="relative pt-4">
              <div className="px-4 py-2 backdrop-blur-md rounded-md">
                <p className="text-xl  font-extrabold">
                  Sapien is reinventing how we connect with others.
                </p>
              </div>
            </div>
          </div> */}
          </div>
        </div>

        <div
          data-scroll
          data-scroll-speed="1"
          className="mt-24 flex justify-center lg:mx-auto  px-8 sm:px-6 lg:px-10"
        >
          <h2 className="text-4xl text-end md:text-6xl font-extrabold">
            <span className="pb-3 bg-clip-text text-transparent bg-gradient-to-r from-sapien to-sapien-40">
              Our Vision
            </span>{' '}
            : The United Republic of{' '}
            <span className="pb-3 bg-clip-text text-transparent bg-gradient-to-r from-sapien to-sapien-40">
              DAOs
            </span>
            .
          </h2>
        </div>
        <div
          data-scroll
          data-scroll-speed="2"
          className="lg:mx-auto lg:grid lg:grid-cols-3 lg:gap-8 lg:items-start"
        >
          <div className="relative mb-12 mx-auto lg:px-0 col-span-2">
            {/* Content area */}
            <div className="pt-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Metavarse is coming"
                src="https://d1bdmh0gdusw0k.cloudfront.net/images/misc/D3_Modif_2.jpeg"
              />
            </div>
          </div>
          <div className="relative">
            <div className="relative lg:mx-auto mx-8 sm:max-w-3xl lg:max-w-none">
              <div className="relative md:pr-8">
                <p className="text-xl mb-4 mt-8">
                  Where every community is a DAO. Every DAO is sovereign. Every
                  DAO gets the tools to govern their community, mint their own
                  tokens, and own collective assets.
                </p>
                <p className="text-xl mb-4">
                  The Metaverse is a world woven of stories, where we can blur
                  and transcend the boundaries of the digital and the physical.{' '}
                </p>
                <p className="text-xl mb-4">
                  It&apos;s a sandbox where the only limit is our collective
                  creativity, and where each of us can write our own story.
                </p>
                <p className="text-xl mb-12">
                  It&apos;s time to go back to the beginning, to find our tribes
                  and ignite a new renaissance as we build the cultures, cities
                  and nations of the future.
                </p>
                <p className="text-xl mb-12">
                  Join the first social network of DAOs
                </p>
                <Link href="https://discord.gg/DgUfraghMW">
                  <a
                    target="_blank"
                    className="mt-12 border font-extrabold justify-center px-2 py-3 m rounded-md text-white md:py-3 md:text-xl md:px-8"
                  >
                    Join
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div
          data-scroll
          data-scroll-speed="1"
          className="flex flex-col lg:mb-32 mb-24 mt-12 items-center justify-center lg:mx-auto lg:max-w-6xl"
        >
          <div className=" mx-auto grid gap-12 mx-8 lg:mx-0 lg:grid-cols-3 lg:max-w-none">
            <div className="p-8 rounded-xl bg-gradient-to-r from-sapien to-sapien-40 shadow-xl shadow-sapien/50 flex-col overflow-hidden">
              <h4 className="text-2xl sm:text-3xl dark:text-white font-extrabold mb-2">
                Community
              </h4>
              <p className="text-xl sm:text-2xl">
                {
                  "We're looking for existing communities that want to join our mission and be first to use our tools to organize their communities."
                }
              </p>
            </div>
            <div className="p-8 rounded-xl bg-gradient-to-r from-sapien to-sapien-40 shadow-xl shadow-sapien/50 flex-col overflow-hidden">
              <h4 className="text-2xl sm:text-3xl dark:text-white font-extrabold mb-2">
                Team
              </h4>
              <p className="text-xl sm:text-2xl">
                {
                  "Our project is rapidly expanding and we're always in need of new, talented people to help move our mission forward."
                }
              </p>
            </div>
            <div className="p-8 rounded-xl bg-gradient-to-r from-sapien to-sapien-40 shadow-xl shadow-sapien/50 flex-col overflow-hidden">
              <h4 className="text-2xl sm:text-3xl dark:text-white font-extrabold mb-2">
                Governance
              </h4>
              <p className="text-xl sm:text-2xl">
                {
                  "This is a community built project and the decisions we're making are based on input from the community. Help drive those decisions."
                }
              </p>
            </div>
          </div>
          <Link href="https://discord.gg/DgUfraghMW">
            <a
              target="_blank"
              className="mt-12 border font-extrabold justify-center px-2 py-3 m rounded-md text-white md:py-3 md:text-xl md:px-8"
            >
              Take me there
            </a>
          </Link>
        </div>
        <div data-scroll data-scroll-speed="1" className="w-full lg:mb-44">
          <Footer />
        </div>
      </div>
    </>
  );
};

const IndexPageProxy = () => {
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();
  const containerRef = useRef(null);

  useEffect(() => {
    if (window) {
      Promise.allSettled([preloadImages('.tiles__line-img')]).then(() => {
        setIsLoading(false);
      });
    }
  }, []);

  return (
    <>
      <Head title="Tribe" />
      {isLoading ? null : <IndexPage />}
    </>
  );
};

export default IndexPageProxy;
