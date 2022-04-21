import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

// components
import { Head } from 'components/common';
import { Footer } from 'components/navigation';
import { Globe } from 'components/landing';

// utils
import { preloadImages } from 'utils/homepage';

// types
import type { NextPage } from 'next';

const Carousel = () => {
  return (
    <div
      id="carouselDarkVariant"
      className="carousel slide carousel-fade carousel-dark relative"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner relative w-full overflow-hidden rounded-4xl bg-white h-auto">
        <div className="carousel-item active relative float-left w-full">
          <div className="flex items-center justify-center">
            <img alt="" src="/images/rabbit-hole.jpg" className="h-64 my-3" />
          </div>
          <div className="h-32 py-5">
            <div className="px-20 text-md text-gray-600">
              <p>
                &quot;We are thrilled to be working with Sapien Network to build
                out our smart contract DAO with a built-in NFT marketplace and a
                collective governance model that returns the power, often
                usurped by executives and middlemen, back to the artists who
                deserve it most.&quot;
              </p>
              <span>- Nick Bradfield, Rabbit Hole Studios DAO Founder</span>
            </div>
          </div>
        </div>
        <div className="carousel-item relative float-left w-full">
          <div className="flex items-center justify-center">
            <img alt="" src="/images/harambe.png" className="h-64 my-3" />
          </div>
          <div className="h-32 py-5">
            <div className="px-20 text-md text-gray-600">
              <p>
                &quot;Harambe means family… to come together, to work as one.
                Through this DAO, we will achieve the unimaginable. There is no
                obstacle that cannot be conquered as a community.&quot;
              </p>
              <span>
                - Heather Marderosian, Harambe Foundation CEO & Founder
              </span>
            </div>
          </div>
        </div>
        <div className="carousel-item relative float-left w-full">
          <div className="flex items-center justify-center">
            <img alt="" src="/images/journo.png" className="h-64 my-3" />
          </div>
          <div className="h-32 py-5">
            <div className="px-20 text-md text-gray-600">
              <p>
                &quot;JournoDAO seeks to enable journalists across the world to
                own and monetize their product without financial mediation, and
                this mission would benefit from the social infrastructure being
                developed by Sapien Nation.&quot;
              </p>
              <span>- Clinamenic, JournoDAO Core Member</span>
            </div>
          </div>
        </div>
        <div className="carousel-item relative float-left w-full">
          <div className="flex items-center justify-center">
            <img alt="" src="/images/afropolitan.png" className="h-64 my-3" />
          </div>
          <div className="h-32 py-5">
            <div className="px-20 text-md text-gray-600">
              <p>
                &quot;Afropolitan&apos;s mission is to onboard one billion
                Africans into Web 3. It is a great feat of social and
                technological coordination, and we could think of no better
                partner than the Sapien Nation to help us on this journey.&quot;
              </p>
              <span>- Alpha Barry, Afropolitan DAO Core Member</span>
            </div>
          </div>
        </div>
        <div className="carousel-item relative float-left w-full">
          <div className="flex items-center justify-center">
            <img alt="" src="/images/mongol-nft.jpg" className="h-64 my-3" />
          </div>
          <div className="h-32 py-5">
            <div className="px-20 text-md text-gray-600">
              <p>
                &quot;Sapien Network is shaping the Crypto Renaissance and we
                are excited to integrate with Sapien Network to empower
                MongolNFT DAO.&quot;
              </p>
              <span>- JackJack (Itgel) Mongol NFT Co-Founder</span>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselDarkVariant"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselDarkVariant"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

const IndexPage: NextPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [isHover, setIsHover] = useState({
    passport: false,
    metaverse: false,
    tribe: false,
    community: false,
    nation: false,
    protocol: false,
    feature_1: false,
    feature_2: false,
    feature_3: false,
    feature_4: false,
  });

  return (
    <>
      <Head
        title="Homepage"
        description="Sapien is building the world's first sovereign digital nation, a Republic of DAOs powered by Sapien's first-of-its-kind NFT passport."
        image="/landing/Human.png"
      />
      <div className="m-auto overflow-hidden relative">
        {/* <Globe /> */}
        <div className="max-w-6xl min-h-screen flex flex-col justify-center align-center mx-auto px-8">
          <h2 className="text-3xl sm:text-6xl md:text-7xl font-extrabold drop-shadow-lg md:filter-none pb-9">
            <div className="container">
              <div className="rotator-wrapper">
                <h1>
                  Build your own&nbsp;
                  <span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-sapien to-sapien-40">
                      DAO
                    </span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-sapien to-sapien-40">
                      Guild
                    </span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-sapien to-sapien-40">
                      City
                    </span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-sapien to-sapien-40">
                      Nation
                    </span>
                  </span>
                </h1>
              </div>
            </div>
          </h2>
          <div className="pb-9">
            <p className="text-lg md:text-3xl font-bold drop-shadow-xl md:filter-none">
              The Sapien Protocol lets you build, connect, and invest in
              networks of DAOs
            </p>
          </div>
          <div className="mx-auto grid gap-12 lg:mx-0 lg:grid-cols-3 w-full">
            <div
              className="p-8 rounded-4xl bg-gradient-to-b from-sapien to-sapien-40 shadow-xl shadow-sapien/50 flex flex-col items-center justify-center h-80"
              onMouseEnter={() => setIsHover({ ...isHover, passport: true })}
              onMouseLeave={() => setIsHover({ ...isHover, passport: false })}
            >
              {isHover.passport ? (
                <p className="delay text-xl sm:text-2xl text-center">
                  Interface with DAOs and build networks of trust with
                  privacy-focused digital identity.
                </p>
              ) : (
                <h4 className="delay text-2xl sm:text-5xl dark:text-white font-extrabold text-center">
                  The Passport
                </h4>
              )}
            </div>
            <div
              className="p-8 rounded-4xl bg-gradient-to-b from-sapien to-sapien-40 shadow-xl shadow-sapien/50 flex flex-col items-center justify-center h-80"
              onMouseEnter={() => setIsHover({ ...isHover, metaverse: true })}
              onMouseLeave={() => setIsHover({ ...isHover, metaverse: false })}
            >
              {isHover.metaverse ? (
                <p className="delay text-xl sm:text-2xl text-center">
                  Replace newsfeed algorithms with a community-driven curation
                  market to make sense of the world together.
                </p>
              ) : (
                <h4 className="delay text-2xl sm:text-5xl dark:text-white font-extrabold text-center">
                  Metaverse Newspaper
                </h4>
              )}
            </div>
            <div
              className="p-8 rounded-4xl bg-gradient-to-b from-sapien to-sapien-40 shadow-xl shadow-sapien/50 flex flex-col items-center justify-center h-80"
              onMouseEnter={() => setIsHover({ ...isHover, tribe: true })}
              onMouseLeave={() => setIsHover({ ...isHover, tribe: false })}
            >
              {isHover.tribe ? (
                <p className="delay text-xl sm:text-2xl text-center">
                  Connect to a network of community tokens and invest in
                  communities, projects, and people that matter.
                </p>
              ) : (
                <h4 className="delay text-2xl sm:text-5xl dark:text-white font-extrabold text-center">
                  Tribe Treasury Token
                </h4>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col px-4 mx-auto mt-8 lg:grid lg:space-x-8 lg:grid-cols-7 max-w-7xl items-center">
          <div
            className="rounded-4xl mb-8 px-8 py-24 lg:py-12 flex flex-col col-span-3 justify-center md:px-16 bg-gradient-to-b from-sapien-60 to-sapien-blue-100 text-white text-justify h-96"
            onMouseEnter={() => setIsHover({ ...isHover, community: true })}
            onMouseLeave={() => setIsHover({ ...isHover, community: false })}
          >
            <div>
              {isHover.community ? (
                <div className="delay text-3xl">
                  <p className="mb-4">
                    The Sapien Network is the first dApp on the Sapien Protocol.
                  </p>
                  <p>
                    Plug into the Social Network of DAOs to find, launch, and
                    grow your community.
                  </p>
                </div>
              ) : (
                <h2 className="delay text-4xl md:text-6xl font-extrabold">
                  Community. Supercharged.
                </h2>
              )}
            </div>
          </div>
          <div
            className="rounded-2xl px-8 flex flex-col col-span-4 justify-center bg-transparent mb-8"
            ref={ref}
          >
            <div className="flex items-center">
              <div className="flex">
                <img
                  alt=""
                  src="/images/phone-1.png"
                  className={`${
                    inView ? 'slider slide-in-1' : ''
                  } max-w-lg md:max-w-xl -ml-8 sm:-ml-12 md:-ml-36 lg:-ml-52`}
                />
                <img
                  alt=""
                  src="/images/phone-2.png"
                  className={`${
                    inView ? 'slider slide-in-2' : ''
                  } max-w-lg md:max-w-xl -ml-96`}
                />
                <img
                  alt=""
                  src="/images/phone-3.png"
                  className={`${
                    inView ? 'slider slide-in-3' : ''
                  } max-w-lg md:max-w-xl -ml-96`}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="my-24 max-w-5xl mx-auto px-8 text-center">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8">
            <div
              className="rounded-4xl bg-gradient-to-br from-sapien-blue-60 to-sapien-40 flex flex-col items-center justify-center h-80"
              onMouseOver={() => setIsHover({ ...isHover, feature_1: true })}
              onMouseLeave={() => setIsHover({ ...isHover, feature_1: false })}
            >
              <div>
                {isHover.feature_1 ? (
                  <h2 className="delay text-4xl md:text-5xl px-4 font-extrabold">
                    Coordinate and collaborate with Channels & Rooms.
                  </h2>
                ) : (
                  <img
                    alt=""
                    src="/images/coordinate.png"
                    className="delay w-80"
                  />
                )}
              </div>
            </div>
            <div
              className="rounded-4xl bg-gradient-to-br from-sapien-blue-60 to-sapien-40 flex flex-col items-center justify-center h-80"
              onMouseOver={() => setIsHover({ ...isHover, feature_2: true })}
              onMouseLeave={() => setIsHover({ ...isHover, feature_2: false })}
            >
              <div>
                {isHover.feature_2 ? (
                  <h2 className="delay text-4xl md:text-5xl px-4 font-extrabold">
                    Form Tribes around shared interests and passions.
                  </h2>
                ) : (
                  <img alt="" src="/images/tribes.png" className="delay w-80" />
                )}
              </div>
            </div>
            <div
              className="rounded-4xl bg-gradient-to-br from-sapien-blue-60 to-sapien-40 flex flex-col items-center justify-center h-80"
              onMouseOver={() => setIsHover({ ...isHover, feature_3: true })}
              onMouseLeave={() => setIsHover({ ...isHover, feature_3: false })}
            >
              {isHover.feature_3 ? (
                <h2 className="delay text-4xl md:text-5xl px-4 font-extrabold">
                  Build reputation in the network with your passport.
                </h2>
              ) : (
                <img alt="" src="/images/passport.png" className="delay w-80" />
              )}
            </div>
            <div
              className="rounded-4xl bg-gradient-to-br from-sapien-blue-60 to-sapien-40 flex flex-col items-center justify-center h-80"
              onMouseOver={() => setIsHover({ ...isHover, feature_4: true })}
              onMouseLeave={() => setIsHover({ ...isHover, feature_4: false })}
            >
              {isHover.feature_4 ? (
                <h2 className="delay text-4xl md:text-5xl px-4 font-extrabold">
                  Automagical Web3 wallet for easy token management.
                </h2>
              ) : (
                <img alt="" src="/images/wallet.png" className="delay w-80" />
              )}
            </div>
          </div>
        </div>

        <div className="my-24 max-w-5xl mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-4xl font-extrabold">
            We&apos;re rolling out early access to the Sapien Network to early
            community members, select DAOs and all Passport holders.
          </h2>
          <div className="flex justify-evenly">
            <Link href="https://4cnw27iuk8s.typeform.com/to/f8wIuHU7?typeform-source=www.google.com">
              <a
                target="_blank"
                className="mt-12 border font-extrabold justify-center px-2 py-3 rounded-md text-white md:py-3 md:text-xl md:px-8"
              >
                Apply for Access
              </a>
            </Link>
            <Link href="/passport/purchase">
              <a
                target="_blank"
                className="mt-12 border font-extrabold justify-center px-2 py-3 rounded-md text-white md:py-3 md:text-xl md:px-8"
              >
                Purchase Passport
              </a>
            </Link>
          </div>
        </div>

        <div
          data-scroll
          data-scroll-speed="-2"
          data-scroll-direction="horizontal"
          className="flex flex-col px-4 mx-auto mt-8 lg:grid lg:space-x-8 lg:grid-cols-7 max-w-7xl"
        >
          <div
            className="rounded-4xl mb-8 px-8 py-24 lg:py-12 flex flex-col col-span-3 justify-center md:px-16 bg-gradient-to-b from-sapien-blue-100 to-sapien-green-100 text-white h-96"
            onMouseEnter={() => setIsHover({ ...isHover, nation: true })}
            onMouseLeave={() => setIsHover({ ...isHover, nation: false })}
          >
            {isHover.nation ? (
              <p className="delay text-2xl mb-4 mt-8 text-justify">
                The Sapien Nation is the flagship community built on the Sapien
                Protocol. Our mission is to unite and empower leaders,
                sensemakers, and builders looking to make lasting change and
                create a shared future together.
              </p>
            ) : (
              <h2 className="delay text-4xl md:text-6xl font-extrabold">
                The Republic of DAOs
              </h2>
            )}
          </div>
          <div className="lg:mb-0 px-8 flex flex-col col-span-4 justify-center bg-transparent">
            <h2 className="md:text-5xl text-4xl font-extrabold drop-shadow-lg md:filter-none">
              &quot;We&apos;re not just building a bridge to Web3, we&apos;re
              using Web3 to build a bridge to a better future.&quot;
            </h2>
          </div>
        </div>

        <div className="mt-24 mb-8 flex items-center justify-center lg:mx-auto px-8 md:px-6 lg:px-10">
          <h2 className="text-4xl md:text-6xl font-extrabold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sapien to-sapien-40">
              Who&apos;s on
            </span>{' '}
            board
          </h2>
        </div>
        <div className="flex flex-col px-4 mx-auto mt-8 lg:space-x-8 max-w-5xl">
          <Carousel />
        </div>

        <div
          data-scroll
          data-scroll-speed="2"
          data-scroll-direction="horizontal"
          className="my-24 flex flex-col px-4 mx-auto lg:grid lg:space-x-8 lg:grid-cols-7 max-w-7xl pb-8"
        >
          <div className="rounded-4xl mb-8 lg:mb-0 px-8 flex flex-col col-span-4 justify-center bg-sapien-20 hover:bg-sapien-40">
            <div className="max-w-2xl h-full mx-auto flex items-center">
              <img
                alt="Metavarse is coming"
                src="https://d1bdmh0gdusw0k.cloudfront.net/images/misc/D3_Modif_2.jpeg"
                className="rounded-4xl"
              />
            </div>
          </div>
          <div
            className="rounded-4xl p-8 flex flex-col col-span-3 justify-between md:px-16 bg-gradient-to-t from-sapien-blue-100 to-sapien-60 text-white h-96"
            onMouseEnter={() => setIsHover({ ...isHover, protocol: true })}
            onMouseLeave={() => setIsHover({ ...isHover, protocol: false })}
          >
            <span></span>
            {isHover.protocol ? (
              <div className="delay">
                <ul className="list-disc text-xl ml-4">
                  <li>
                    Cross-DAO permissions in the passport for easy
                    collaboration.
                  </li>
                  <li>
                    Native content tokenization and curation within and among
                    DAOs.
                  </li>
                  <li>
                    Mint and hold your DAOs sovereign currency and other digital
                    assets in your Sapien Vault.
                  </li>
                </ul>
              </div>
            ) : (
              <h2 className="delay text-3xl md:text-5xl font-extrabold text-center">
                On the Horizon
              </h2>
            )}
            <div className="flex justify-between">
              <Link href="https://discord.gg/DVDe3ZwuYR">
                <a
                  target="_blank"
                  className="text-base font-semibold text-white underline mt-5 block"
                >
                  Join Discord
                </a>
              </Link>
              <Link href="https://4cnw27iuk8s.typeform.com/to/f8wIuHU7?typeform-source=www.google.com">
                <a
                  target="_blank"
                  className="text-base font-semibold text-white underline mt-5 block"
                >
                  Apply to have access
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full lg:mb-44">
          <Footer />
        </div>
      </div>
    </>
  );
};

const IndexPageProxy = () => {
  const [isLoading, setIsLoading] = useState(true);

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
