import Link from 'next/link';
import CountUp from 'react-countup';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

// components
import { Head } from 'components/common';
import { Footer } from 'components/navigation';

// utils
import { preloadImages } from 'utils/homepage';

// types
import type { NextPage } from 'next';
import { _base16To36 } from '@ethersproject/bignumber';

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
        <div className="carousel-item relative float-left w-full">
          <div className="flex items-center justify-center">
            <img alt="" src="/images/noir-united.png" className="h-64 my-3" />
          </div>
          <div className="h-32 py-5">
            <div className="px-20 text-md text-gray-600">
              <p>
                &quot;We are happy to join Sapien for the possibility to expand
                our network and community. We are excited about the future and
                the ways in which web3 could be used to uplift communities of
                color to provide equitable access to technology and ideas.&quot;
              </p>
              <span>- Nassim Ashford, DAO Founder</span>
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
    daos: false,
    citizens: false,
    treasury: false,
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
        <div
          className="2xl:min-h-[168vh] min-h-screen mx-auto -m-12 flex justify-center"
          style={{
            backgroundImage: `url('/images/home-background.png')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="max-w-8xl pt-52 flex flex-col gap-3 px-5">
            <h2 className="text-3xl sm:text-6xl md:text-7xl font-extrabold">
              <div className="container">
                <div>
                  <h1>
                    Founding the
                    <span>
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-sapien-80 to-sapien-20 pl-3">
                        Sapien Nation
                      </span>
                    </span>
                  </h1>
                </div>
              </div>
            </h2>
            <p className="text-lg md:text-3xl font-bold">
              <span className="inline md:block pt-6 pb-1 pr-1 font-semibold">
                The Sapien Nation is a{' '}
                <a
                  href="https://thenetworkstate.com/"
                  className="network-state"
                  target="_blank"
                  rel="noreferrer"
                >
                  {' '}
                  Network State
                </a>{' '}
                & Republic of DAOs,
              </span>
              <span className="inline pt-2 pr-2 font-semibold">
                built by and for:
              </span>
              <span className="rotator-wrapper flex-wrap md:flex-nowrap">
                <span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-sapien-80 to-sapien-20 font-semibold">
                    Leaders.
                  </span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-sapien-80 to-sapien-20 font-semibold">
                    Sensemakers.
                  </span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-sapien-80 to-sapien-20 font-semibold">
                    Advocates.
                  </span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-sapien-80 to-sapien-20 font-semibold">
                    Creators.
                  </span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-sapien-80 to-sapien-40 font-extrabold">
                    You.
                  </span>
                </span>
              </span>
            </p>
          </div>
        </div>

        {/* dao box */}
        <div className="max-w-6xl flex flex-col justify-center align-center mx-auto pt-24 mt-20 pl-5 pr-5">
          <div className="mx-auto grid gap-12 lg:mx-0 lg:grid-cols-3 w-full">
            <div
              className="p-8 rounded-4xl bg-gradient-to-b from-sapien to-sapien-40 shadow-xl shadow-sapien/50 flex flex-col items-center justify-center h-80"
              onMouseEnter={() => setIsHover({ ...isHover, daos: true })}
              onMouseLeave={() => setIsHover({ ...isHover, daos: false })}
            >
              {isHover.daos ? (
                <span className="delay">
                  <h3 className="text-xl sm:text-2xl text-center font-semibold">
                    DAOs today are largely built in isolation, limiting scale &
                    impact.
                  </h3>
                  <h3 className="text-xl sm:text-2xl text-center pt-10 font-semibold">
                    United, we will create so much more than any of us could
                    alone.
                  </h3>
                </span>
              ) : (
                <span>
                  <h4 className="delay text-2xl sm:text-6xl dark:text-white font-extrabold text-center">
                    <CountUp start={3} end={30} duration={2} />
                    <span className="delay">+</span>
                  </h4>
                  <h3 className="delay sm:text-3xl pt-8 font-extrabold">
                    Founding DAOs
                  </h3>
                </span>
              )}
            </div>
            <div
              className="p-8 rounded-4xl bg-gradient-to-b from-sapien to-sapien-40 shadow-xl shadow-sapien/50 flex flex-col items-center justify-center h-80"
              onMouseEnter={() => setIsHover({ ...isHover, citizens: true })}
              onMouseLeave={() => setIsHover({ ...isHover, citizens: false })}
            >
              {isHover.citizens ? (
                <span className="delay">
                  <h3 className="text-xl sm:text-2xl text-center font-semibold">
                    Every user receives a NFT passport + wallet on registration.
                  </h3>
                  <h3 className="text- sm:text-2xl text-center pt-10 font-semibold">
                    Passports unlock powerful benefits in the Sapien ecosystem.
                  </h3>
                </span>
              ) : (
                <span>
                  <h4 className="delay text-2xl sm:text-6xl dark:text-white font-extrabold text-center">
                    <CountUp
                      start={10000}
                      end={30000}
                      duration={3}
                      separator=","
                    />
                    <span className="delay">+</span>
                  </h4>
                  <h3 className="delay text-center sm:text-3xl pt-8 font-extrabold">
                    Citizens
                  </h3>
                </span>
              )}
            </div>
            <div
              className="p-8 rounded-4xl bg-gradient-to-b from-sapien to-sapien-40 shadow-xl shadow-sapien/50 flex flex-col items-center justify-center h-80"
              onMouseEnter={() => setIsHover({ ...isHover, treasury: true })}
              onMouseLeave={() => setIsHover({ ...isHover, treasury: false })}
            >
              {isHover.treasury ? (
                <span className="delay">
                  <h3 className="text-xl sm:text-2xl text-center font-semibold">
                    The Sapien DAO helps build the dApp and the Sapien Nation.
                  </h3>
                  <p className="text-xl sm:text-2xl text-center pt-10 font-semibold">
                    <a
                      className="network-state"
                      href="https://v2.info.uniswap.org/pair/0x31ca4b5e5ddca54b29e365fc80dadfd8500d290b"
                      target="_blank"
                      rel="noreferrer"
                    >
                      SPN
                    </a>{' '}
                    token holders will govern treasury assets in Parliament.
                  </p>
                </span>
              ) : (
                <span>
                  <h4 className="delay text-2xl sm:text-6xl dark:text-white font-extrabold text-center">
                    <span className="delay">$</span>
                    <CountUp
                      start={10000}
                      end={150000}
                      duration={3}
                      separator=","
                    />
                    <span className="delay">+</span>
                  </h4>
                  <h3 className="delay text-center sm:text-3xl pt-8 font-extrabold">
                    Total Assets
                  </h3>
                </span>
              )}
            </div>

            <div className="slider-partners">
              <div className="slide-track">
                <div className="slide">
                  <a
                    href="https://www.afropolitan.io/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/images/partners/afropolitan.png" />
                  </a>
                </div>
                <div className="slide">
                  <a
                    href="https://www.citydao.io/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/images/partners/citydao.png" />
                  </a>
                </div>
                <div className="slide">
                  <a
                    href="https://polygon.community/#/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/images/partners/polygondao.png" />
                  </a>
                </div>
                <div className="slide">
                  <a
                    href="https://doingud.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/images/partners/doingud.png" />
                  </a>
                </div>
                <div className="slide">
                  <a
                    href="https://genomes.io/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {' '}
                    <img src="/images/partners/genomesdao.png" />
                  </a>
                </div>
                <div className="slide">
                  <a
                    href="https://governordao.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/images/partners/governordao.png" />
                  </a>
                </div>
                <div className="slide">
                  <a
                    href="https://journodao.xyz/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/images/partners/journodao.png" />
                  </a>
                </div>
                <div className="slide">
                  <a
                    href="https://www.lobby3.io/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/images/partners/l3.png" />
                  </a>
                </div>
                <div className="slide">
                  <a
                    href="https://www.lexdao.coop/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/images/partners/lexdao.png" />
                  </a>
                </div>
                <div className="slide">
                  <a
                    href="https://www.metagencoin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/images/partners/metagen.png" />
                  </a>
                </div>
                <div className="slide">
                  <a
                    href="https://mongolnft.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/images/partners/mongolnft.png" />
                  </a>
                </div>
                <div className="slide">
                  <a
                    href="https://www.noirunited.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/images/partners/noirunited.png" />
                  </a>
                </div>
                <div className="slide">
                  <a href="https://pubdao.co/" target="_blank" rel="noreferrer">
                    <img src="/images/partners/pubdao.png" />
                  </a>
                </div>
                <div className="slide">
                  <a
                    href="https://rabbitholestudios.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/images/partners/rabbit-hole.png" />
                  </a>
                </div>
                <div className="slide">
                  <a
                    href="https://www.workingtitledao.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/images/partners/working-title.png" />
                  </a>
                </div>
                <div className="slide">
                  <a
                    href="https://www.talentdao.io/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/images/partners/talentdao.png" />
                  </a>
                </div>
                {/* Doubled */}

                <div className="slide">
                  <a
                    href="https://www.afropolitan.io/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/images/partners/afropolitan.png" />
                  </a>
                </div>
                <div className="slide">
                  <a
                    href="https://www.citydao.io/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/images/partners/citydao.png" />
                  </a>
                </div>
                <div className="slide">
                  <a
                    href="https://polygon.community/#/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/images/partners/polygondao.png" />
                  </a>
                </div>
                <div className="slide">
                  <a
                    href="https://doingud.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/images/partners/doingud.png" />
                  </a>
                </div>
                <div className="slide">
                  <a
                    href="https://genomes.io/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {' '}
                    <img src="/images/partners/genomesdao.png" />
                  </a>
                </div>
                <div className="slide">
                  <a
                    href="https://governordao.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/images/partners/governordao.png" />
                  </a>
                </div>
                <div className="slide">
                  <a
                    href="https://journodao.xyz/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/images/partners/journodao.png" />
                  </a>
                </div>
                <div className="slide">
                  <a
                    href="https://www.lobby3.io/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/images/partners/l3.png" />
                  </a>
                </div>
                <div className="slide">
                  <a
                    href="https://www.lexdao.coop/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/images/partners/lexdao.png" />
                  </a>
                </div>
                <div className="slide">
                  <a
                    href="https://www.metagencoin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/images/partners/metagen.png" />
                  </a>
                </div>
                <div className="slide">
                  <a
                    href="https://mongolnft.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/images/partners/mongolnft.png" />
                  </a>
                </div>
                <div className="slide">
                  <a
                    href="https://www.noirunited.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/images/partners/noirunited.png" />
                  </a>
                </div>
                <div className="slide">
                  <a href="https://pubdao.co/" target="_blank" rel="noreferrer">
                    <img src="/images/partners/pubdao.png" />
                  </a>
                </div>
                <div className="slide">
                  <a
                    href="https://rabbitholestudios.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/images/partners/rabbit-hole.png" />
                  </a>
                </div>
                <div className="slide">
                  <a
                    href="https://www.workingtitledao.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/images/partners/working-title.png" />
                  </a>
                </div>
                <div className="slide">
                  <a
                    href="https://www.talentdao.io/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src="/images/partners/talentdao.png" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*
        <div class="marquee">
          <ul class="marquee-content">
            <li><i> 0 </i></li>
            <li><i> 1 </i></li>
            <li><i> 2 </i></li>
            <li><i> 3 </i></li>
            <li><i> 4 </i></li>
            <li><i> 5 </i></li>
            <li><i> 0 </i></li>
            <li><i> 1 </i></li>
            <li><i> 2 </i></li>
            <li><i> 3 </i></li>
            <li><i> 3 </i></li>
            <li><i> 3 </i></li>
            
          </ul>
        </div>
              */}

        <div className="flex max-w-6xl mx-auto text-center pl-4 pr-4 md:pb-4 pb-12 md:pl-0 md:pr-0">
          <span className="text-2xl font-bold sm:text-4xl">
            Our mission is to build the{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-sapien-80 to-sapien-20 shadow-xl shadow-sapien/60 drop-shadow-lg md:filter-none">
              {' '}
              infraculture
            </span>{' '}
            to unite & empower DAOs.{' '}
          </span>
        </div>

        <div className="flex flex-col px-4 mx-auto mt-8 lg:grid lg:space-x-8 lg:grid-cols-7 max-w-7xl items-center pt-20">
          <div
            className="rounded-4xl mb-8 px-8 py-24 lg:py-12 flex flex-col col-span-3 justify-center md:px-16 text-white h-96"
            onMouseEnter={() => setIsHover({ ...isHover, community: true })}
            onMouseLeave={() => setIsHover({ ...isHover, community: false })}
          >
            <div className="lg:col-start-2 md:pl-2">
              <h1 className="relative bottom-6 text-6xl font-extrabold dark:text-white tracking-tight sm:leading-11 w-[20rem] md:w-[40rem] pt-40 md:pt-[0]">
                A Digital Parliament
              </h1>
              <ul className="mt-10">
                <li className="pl-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md  bg-gradient-to-b from-sapien to-sapien-80 text-white">
                        <svg
                          version="1.1"
                          className="h-9 w-9"
                          id="Layer_1"
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          viewBox="0 0 512 512"
                        >
                          <path
                            d="M508.35,194.371L378.498,64.52c-4.866-4.867-12.758-4.867-17.625,0l-73.116,73.116l-14.389-14.387
                                c-2.337-2.337-5.507-3.65-8.813-3.65s-6.476,1.314-8.813,3.65l-22.945,22.944l-81.67-81.67c-4.867-4.868-12.758-4.867-17.625,0
                                L3.65,194.371C1.314,196.709,0,199.879,0,203.184c0,3.305,1.314,6.476,3.65,8.813l81.928,81.928c2.434,2.434,5.623,3.65,8.813,3.65
                                c3.189,0,6.38-1.218,8.813-3.65l52.052-52.052l26.539,26.539c0.304,0.304,0.621,0.59,0.946,0.855
                                c4.895,3.993,12.115,3.708,16.679-0.855l56.58-56.58l120.662,120.662l-13.04,13.04L260.127,242.039
                                c-4.867-4.867-12.758-4.866-17.627,0c-0.304,0.304-0.59,0.621-0.855,0.947c-3.993,4.895-3.708,12.117,0.855,16.679l123.807,123.806
                                l-13.04,13.04L229.461,272.704c-4.867-4.867-12.758-4.867-17.627,0c-4.867,4.867-4.867,12.758,0,17.626L315.33,393.826l-13.04,13.04
                                l-7.669-7.669c-0.003-0.003-0.004-0.005-0.006-0.007l-95.821-95.82c-1.216-1.216-2.622-2.13-4.123-2.738
                                c-1.501-0.608-3.095-0.912-4.69-0.912c-2.79,0-5.582,0.932-7.867,2.795c-0.327,0.267-0.642,0.551-0.947,0.855
                                c-1.216,1.216-2.129,2.622-2.737,4.123c-0.304,0.75-0.532,1.524-0.684,2.309c-0.076,0.393-0.133,0.789-0.171,1.185
                                c-0.343,3.574,0.855,7.27,3.593,10.008l43.504,43.504l43.504,43.504l-13.04,13.04L140.18,306.086
                                c-4.867-4.867-12.758-4.867-17.627,0c-4.867,4.867-4.867,12.758,0,17.626l123.769,123.769c2.434,2.434,5.623,3.65,8.813,3.65
                                c3.189,0,6.38-1.218,8.813-3.65L285.8,425.63l7.675,7.675c2.434,2.434,5.623,3.65,8.813,3.65s6.38-1.216,8.813-3.65l21.853-21.853
                                l11.498,11.498c2.434,2.433,5.623,3.65,8.813,3.65s6.38-1.218,8.813-3.65l30.665-30.665c4.867-4.867,4.867-12.758,0-17.627
                                l-11.498-11.498l21.853-21.853c4.867-4.867,4.867-12.758,0-17.627L264.814,185.394c-4.867-4.867-12.758-4.867-17.627,0
                                l-56.579,56.58l-9.17-9.17l83.119-83.119l14.387,14.387l0.001,0.001l3.157,3.157l0.437,0.437l0,0l126.258,126.257
                                c2.433,2.434,5.623,3.65,8.813,3.65c3.189,0,6.38-1.216,8.813-3.65l81.928-81.928c2.337-2.337,3.65-5.507,3.65-8.813
                                C512.003,199.879,510.688,196.709,508.35,194.371z M94.391,267.488l-64.303-64.303L142.314,90.959l64.303,64.303L94.391,267.488z
                                M417.609,267.488L305.382,155.262l64.303-64.303l112.226,112.226L417.609,267.488z"
                            fill="white"
                          />{' '}
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h5 className="pl-2 text-2xl leading-6 text-gray-900 dark:text-white font-bold leading-7 md:w-[28rem]">
                        Collaborate in committees
                      </h5>
                      <p className="pl-2 mt-2 text-lg font-semibold leading-6 text-gray-500 dark:text-gray-300">
                        From nation-building to technology, find your tribe of
                        changemakers in the Sapien Nation.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mt-10 pl-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-b from-sapien to-sapien-80 text-white">
                        <svg
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="h-8 w-8"
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            className="afiado_een"
                            d="M6,11h4v17H6V11z M22,16v12h4V16H22z M14,28h4V4h-4V28z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h5 className="pl-2 text-2xl leading-6 text-gray-900 dark:text-white font-bold leading-7 md:w-[28rem]">
                        Submit proposals
                      </h5>
                      <p className="pl-2 mt-2 text-lg font-semibold leading-6 text-gray-500 dark:text-gray-300">
                        Participate in community discussions and lead
                        initiatives that resonate with you.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="mt-10 pl-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-b from-sapien to-sapien-80 text-white">
                        <svg
                          width="30"
                          height="30"
                          fill="currentColor"
                          className="h-8 w-8"
                          viewBox="0 0 486.501 486.501"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M301.1,115.45c-39.3,0-71.2,31.9-71.2,71.2s31.9,71.2,71.2,71.2s71.2-31.9,71.2-71.2
                                  C372.4,147.35,340.5,115.45,301.1,115.45z M321.6,214.85c-3.1,3.8-7.2,6.3-11.9,7.6c-2.1,0.6-3,1.6-2.9,3.8c0.1,2.1,0,4.2,0,6.3
                                  c0,1.9-1,2.9-2.8,2.9c-2.3,0.1-4.5,0.1-6.8,0c-2,0-2.9-1.2-2.9-3.1c0-1.5,0-3.1,0-4.6c0-3.4-0.1-3.5-3.4-4
                                  c-4.2-0.7-8.3-1.6-12.1-3.5c-3-1.5-3.3-2.2-2.4-5.4c0.6-2.3,1.3-4.7,2-7c0.8-2.7,1.6-3,4-1.7c4.2,2.2,8.7,3.4,13.4,4
                                  c3,0.4,6,0.1,8.8-1.2c5.2-2.3,6.1-8.4,1.6-12c-1.5-1.2-3.2-2.2-5-2.9c-4.6-2-9.4-3.6-13.7-6.2c-7-4.2-11.5-10-11-18.6
                                  c0.6-9.7,6.1-15.7,14.9-18.9c3.7-1.3,3.7-1.3,3.7-5.1c0-1.3,0-2.6,0-3.9c0.1-2.9,0.6-3.4,3.4-3.5c0.9,0,1.8,0,2.7,0
                                  c6.1,0,6.1,0,6.1,6.1c0,4.3,0,4.3,4.3,5c3.3,0.5,6.5,1.5,9.5,2.8c1.7,0.7,2.3,1.9,1.8,3.7c-0.8,2.6-1.5,5.3-2.3,7.9
                                  c-0.8,2.5-1.6,2.8-4,1.7c-4.8-2.3-9.8-3.3-15.1-3c-1.4,0.1-2.7,0.3-4,0.8c-4.6,2-5.3,7-1.4,10.1c2,1.6,4.2,2.7,6.5,3.7
                                  c4,1.7,8.1,3.3,11.9,5.4C326.9,189.05,330.2,204.35,321.6,214.85z"
                          />
                          <circle cx="197.5" cy="190.35" r="19.7" />
                          <circle cx="404.8" cy="190.35" r="19.7" />
                          <path
                            d="M454.1,70.55H143.8c-17.9,0-32.5,14.6-32.5,32.5v167.3c0,17.9,14.6,32.5,32.5,32.5H454c17.9,0,32.5-14.6,32.5-32.5v-167.3
                                  C486.6,85.15,472,70.55,454.1,70.55z M458.8,235.25c-2.6-0.7-5.3-1-8.1-1c-18.2,0-32.9,14.7-32.9,32.9c0,2.8,0.4,5.5,1,8H177.2
                                  c0.4-2,0.6-4,0.6-6.1c0-18.2-14.7-32.9-32.9-32.9c-2,0-3.9,0.2-5.8,0.5v-99.9c1.9,0.3,3.8,0.5,5.8,0.5c18.2,0,32.9-14.7,32.9-32.9
                                  c0-2.1-0.2-4.1-0.6-6.1H418c-0.2,1.3-0.3,2.7-0.3,4.1c0,18.2,14.7,32.9,32.9,32.9c2.8,0,5.5-0.4,8.1-1v101H458.8z"
                          />
                          <path
                            d="M393.5,331.55H98.4c-8.2,0-14.9-6.6-14.9-14.9v-151.7v-10.3v-27.3c-15.7,2.2-27.7,15.7-27.7,32v167.7
                                  c0,17.9,14.5,32.3,32.3,32.3h310.6c16.3,0,29.7-12.1,32-27.8h-27.4H393.5z"
                          />
                          <path
                            d="M337.7,388.15H42.6c-8.2,0-14.9-6.6-14.9-14.9v-151.7v-10.3v-27.3c-15.7,2.2-27.7,15.7-27.7,32v167.7
                                  c0,17.9,14.5,32.3,32.3,32.3h310.6c16.3,0,29.7-12.1,32-27.8h-27.4H337.7z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h5 className="pl-2 text-2xl leading-6 text-gray-900 dark:text-white font-bold leading-7 md:w-[28rem]">
                        Have your project invested in
                      </h5>
                      <p className="pl-2 mt-2 text-lg font-semibold leading-6 text-gray-500 dark:text-gray-300">
                        Rally the Sapien Nation to get behind your proposals and
                        fund your dream projects.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/*
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
                  A Digital Parliament.
                </h2>
              )}
            </div>
              */}
          </div>
          <div
            className="rounded-2xl px-8 flex flex-col col-span-4 justify-center bg-transparent mb-8"
            ref={ref}
          >
            <div className="flex items-center md:mt-0 mt-[18rem]">
              <div className="flex">
                <img
                  alt=""
                  src="/images/mycellium.webp"
                  className={`${
                    inView ? 'slider slide-in-1' : ''
                  } pt-2 md:w-auto w-[20rem] max-w-lg md:max-w-l sm:-ml-12 md:-ml-36 lg:-ml-[-5.5rem] rounded-4xl`}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-2 p-2 border-solid bg-white bg-gradient-to-r from-sapien to-sapien-blue-100 rounded-4xl mt-12">
          <div className="container mx-auto pt-2 border-solid bg-neutral-900 rounded-4x pr-5 pl-5 rounded-4xl">
            <div className="mb-8 text-center">
              <h2 className="text-base text-grey font-semibold tracking-wide uppercase text-gray-300 pt-5">
                Sapien Network
              </h2>
              <p className="mt-4 text-4xl leading-10 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                A Social Network of DAOs, powered by an NFT Passport.
              </p>
            </div>
            <div className="flex flex-wrap dark:text-white pb-4">
              <div className="flex w-full justify-center mt-2 mb-6 pt-2">
                <img
                  src="/images/dapp_image.png"
                  className="md:h-[24rem] glow max-h-sm"
                ></img>
              </div>
              <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8 border-slate-600">
                <div className="flex items-center mb-6">
                  <img alt="" src="/images/dapp.png" className="h-7 pr-3" />
                  <div className="text-xl font-semibold">Onboard Easily</div>
                </div>
                <p className="leading-loose text-gray-500 dark:text-gray-200 text-lg">
                  Everyone gets an automagical Web3 wallet. No prior crypto
                  experience needed.
                </p>
              </div>
              <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8 border-slate-600">
                <div className="flex items-center mb-6">
                  <img alt="" src="/images/dapp.png" className="h-7 pr-3" />
                  <div className="text-xl font-semibold">Find Your Tribes</div>
                </div>
                <p className="leading-loose text-gray-500 dark:text-gray-200 text-lg">
                  Join or create a new community. When you&apos;re ready,
                  upgrade it to a DAO.
                </p>
              </div>
              <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8 border-slate-600">
                <div className="flex items-center mb-6">
                  <img alt="" src="/images/dapp.png" className="h-7 pr-3" />
                  <div className="text-xl font-semibold">
                    Issue Badges ({' '}
                    <a
                      className="network-state"
                      href="https://www.coindesk.com/learn/what-are-soulbound-tokens-the-non-transferrable-nft-explained/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      SBTs
                    </a>{' '}
                    )
                  </div>
                </div>
                <p className="leading-loose text-gray-500 dark:text-gray-200 text-lg">
                  DAOs can create badges, tokens that build on-chain reputation
                  and grant permissions.
                </p>
              </div>
              <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8 border-slate-600">
                <div className="flex items-center mb-6">
                  <img alt="" src="/images/dapp.png" className="h-7 pr-3" />
                  <div className="text-xl font-semibold">
                    Gate Rooms & Channels
                  </div>
                </div>
                <p className="leading-loose text-gray-500 dark:text-gray-200 text-lg">
                  Badges can gate chat rooms or empower contributors for channel
                  posts.
                </p>
              </div>
              <div className="w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8 border-slate-600">
                <div className="flex items-center mb-6">
                  <img alt="" src="/images/dapp.png" className="h-7 pr-3" />
                  <div className="text-xl font-semibold">
                    Govern Autonomously
                  </div>
                </div>
                <p className="leading-loose text-gray-500 dark:text-gray-200 text-lg">
                  Badges can gate voting on Snapshot or can be issued based on
                  the results of poll.
                </p>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 p-8 border-slate-600">
                <div className="flex items-center mb-6">
                  <img alt="" src="/images/dapp.png" className="h-7 pr-3" />
                  <div className="text-xl font-semibold">Scale Your Impact</div>
                </div>
                <p className="leading-loose text-gray-500 dark:text-gray-200 text-lg">
                  DAOs can leverage badges from other DAOs, enabling powerful
                  network effects.
                </p>
              </div>
            </div>
            <div className="flex justify-evenly text-center">
              <Link href="https://4cnw27iuk8s.typeform.com/to/f8wIuHU7?typeform-source=www.google.com">
                <a
                  target="_blank"
                  className="mb-8 border font-extrabold justify-center md:px-6 px-2 py-3 rounded-md text-white md:py-3 md:text-xl md:px-8 mr-10"
                >
                  Apply for Early Access
                </a>
              </Link>

              <Link href=" https://app.sapien.network/">
                <a
                  target="_blank"
                  className="mb-8 border font-extrabold justify-center px-6 py-3 rounded-md text-white md:py-3 md:text-xl md:px-8"
                >
                  Launch dApp
                </a>
              </Link>
              {/*
            <Link href="/passport/purchase">
              <a
                target="_blank"
                className="mb-12 border font-extrabold justify-center px-2 py-3 rounded-md text-white md:py-3 md:text-xl md:px-8"
              >
                Purchase Passport
              </a>
            </Link>
            */}
            </div>
          </div>
        </div>

        <section className="tiles tiles--perspective max-w-6xl md:-mt-[15rem] mt-[0rem] sm:min-h-screen flex flex-col justify-center align-center mx-auto px-8">
          <div className="tiles__wrap">
            <div
              className="tiles__line"
              data-scroll
              data-scroll-speed="2"
              data-scroll-direction="horizontal"
            >
              <div
                className="tiles__line-img"
                style={{
                  backgroundImage: "url('landing/Abraham_Lincoln.png')",
                }}
              ></div>
              <div
                className="tiles__line-img"
                style={{
                  backgroundImage: "url('landing/Adam_Smith.png')",
                }}
              ></div>
              <div
                className="tiles__line-img"
                style={{
                  backgroundImage: "url('landing/Alexander_Hamilton.png')",
                }}
              ></div>
              <div
                className="tiles__line-img"
                style={{
                  backgroundImage: "url('landing/Arminius.png')",
                }}
              ></div>
              <div
                className="tiles__line-img"
                style={{
                  backgroundImage: "url('landing/Bob_Marley.png')",
                }}
              ></div>
              <div
                className="tiles__line-img"
                style={{
                  backgroundImage: "url('landing/Buddha.png')",
                }}
              ></div>
              <div
                className="tiles__line-img"
                style={{
                  backgroundImage: "url('landing/Charles_Darwin.png')",
                }}
              ></div>
              <div
                className="tiles__line-img"
                style={{
                  backgroundImage: "url('landing/Che_Guevara.png')",
                }}
              ></div>
            </div>
            <div
              className="tiles__line"
              data-scroll
              data-scroll-speed="-2"
              data-scroll-direction="horizontal"
            >
              <div
                className="tiles__line-img"
                style={{
                  backgroundImage: "url('landing/Clara_Barton.png')",
                }}
              ></div>
              <div
                className="tiles__line-img"
                style={{
                  backgroundImage: "url('landing/Diogenes.png')",
                }}
              ></div>
              <div
                className="tiles__line-img"
                style={{
                  backgroundImage: "url('landing/Edsger_Dijkstra.png')",
                }}
              ></div>
              <div
                className="tiles__line-img"
                style={{
                  backgroundImage: "url('landing/George_Washington.png')",
                }}
              ></div>
              <div
                className="tiles__line-img"
                style={{
                  backgroundImage: "url('landing/Harriet_Tubman.png')",
                }}
              ></div>
              <div
                className="tiles__line-img"
                style={{
                  backgroundImage: "url('landing/John_F_Kennedy.png')",
                }}
              ></div>
              <div
                className="tiles__line-img"
                style={{
                  backgroundImage: "url('landing/John_von_Neumann.png')",
                }}
              ></div>
              <div
                className="tiles__line-img"
                style={{
                  backgroundImage: "url('landing/Karl_Marx.png')",
                }}
              ></div>
            </div>
            <div
              className="tiles__line"
              data-scroll
              data-scroll-speed="2"
              data-scroll-direction="horizontal"
            >
              <div
                className="tiles__line-img"
                style={{
                  backgroundImage: "url('landing/Kobe_Bryant.png')",
                }}
              ></div>
              <div
                className="tiles__line-img"
                style={{
                  backgroundImage: "url('landing/Mozart.png')",
                }}
              ></div>
              <div
                className="tiles__line-img"
                style={{
                  backgroundImage: "url('landing/Muhammad_Ali.png')",
                }}
              ></div>
              <div
                className="tiles__line-img"
                style={{
                  backgroundImage: "url('landing/Nikola_Tesla.png')",
                }}
              ></div>
              <div
                className="tiles__line-img"
                style={{
                  backgroundImage: "url('landing/Oda_Nobunaga.png')",
                }}
              ></div>
              <div
                className="tiles__line-img"
                style={{
                  backgroundImage: "url('landing/Plato.png')",
                }}
              ></div>
              <div
                className="tiles__line-img"
                style={{
                  backgroundImage: "url('landing/Pocahontas.png')",
                }}
              ></div>
              <div
                className="tiles__line-img"
                style={{
                  backgroundImage: "url('landing/Rachel-Carson.png')",
                }}
              ></div>
            </div>
            <div
              className="tiles__line"
              data-scroll
              data-scroll-speed="-2"
              data-scroll-direction="horizontal"
            >
              <div
                className="tiles__line-img"
                style={{
                  backgroundImage: "url('landing/Ruth_Bader_Ginsburg.png')",
                }}
              ></div>
              <div
                className="tiles__line-img"
                style={{
                  backgroundImage: "url('landing/Salvador_Dali.png')",
                }}
              ></div>
              <div
                className="tiles__line-img"
                style={{
                  backgroundImage: "url('landing/Santiago_Ramon_y_Cajal.png')",
                }}
              ></div>
              <div
                className="tiles__line-img"
                style={{
                  backgroundImage: "url('landing/stephen-hawking.png')",
                }}
              ></div>
              <div
                className="tiles__line-img"
                style={{
                  backgroundImage: "url('landing/Terence_Mckenna.png')",
                }}
              ></div>
              <div
                className="tiles__line-img"
                style={{
                  backgroundImage: "url('landing/ts_eliot.png')",
                }}
              ></div>
              <div
                className="tiles__line-img"
                style={{
                  backgroundImage: "url('landing/Tupac_Shakur.png')",
                }}
              ></div>
              <div
                className="tiles__line-img"
                style={{
                  backgroundImage: "url('landing/Michaelangelo.png')",
                }}
              ></div>
            </div>
          </div>
          <h2
            className="content__title md:text-7xl text-3xl font-extrabold drop-shadow-lg md:filter-none"
            data-scroll
            data-scroll-speed="2"
          >
            Become a Founding Member of the Sapien Nation today.
          </h2>
          <div className="w-full mx-auto text-center text-lg md:text-3xl font-bold z-10 relative md:top-[13rem] top-[4rem]">
            <span className=" text-lg md:text-3xl font-bold z-10">
              Learn more on the{' '}
              <a
                href="https://www.notion.so/sapienteam/Welcome-to-the-Sapien-Nation-Wiki-533ad4b01e13481799015e67673c0062"
                target="_blank"
                className="bg-clip-text network-state"
                rel="noreferrer"
              >
                Sapien Wiki
              </a>
            </span>
          </div>
        </section>

        {/*
        <div className="my-24 max-w-7xl mx-auto px-8 text-center">
          <div className="flex flex-col xl:flex-row justify-between">
            <h1 className="p-5 text-4xl md:text-7xl font-extrabold">
              Features
            </h1>
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4">
              <div
                className="rounded-4xl bg-gradient-to-br from-sapien-blue-60 to-sapien-40 flex items-center justify-center w-full xl:w-80 h-80"
                onMouseOver={() => setIsHover({ ...isHover, feature_1: true })}
                onMouseLeave={() =>
                  setIsHover({ ...isHover, feature_1: false })
                }
              >
                <div>
                  {isHover.feature_1 ? (
                    <h2 className="delay text-4xl md:text-4xl px-4 font-extrabold">
                      Coordinate and collaborate with Channels & Rooms.
                    </h2>
                  ) : (
                    <img
                      alt=""
                      src="/images/coordinate.png"
                      className="delay w-56"
                    />
                  )}
                </div>
              </div>
              <div
                className="rounded-4xl bg-gradient-to-br from-sapien-blue-60 to-sapien-40 flex items-center justify-center w-full xl:w-80 h-80"
                onMouseOver={() => setIsHover({ ...isHover, feature_2: true })}
                onMouseLeave={() =>
                  setIsHover({ ...isHover, feature_2: false })
                }
              >
                <div>
                  {isHover.feature_2 ? (
                    <h2 className="delay text-4xl md:text-4xl px-4 font-extrabold">
                      Form Tribes around shared interests and passions.
                    </h2>
                  ) : (
                    <img
                      alt=""
                      src="/images/tribes.png"
                      className="delay w-56"
                    />
                  )}
                </div>
              </div>
              <div
                className="rounded-4xl bg-gradient-to-br from-sapien-blue-60 to-sapien-40 flex items-center justify-center w-full xl:w-80 h-80"
                onMouseOver={() => setIsHover({ ...isHover, feature_3: true })}
                onMouseLeave={() =>
                  setIsHover({ ...isHover, feature_3: false })
                }
              >
                {isHover.feature_3 ? (
                  <h2 className="delay text-4xl md:text-4xl px-4 font-extrabold">
                    Build reputation in the network with your passport.
                  </h2>
                ) : (
                  <img
                    alt=""
                    src="/images/passport.png"
                    className="delay w-56"
                  />
                )}
              </div>
              <div
                className="rounded-4xl bg-gradient-to-br from-sapien-blue-60 to-sapien-40 flex items-center justify-center w-full xl:w-80 h-80"
                onMouseOver={() => setIsHover({ ...isHover, feature_4: true })}
                onMouseLeave={() =>
                  setIsHover({ ...isHover, feature_4: false })
                }
              >
                {isHover.feature_4 ? (
                  <h2 className="delay text-4xl md:text-4xl px-4 font-extrabold">
                    Automagical Web3 wallet for easy token management.
                  </h2>
                ) : (
                  <img alt="" src="/images/wallet.png" className="delay w-56" />
                )}
              </div>
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
        */}
        {/*
        <div
          data-scroll
          data-scroll-speed="-2"
          data-scroll-direction="horizontal"
          className="flex flex-col px-4 mx-auto mt-8 lg:grid lg:space-x-8 lg:grid-cols-7 max-w-7xl"
        >
          <div
            className="rounded-4xl mb-8 px-8 py-24 lg:py-12 flex flex-col col-span-3 justify-center bg-gradient-to-b from-sapien-blue-100 to-sapien-green-100 text-white h-96"
            onMouseEnter={() => setIsHover({ ...isHover, nation: true })}
            onMouseLeave={() => setIsHover({ ...isHover, nation: false })}
          >
            {isHover.nation ? (
              <p className="delay text-2xl mb-4 mt-8">
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
          <div className="rounded-4xl mb-8 lg:mb-0 px-8 flex flex-col col-span-4 justify-center">
            <div className="max-w-2xl h-full mx-auto flex items-center">
              <img
                alt="Metavarse is coming"
                src="/images/bottom-banner.png"
                className="rounded-4xl h-96"
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
                Want to learn more?
              </h2>
            )}
            <div className="flex justify-center">
              <Link href="https://discord.gg/DVDe3ZwuYR">
                <a
                  target="_blank"
                  className="text-base font-semibold text-white underline mt-5 block"
                >
                  View Sapien Wiki
                </a>
              </Link>
            </div>
          </div>
        </div>
        */}
        <div className="w-full md:mt-0 mt-[15rem]">
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
