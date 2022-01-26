import AOS from 'aos';
import { useEffect } from 'react';

// components
import { Animation, Head } from 'components/common';

import 'aos/dist/aos.css';

const logos = [
  { name: 'Harambe', url: '/images/partners/harambe.png' },
  { name: 'DoinGud', url: '/images/partners/doingud.png' },
  { name: 'Polygon', url: '/images/partners/polygon.png' },
];

// types
import type { NextPage } from 'next';

const PassportPage: NextPage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Head title="Passport" />
      <div className="space-y-12" style={{ marginTop: 80 }}>
        <div className="mx-auto py-20 px-6 lg:px-10 max-w-6xl">
          <h2
            data-aos="zoom-y-out"
            data-aos-delay="600"
            className="text-3xl font-extrabold tracking-tight sm:text-4xl"
          >
            The Sapien Passport is your ticket to:
          </h2>
          <div className="md:flex flex-row gap-2 mt-12 space-y-4 md:space-y-0">
            <div
              data-aos="zoom-y-out"
              data-aos-delay="1000"
              className="h-16 bg-gradient-to-r from-sapien to-sapien-40 rounded-lg text-white dark:text-black text-xl sm:text-2xl font-extrabold flex flex-row items-center px-4 -skew-x-12 min-width-10"
            >
              <div className="skew-x-12">Our Metaverse</div>
            </div>
            <div
              data-aos="zoom-y-out"
              data-aos-delay="2000"
              className="h-16 bg-gradient-to-r from-sapien to-sapien-40 rounded-lg text-white dark:text-black text-xl sm:text-2xl font-extrabold flex flex-row items-center px-4 -skew-x-12"
            >
              <div className="skew-x-12">Next Generation Communities</div>
            </div>
            <div
              data-aos="zoom-y-out"
              data-aos-delay="3000"
              className="h-16 bg-gradient-to-r from-sapien to-sapien-40 rounded-lg text-white dark:text-black text-xl sm:text-2xl font-extrabold flex flex-row items-center px-4 -skew-x-12"
            >
              <div className="skew-x-12">Digital and Real World Agency</div>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-y-out"
          data-aos-delay="3000"
          className="mx-auto px-6 lg:px-10 max-w-6xl rounded-3xl"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-5">
            What it is
          </h2>
          <p className="text-xl sm:text-2xl mb-24">
            The Sapien Passport is a first of its kind NFT that gives you a
            digital persona and citizenship in the Sapien ecosystem. The
            communities you’re part of can stamp your Passport to signify your
            membership in their community. They can also add titles and stamps
            to speak to your expertise on a topic, signify to others that you’re
            someone they work with, or speak in support of your talents.
          </p>
          <div className="mt-12 max-w-lg mx-auto lg:max-w-none">
            <div
              data-aos="zoom-y-out"
              data-aos-delay="350"
              className="relative flex mb-12 rounded-3xl"
            >
              <div className="bg-white dark:bg-black border border-black shadow-[8px_8px_#eaeaea] dark:shadow-[8px_8px_#27272a] px-8 py-12 rounded-3xl">
                <h4 className="text-2xl sm:text-3xl font-extrabold">
                  Sapien’s NFT Passport is Key to Addressing the Issues We Find
                  in Most Social Media Today
                </h4>
                <p className="mt-3 text-xl sm:text-2xl">
                  {`Existing platforms are plagued by trolls, astroturfing, and a whole host of different types of spam. Our NFT Passport aims to remedy this by creating a digital social ledger you carry with you everywhere you go in our ecosystem.
                    `}
                </p>
              </div>
            </div>
            <div
              data-aos="zoom-y-out"
              data-aos-delay="350"
              className="relative flex mb-12 rounded-3xl"
            >
              <div className="bg-white dark:bg-black border border-black shadow-[8px_8px_#eaeaea] dark:shadow-[8px_8px_#27272a] px-8 py-12 rounded-3xl">
                <h4 className="text-2xl sm:text-3xl font-extrabold">
                  Anonymous Participation Online Has Led to Unaccountable
                  Engagement
                </h4>
                <p className="mt-3 text-xl sm:text-2xl">
                  {`When you post something online, you’re making yourself vulnerable and sharing a part of yourself and that’s a uniquely beautiful thing. Unfortunately, this can open the door for faceless strangers to criticize and attack you, often unfairly, with no consequences for their behavior.
                    `}
                </p>
              </div>
            </div>
            <div
              data-aos="zoom-y-out"
              data-aos-delay="350"
              className="relative flex rounded-3xl"
            >
              <div className="bg-white dark:bg-black border border-black shadow-[8px_8px_#eaeaea] dark:shadow-[8px_8px_#27272a] px-8 py-12 rounded-3xl">
                <h4 className="text-2xl sm:text-3xl font-extrabold">
                  Now, The Internet Is Changing as We Move Towards the Metaverse
                  and Web 3.0
                </h4>
                <p className="mt-3 text-xl sm:text-2xl">
                  {`This transition presents the potential for a scary step in the wrong direction for human connection where the metaverse takes over our daily lives and these issues become even more pronounced. As we build, it’s important that what we’re building with quality and honesty in mind from the ground up
                  `}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-24 lg:mx-auto py-12 sm:px-6 lg:px-10 lg:max-w-6xl lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
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
                      className="text-sapien-20"
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
            <div className="relative mx-auto max-w-md sm:max-w-3xl px-6 lg:px-0 lg:max-w-none lg:py-20">
              <div className="relative px-8">
                <div
                  data-aos="zoom-y-out"
                  data-aos-delay="350"
                  className="px-8 py-12 bg-black rounded-3xl"
                >
                  <p className="text-xl sm:text-2xl text-white">
                    In the Sapien Ecosystem, passports will reintroduce
                    accountability without sacrificing your privacy.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mx-auto px-6 lg:px-0">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <div data-aos="zoom-y-out" data-aos-delay="800" className="mt-4">
                <p className="text-xl sm:text-2xl">
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
        <div className="relative bg-white dark:bg-black border-b mb-4">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black"></div>
            <Animation />
          </div>
          <div className="items-center mx-auto max-w-6xl w-full pt-24 pb-24 lg:py-36 lg:text-left relative">
            <div className="py-12 lg:px-8 px-6 sm:px-6">
              <h1
                data-aos="zoom-y-out"
                data-aos-delay="350"
                className="text-4xl text-white mt-5 tracking-tight font-extrabold sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl"
              >
                <span className="block xl:inline">
                  <span className="pb-3 bg-clip-text text-transparent bg-gradient-to-r from-sapien to-sapien-40">
                    Passports
                  </span>{' '}
                  are being distributed{' '}
                  <span className="pb-3 bg-clip-text text-transparent bg-gradient-to-r from-sapien to-sapien-40">
                    Now
                  </span>
                </span>{' '}
              </h1>
              <p
                data-aos="zoom-y-out"
                data-aos-delay="600"
                className="rounded-full text-xl sm:text-2xl md:mt-5 text-white font-bold"
              >
                {
                  '        Sapien is connecting with community organizers, thought leaders, and forward thinking people of all types to build the first community of passport holders.'
                }
              </p>
            </div>
          </div>
        </div>

        {/* Logo cloud section */}
        <div
          data-aos="zoom-y-out"
          data-aos-delay="350"
          className="relative mx-auto px-4 sm:px-6 lg:px-10 max-w-6xl py-12"
        >
          <div className="">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-12">
                {`Who's on board`}
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
