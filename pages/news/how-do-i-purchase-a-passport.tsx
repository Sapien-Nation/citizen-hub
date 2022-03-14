/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

// types
import { NextPage } from 'next';

// components
import { Head } from 'components/common';

const News: NextPage = () => {
  return (
    <>
      <Head
        title="News"
        description="Sapien is doing some groundbreaking work and naturally the news follows. When that news breaks, we’ll keep you updated here."
        image="/images/Sapien_Logo.png"
      />
      <div className="relative py-16 overflow-hidden bg-neutral-900 break-words">
        <div className="relative px-4 sm:px-8 lg:px-8">
          <div className="text-lg max-w-4xl mx-auto mb-12">
            <h1 className="mt-2 max-w-prose block text-3xl text-center leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              How Do I Purchase a Passport?
            </h1>
            <blockquote className="italic text-center mt-4 text-xl tracking-wide text-white leading-8">
              A simple guide to purchasing your first NFT Passport
            </blockquote>
            <img
              className="max-w-sm mx-auto rounded-xl my-12"
              src="/images/news/sapien-passport-cover.png"
              alt="Sapien Passport Cpver"
            />
          </div>
          <div className="mt-6 px-8 sm:px-0 font-light text-lg leading-9 tracking-wide gap-12 flex flex-col text-white mx-auto sm:px-6 max-w-6xl">
            <p>
              <span className="font-extrabold text-xl block mb-2">
                San Francisco, CA. March 14, 2022.
              </span>{' '}
              Hey Sapiens, we know you’re excited to grab your passport and we
              wanted to make sure that process was as easy to understand as
              possible for our community, so we wrote up some simple steps to
              make sure you know what to expect when buying your Sapien NFT
              passport. If you want some more information on the Passport
              itself, click
              <a
                href="https://docs.google.com/document/u/1/d/19Zuzl1WbkgE5GxxtZmI2oQ5h48I5GjQ-mJcYm4nc_38/edit#heading=h.e5rmizzh1sp"
                target="_blank"
                rel="noreferrer"
                className="text-sapien-60"
              >
                {' '}
                here
              </a>
            </p>

            <h2 className="mt-2 max-w-prose text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl">
              Preparing for the Sale:
            </h2>

            <ol className="list-decimal list-inside">
              <li>
                Install Metamask if you haven’t already. Here’s a helpful
                <a
                  href="https://www.inputmag.com/guides/how-to-install-metamask-buy-sell-nfts"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sapien-60"
                >
                  {' '}
                  guide
                </a>
                .
              </li>
              <li>
                Make sure you have 0.15 ETH + a little extra for gas fees
                deposited in your Metamask. ETH can be acquired on exchanges
                like Coinbase
                <a
                  href="https://coinbase.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sapien-60"
                >
                  {' '}
                  Coinbase
                </a>
                or
                <a
                  href="https://www.gemini.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sapien-60"
                >
                  {' '}
                  Gemini
                </a>
              </li>
              <li>
                Once the passport sale is live, you’ll receive an email with a
                unique link to reserve your historical figure (if available) and
                generate your NFT passport.
              </li>
            </ol>
            <p className="font-bold">
              NOTE: WE WILL NEVER DIRECT MESSAGE YOU ON DISCORD OR TELEGRAM.
              MAKE SURE YOU ONLY USE OUR OFFICIAL SITE, WWW.SAPIEN.NETWORK.
            </p>

            <h2 className="mt-2 max-w-prose text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl">
              During the Sale:
            </h2>
            <ol className="list-decimal list-inside">
              <li>The first step is to send 0.15 ETH to our wallet address.</li>
              <li>
                The next step is to reserve your historical avatar. Please note:
                <ul className="list-disc list-inside text-slate-900 dark:text-slate-200 pl-8">
                  <li>
                    All picks go through a manual review process which can take
                    up to 24 hours.
                  </li>
                  <li>
                    Once a figure is reserved, it can no longer be chosen by
                    anyone else.
                  </li>
                  <li>
                    All reserved figures will be displayed on our website here:
                    <Link href="/reserved-list" passHref>
                      <a className="text-sapien-60"></a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                If your figure is rejected, you will receive an email to select
                another historical figure. Figures are rejected if they are
                still alive, invalid, or on our banned list.
                <div>
                  If your figure is approved, you will receive an email which
                  will let you proceed with the avatar selection process.
                </div>
              </li>
            </ol>
            <p>
              Choose a photo of your historical avatar in our webapp. Once
              you’ve selected the photo of your figure, we’ll stylize it using
              our Machine Learning pipeline to generate your unique avatar (
              <Link href="/news/a-trip-through-time" passHref>
                <a rel="noreferrer" className="text-sapien-60">
                  read more
                </a>
              </Link>{' '}
              ).
            </p>

            <h2 className="mt-2 max-w-prose text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl">
              After the Sale:
            </h2>
            <ol className="list-decimal list-inside">
              <li>
                You’ll receive a confirmation email that serves as a receipt of
                your purchase. Contact{' '}
                <a
                  className="text-sapien-60"
                  href="mailto:passports@sapien.network"
                >
                  passports@sapien.network
                </a>{' '}
                if you would like to receive additional support.
              </li>
              <li>
                Join our Community!{' '}
                <a
                  className="text-sapien-60"
                  target="_blank"
                  rel="noreferrer"
                  href="https://discord.gg/DgUfraghMW"
                >
                  https://discord.gg/DgUfraghMW
                </a>{' '}
                We would love to hear about your historical avatar and why you
                chose them.
              </li>
              <li>
                The NFT Passport will be minted on April 20, 2022 into the
                Sapien Tribe Protocol. As a passport holder, you will have early
                access to the protocol outlined in the{' '}
                <Link href="/The_Purple_Paper_v1.1.pdf">
                  <a target="_blank" className="text-sapien-60">
                    Purple Paper
                  </a>
                </Link>
                .
              </li>
            </ol>
            <p>
              Thanks for being a part of this journey! We’re excited to have you
              join the <span className="italic">Sapien Nation</span>.
            </p>

            <div className="mt-10">
              <h5 className="font-extrabold">About Sapien Network</h5>
              Sapien is the first Digital Nation in the metaverse, a Republic of
              DAOs powered by Sapien’s first-of-its-kind NFT Passport. Our
              mission is to enable people to reclaim their agency by building
              sovereign communities focused on collective action and cooperative
              ownership. <br /> For more information, visit sapien.network.{' '}
              <Link
                href="https://www.linkedin.com/company/sapien.network/mycompany/?viewAsMember=true"
                passHref
              >
                <a target="_blank" className="underline">
                  LinkedIn
                </a>
              </Link>
              ,{' '}
              <Link href="https://twitter.com/sapien_network" passHref>
                <a target="_blank" className="underline">
                  Twitter
                </a>
              </Link>{' '}
              and{' '}
              <Link href="https://discord.com/invite/AtGS2pe" passHref>
                <a target="_blank" className="underline">
                  Discord
                </a>
              </Link>
            </div>
            <div>
              <h5 className="font-extrabold">Media contacts:</h5>
              <ul className="list-none">
                <li>
                  Missy Martin <br />
                  Chief Sustainability Officer <br />
                  <a href="mailto: missy@sapien.network" className="underline">
                    missy@sapien.network
                  </a>
                </li>{' '}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
