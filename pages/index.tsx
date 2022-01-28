import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

// components
import { Head } from 'components/common';
import { Globe } from 'components/landing';

// utils
import { preloadImages } from 'utils/homepage';

// types
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const IndexPage: NextPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div data-scroll-section className="m-auto overflow-hidden relative">
      <section className="max-w-6xl -mt-10 min-h-screen flex flex-col justify-center align-center mx-auto px-8">
        <div>
          <Globe />
          <h2
            className="content__title md:text-8xl text-4xl font-extrabold drop-shadow-lg md:filter-none"
            data-scroll
            data-scroll-speed="2"
          >
            Become a Freshly Minted Citizen of the Metaverse
          </h2>
          <div className="my-12">
            <Link href="https://discord.gg/7utyR97RNw">
              <a className="relative shine bg-gradient-to-r from-sapien to-sapien-40 font-extrabold justify-center px-2 py-3 m rounded-md text-white md:py-3 md:text-xl md:px-8">
                Join our Community
              </a>
            </Link>
          </div>
          <p className="text-lg md:text-3xl font-bold drop-shadow-xl md:filter-none">
            Find Your Tribes. Launch Your Own Tokens. Shape the New Renaissance.
          </p>
        </div>
      </section>
      <div
        data-scroll
        data-scroll-speed="1"
        className="mt-24 mb-8 flex items-center justify-center lg:mx-auto px-8 md:px-6 lg:px-10"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold">
          <span className="pb-3 bg-clip-text text-transparent bg-gradient-to-r from-sapien to-sapien-40">
            One tool
          </span>{' '}
          to help you do it{' '}
          <span className="pb-3 bg-clip-text text-transparent bg-gradient-to-r from-sapien to-sapien-40">
            all
          </span>
          .
        </h2>
      </div>
      <div
        data-scroll
        data-scroll-speed="2"
        className="lg:mx-auto lg:grid lg:grid-cols-3 lg:gap-16 lg:items-start"
      >
        <div className="relative sm:py-16 lg:py-0 lg:col-span-2">
          <div className="lg:inset-y-0 lg:right-0">
            <img src="https://d1bdmh0gdusw0k.cloudfront.net/images/misc/asset2.jpeg" />
          </div>
        </div>
        <div className="relative m-8 lg:ml-8 lg:px-0">
          {/* Content area */}
          <p className="text-lg mb-4">
            Powerful utilities to navigate the Metaverse:
          </p>

          <ul className="list-disc text-lg">
            <li className="ml-6 mb-2">
              Community Social Ledger to build reputation and tell the story of
              your contributions
            </li>
            <li className="ml-6 mb-2">
              Unique ticket to Sapien Events and events from our partner
              communities
            </li>
            <li className="ml-6 mb-2">
              Give you irrevocable access to being a Sapien Tribe Citizen{' '}
            </li>
            <p className="text-lg mb-12">
              Join our{' '}
              <Link href="https://discord.gg/7utyR97RNw">
                <a>
                  <span className="underline underline-offset-4 cursor-pointer">
                    Discord
                  </span>{' '}
                </a>
              </Link>{' '}
              to secure your spot on the whitelist.
            </p>
            <Link href="/passport">
              <a className="mt-12 border font-extrabold justify-center px-2 py-3 m rounded-md text-white md:py-3 md:text-xl md:px-8">
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
          <Link href="https://discord.gg/7utyR97RNw">
            <a className="border font-extrabold justify-center px-2 py-3 m rounded-md text-white md:py-3 md:text-xl md:px-8">
              Join the Whitelist
            </a>
          </Link>
        </div>
      </div>

      <div
        data-scroll
        data-scroll-speed="1"
        className="flex flex-col items-start justify-start lg:mx-auto px-8"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold">
          {' '}
          <span className="pb-3 bg-clip-text text-transparent bg-gradient-to-r from-sapien to-sapien-40">
            Win-win
          </span>{' '}
          Tokenomics.
        </h2>
        <p className="text-lg">Sustainability. Scalability. Sapien.</p>
      </div>

      <div
        data-scroll
        data-scroll-speed="1"
        className="lg:mx-auto lg:grid lg:grid-cols-3 lg:gap-16 lg:items-start"
      >
        <div className="relative mx-auto mb-12 px-8 lg:px-0">
          {/* Content area */}
          <div className="pt-4">
            <div className="mt-4 md:pl-8">
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
        </div>
        <div className="relative lg:col-span-2">
          <div className="lg:inset-y-0 lg:left-0">
            <img src="https://d1bdmh0gdusw0k.cloudfront.net/images/misc/asset3.jpeg" />
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
        className="mt-24 flex justify-end lg:mx-auto  px-8 sm:px-6 lg:px-10"
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
        className="lg:mx-auto lg:grid lg:grid-cols-3 lg:gap-16 lg:items-start"
      >
        <div className="relative mb-12 mx-auto lg:px-0 col-span-2">
          {/* Content area */}
          <div className="pt-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Metavarse is coming"
              src="https://d1bdmh0gdusw0k.cloudfront.net/images/misc/asset1.jpeg"
            />
          </div>
        </div>
        <div className="relative">
          <div className="relative mx-auto max-w-md sm:max-w-3xl lg:px-0 lg:max-w-none lg:py-20">
            <div className="relative md:pr-8">
              <p className="text-xl mb-12">
                Where every community is a DAO. Every DAO is sovereign. Every
                DAO gets the tools to govern their community, mint their own
                tokens, and own collective assets.
              </p>
              <Link href="https://discord.gg/7utyR97RNw">
                <a className="mt-12 border font-extrabold justify-center px-2 py-3 m rounded-md text-white md:py-3 md:text-xl md:px-8">
                  Join the first social network of DAOs
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        data-scroll
        data-scroll-speed="1"
        className="flex flex-col mb-72 items-center justify-center lg:mx-auto lg:max-w-6xl"
      >
        <div className=" mx-auto grid gap-12 mx-8 lg:mx-0 lg:grid-cols-3 lg:max-w-none">
          <div className="p-8 rounded-xl bg-gradient-to-r from-sapien to-sapien-40 shadow-xl shadow-sapien/50 flex-col overflow-hidden">
            <p className="text-xl sm:text-2xl ">
              Let’s build a world with no limits except our own creativity,
              where everyone can let their passions and curiosity guide who they
              want to be.
            </p>
          </div>
          <div className="p-8 rounded-xl bg-gradient-to-r from-sapien to-sapien-40 shadow-xl shadow-sapien/50 flex-col overflow-hidden">
            <p className="text-xl sm:text-2xl ">
              Whether you want to be an artist, patron, investor, business
              owner, leader, changemaker, or all of the above, bring your story
              to the foundation of a new world.
            </p>
          </div>
          <div className="p-8 rounded-xl bg-gradient-to-r from-sapien to-sapien-40 shadow-xl shadow-sapien/50 flex-col overflow-hidden">
            <p className="text-xl sm:text-2xl ">Be the change</p>
          </div>
        </div>
        <Link href="#">
          <a
            href="#"
            className="mt-12 border font-extrabold justify-center px-2 py-3 m rounded-md text-white md:py-3 md:text-xl md:px-8"
          >
            Take me there
          </a>
        </Link>
      </div>
    </div>
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
