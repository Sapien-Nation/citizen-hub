import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
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
  return (
    <div data-scroll-section className="m-auto">
      <section className="max-w-6xl -mt-10 min-h-screen flex flex-col justify-center align-center mx-auto px-2 sm:px-4 lg:px-8">
        <div>
          <Globe />
          <h2
            className="content__title sm:text-8xl text-4xl font-extrabold"
            data-scroll
            data-scroll-speed="2"
          >
            Become a Freshly Minted Citizen of the Metaverse
          </h2>
          <div className="w-80 my-8">
            <Link href="https://discord.gg/HQnSZZSw">
              <a
                href="#"
                className="bg-gradient-to-r from-sapien via-violet-500 to-blue-600 flex items-center font-extrabold justify-center px-6 py-3 text-base font-medium rounded-md text-white md:py-3 md:text-2xl md:px-8"
              >
                Join our Community
              </a>
            </Link>
          </div>
          <p className="text-2xl">
            Find Your Tribes. Launch Your Own Tokens. Shape the New Renaissance.
          </p>
        </div>
      </section>
      <div
        data-scroll
        data-scroll-speed="1"
        className="mt-48 flex items-center justify-center lg:mx-auto sm:px-6 lg:px-10"
      >
        <h2 className="text-6xl font-extrabold">
          One tool to help you do it all.
        </h2>
      </div>
      <div
        data-scroll
        data-scroll-speed="2"
        className="lg:mx-auto sm:px-6 lg:px-10 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start"
      >
        <div className="relative sm:py-16 lg:py-0">
          <div
            aria-hidden="true"
            className="hidden md:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
          >
            <div className="absolute top-8 w-6/12 bg-center bg-cover h-96 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12 bg-[url('https://techunwrapped.com/wp-content/uploads/2021/11/An-Asian-city-will-be-the-first-to-create-a.jpg')]"></div>
          </div>
          <div className="relative mx-auto max-w-md sm:max-w-3xl px-6 lg:px-0 lg:max-w-none lg:py-20">
            <div className="relative px-8">
              <div className="px-4 py-2 backdrop-blur-md bg-white/30 rounded-md">
                <p className="text-lg text-black font-extrabold">
                  Join the social network of DAOs
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mx-auto px-6 lg:px-0">
          {/* Content area */}
          <div className="pt-4">
            <div className="mt-4">
              <p className="text-xl mb-8">
                Powerful utilities to navigate the Metaverse:
              </p>

              <ul className="list-disc text-xl">
                <li className="ml-6 mb-3">
                  Community Social Ledger to build reputation and tell the story
                  of your contributions
                </li>
                <li className="ml-6 mb-3">
                  Unique ticket to Sapien Events and events from our partner
                  communities
                </li>
                <li className="ml-6 mb-3">
                  Give you irrevocable access to being a Sapien Tribe Citizen{' '}
                </li>
                <p className="text-xl mb-8">
                  Join our{' '}
                  <Link href="https://discord.gg/HQnSZZSw">
                    <a>
                      <span className="underline underline-offset-4 cursor-pointer">
                        Discord
                      </span>{' '}
                    </a>
                  </Link>{' '}
                  to secure your spot on the whitelist.
                </p>
                <div className="w-80 my-8">
                  <Link href="/passport">
                    <a
                      href="#"
                      className="bg-gradient-to-r from-sapien via-violet-500 to-blue-600 flex items-center font-extrabold justify-center px-6 py-3 text-base font-medium rounded-md text-white md:py-3 md:text-2xl md:px-8"
                    >
                      Learn more
                    </a>
                  </Link>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        data-scroll
        data-scroll-speed="1"
        className="flex flex-col mt-56 items-center justify-center lg:mx-auto sm:px-6 lg:px-10 lg:max-w-6xl"
      >
        <h2 className="text-4xl text-center">
          Holders will have the opportunity to choose an avatar of one of their
          favorite figures from history to celebrate our diverse histories and
          unite to build our shared future.
        </h2>
        <div className="w-96 my-12">
          <Link href="/passport">
            <a
              href="#"
              className="bg-gradient-to-r from-violet-500 via-blue to-sapien text-white flex items-center font-extrabold justify-center px-6 py-3 text-base font-medium rounded-xl md:py-3 md:text-2xl md:px-8"
            >
              Become a Founder
            </a>
          </Link>
        </div>
      </div>

      <section className="tiles" id="grid">
        <div className="tiles__wrap">
          <div
            className="tiles__line"
            data-scroll
            data-scroll-speed="1"
            data-scroll-target="#grid"
            data-scroll-direction="horizontal"
          >
            <div
              className="tiles__line-img rounded-xl"
              style={{ backgroundImage: 'url(landing/Arminius.png)' }}
            ></div>
            <div
              className="tiles__line-img rounded-xl"
              style={{ backgroundImage: 'url(landing/Bob_Marley.png)' }}
            ></div>
            <div
              className="tiles__line-img rounded-xl"
              style={{ backgroundImage: 'url(landing/Kobe_Bryant.png)' }}
            ></div>
            <div
              className="tiles__line-img rounded-xl"
              style={{ backgroundImage: 'url(landing/Michaelangelo.png)' }}
            ></div>
            <div
              className="tiles__line-img rounded-xl"
              style={{ backgroundImage: 'url(landing/Mozart.png)' }}
            ></div>
            <div
              className="tiles__line-img rounded-xl"
              style={{ backgroundImage: 'url(landing/Adam_Smith.png)' }}
            ></div>
            <div
              className="tiles__line-img rounded-xl"
              style={{
                backgroundImage: 'url(landing/Alexander_Hamilton.png)',
              }}
            ></div>
          </div>
          <div
            className="tiles__line"
            data-scroll
            data-scroll-speed="3"
            data-scroll-target="#grid"
            data-scroll-direction="horizontal"
          >
            <div
              className="tiles__line-img rounded-xl"
              style={{ backgroundImage: 'url(landing/buddha4.png)' }}
            ></div>
            <div
              className="tiles__line-img rounded-xl"
              style={{ backgroundImage: 'url(landing/Charles_Darwin.png)' }}
            ></div>
            <div
              className="tiles__line-img rounded-xl"
              style={{ backgroundImage: 'url(landing/Che_Guevara.png)' }}
            ></div>
            <div
              className="tiles__line-img rounded-xl"
              style={{ backgroundImage: 'url(landing/Clara_Barton.png)' }}
            ></div>
            <div
              className="tiles__line-img rounded-xl"
              style={{ backgroundImage: 'url(landing/Diogenes.png)' }}
            ></div>
            <div
              className="tiles__line-img rounded-xl"
              style={{
                backgroundImage: 'url(landing/Edsger_Dijkstra.png)',
              }}
            ></div>
          </div>
        </div>
      </section>

      <div
        data-scroll
        data-scroll-speed="1"
        className="mt-1 flex lg:mx-auto sm:px-6 lg:px-10"
      >
        <h2 className="text-6xl font-extrabold">
          Our Vision: The United Republic of DAOs.
        </h2>
      </div>
      <div
        data-scroll
        data-scroll-speed="2"
        className="lg:mx-auto sm:px-6 lg:px-10 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start"
      >
        <div className="relative">
          <div className="relative mx-auto max-w-md sm:max-w-3xl px-6 lg:px-0 lg:max-w-none lg:py-20">
            <div className="relative">
              <p className="text-xl">
                Where every community is a DAO. Every DAO is sovereign. Every
                DAO gets the tools to govern their community, mint their own
                tokens, and own collective assets.
              </p>
              <div className="mt-4">
                <Link href="/passport">
                  <a
                    href="#"
                    className="bg-gradient-to-r from-yellow-500 via-yellow-200 to-yellow-600 text-black flex items-center font-extrabold justify-center px-6 py-3 text-base font-medium rounded-xl md:py-3 md:text-2xl md:px-8"
                  >
                    Join the first social network of DAOs.
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mx-auto px-6 lg:px-0">
          {/* Content area */}
          <div className="pt-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="rounded-xl"
              alt="Metavarse is coming"
              src="https://images.newindianexpress.com/uploads/user/imagelibrary/2021/11/27/w1200X800/Metaverse_is_Coming.jpg"
            />
          </div>
        </div>
      </div>
      <div
        data-scroll
        data-scroll-speed="1"
        className="mt-48 flex flex-col items-center justify-center lg:mx-auto sm:px-6 lg:px-10"
      >
        <h2 className="text-6xl font-extrabold">Win-win Tokenomics.</h2>
        <p className="text-xl sm:text-2xl mb-8">
          Sustainability. Scalability. Sapien.
        </p>
      </div>

      <div
        data-scroll
        data-scroll-speed="2"
        className="lg:mx-auto sm:px-6 lg:px-10 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start"
      >
        <div className="relative mx-auto px-6 lg:px-0">
          {/* Content area */}
          <div className="pt-4">
            <div className="mt-4">
              <p className="text-xl mb-8">
                Backed by their own vaults of curated digital and physical
                assets, each community will be able to:
              </p>

              <ul className="list-disc text-xl">
                <li className="ml-6 mb-3">
                  Launch their own social currency collateralized by their vault
                </li>
                <li className="ml-6 mb-3">
                  Invest in the people, projects, and communities that matter
                </li>
                <li className="ml-6 mb-3">
                  Connect to a broader economy linked by a shared AMM liquidity
                  network{' '}
                </li>
                <li className="ml-6 mb-3">
                  Govern to pursue powerful initiatives like Universal Basic
                  Income, Crowdfunding, and Mutual Aid{' '}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="relative sm:py-16 lg:py-0">
          <div className="relative mx-auto max-w-md sm:max-w-3xl px-6 lg:px-0 lg:max-w-none lg:py-20">
            <div className="relative px-8">
              <div className="px-8 py-12 bg-gradient-to-r from-green-500 via-teal-500 to-blue-600 rounded-3xl">
                <p className="text-xl font-extrabold sm:text-2xl text-white">
                  Sapien is reinventing how we connect with others.
                </p>
                <p className="text-xl sm:text-2xl text-white">
                  Read more about the Sapien vision in the purple paper.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        data-scroll
        data-scroll-speed="1"
        className="mt-24 flex flex-col items-end justify-end lg:mx-auto sm:px-6 lg:px-10"
      >
        <h2 className="text-6xl font-extrabold mb-8">Craft Your Story.</h2>
        <p className="text-xl sm:text-2xl mb-8">
          Let’s build a world with no limits except our own creativity, where
          everyone can let their passions and curiosity guide who they want to
          be.
        </p>
        <p className="text-xl sm:text-2xl mb-8">
          Whether you want to be an artist, patron, investor, business owner,
          leader, changemaker, or all of the above, bring your story to the
          foundation of a new world.
        </p>
      </div>

      <section className="content">
        <a
          className="text-6xl font-extrabold"
          data-scroll
          data-scroll-speed="4"
        >
          <span className="pb-3 bg-clip-text text-transparent bg-gradient-to-r from-sapien to-sapien-40">
            Be the change
          </span>
        </a>
      </section>
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
      <Head title="Nation" />
      {isLoading ? null : <IndexPage />}
    </>
  );
};

export default IndexPageProxy;
