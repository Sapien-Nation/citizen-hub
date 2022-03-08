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
      <div className="relative py-16 overflow-hidden bg-neutral-900">
        <div className="relative px-4 sm:px-8 lg:px-8">
          <div className="text-lg max-w-4xl mx-auto mb-12">
            <h1>
              <span className="mt-2 max-w-prose block text-3xl text-center leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                How Do I Join the Whitelist?
              </span>
            </h1>
            <blockquote className="italic text-center mt-4 text-xl tracking-wide text-white leading-8">
              Guarantee Yourself an Opportunity to Purchase a Sapien NFT
              Passport.
            </blockquote>
            <img
              className="max-w-lg mx-auto rounded-xl my-12"
              src="/images/news/founder_image.jpeg"
              alt="Sapien Avatar Transition"
            />
          </div>
          <div className="mt-6 px-8 sm:px-0 font-light text-lg leading-9 tracking-wide gap-12 flex flex-col text-white mx-auto sm:px-6 max-w-6xl">
            <p>
              <span className="font-extrabold text-xl block mb-2">
                San Francisco, CA. March 8, 2022.
              </span>{' '}
              We’re so excited to be launching our “Founding Members” edition of
              the Sapien Nation NFT passport. This edition is part of an
              exclusive batch of 1,000 NFT passports that will be sold at 0.25
              ETH each. Each passport will contain a unique historical avatar to
              celebrate our shared past and blaze a new path forward. To learn
              more about the passport’s utility check out
              <Link href="/news/why-nft-passports">
                <a
                  target="_blank"
                  className="text-lg font-semibold text-sapien-60 hover:text-sapien-80"
                >
                  {' '}
                  Why NFT Passports
                </a>
              </Link>
              .
            </p>
            <p>
              To be guaranteed the opportunity to purchase a passport, you will
              need to join the Whitelist for the Pre-Sale on March 14th. Not
              only does the Whitelist guarantee you a spot to purchase a
              passport, it also increases your chances of receiving the
              historical avatar you want. Note, once someone has reserved a
              historical avatar, no one else can reserve it. Do you admire a
              particular artist, philosopher, writer, athlete, president…? Make
              sure to join the whitelist to better your chances of reserving
              your top pick.
            </p>
            <span className="font-extrabold">
              {' '}
              The whitelist will be capped at 500 spots.{' '}
            </span>
            <p>
              To join the Whitelist, join our Discord
              <Link href="https://discord.gg/TRM9SJ9wWd">
                <a
                  target="_blank"
                  className="text-lg font-semibold text-sapien-60 hover:text-sapien-80"
                >
                  {' '}
                  here
                </a>
              </Link>
              . Once you join the Discord, react to the MEE6 bot with a banana
              emoji to get access to the rest of the server. When you gain
              access, you will see more channels populate. Head over to the
              #💜︱whitelist-sign-up channel and press the link that follows{' '}
              <span className="font-extrabold">APPLY</span> toward the end of
              the post.
            </p>
            <p>
              The link brings you to a Gather form. Fill out your email address
              and press submit. Allow 24 hours for the Sapien team to review
              your application. Once a team member approves your application,
              you will receive the “whitelisted” role on Discord and a DM from
              Gather confirming the approval. If your application has not been
              approved within 24 hours, please email passports@sapien.network,
              and our team would be happy to help.
            </p>
            <p>
              After your application is approved, you will be added to the
              Whitelist. On March 14th, you will be emailed a one-time code and
              guided through purchasing a passport and reserving your historical
              avatar. Note, if you don’t purchase during the Pre-Sale, then your
              spot will be opened to the general public on March 15th for the
              Public Sale.
            </p>

            <iframe
              className="flex flex-col mx-auto sm:px-6 max-w-6xl mt-6 px-8 sm:px-0"
              width="1045"
              height="588"
              src="https://www.youtube.com/embed/i5h7GxrntqU"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

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
