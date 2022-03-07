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
                Why NFT Passports?
              </span>
            </h1>
            <blockquote className="italic text-center mt-4 text-xl tracking-wide text-white leading-8">
              Learn What an NFT Passport is and How They’re Helping Us Launch a
              DIgital Nation.
            </blockquote>
            <img
              className="max-w-sm mx-auto rounded-xl my-12"
              src="/images/team/Latif.jpeg"
              alt="Latif Nathani"
            />
          </div>
          <div className="mt-6 px-8 sm:px-0 font-light text-lg leading-9 tracking-wide gap-12 flex flex-col text-white mx-auto sm:px-6 max-w-6xl">
            <p>
              <span className="font-extrabold text-xl">
                The Tribe Protocol (outlined in the Purple Paper)
              </span>{' '}
              is a holistic solution designed to address a variety of social,
              economic, and digital issues that we face today. In the Purple
              Paper, this holistic solution is broken down into three key layers
              (or primitives), the social, the informational, and the economic.
            </p>
            <p>
              Sapien’s NFT Passport constitutes the foundation of the social
              layer and, by extension, helps lay the foundation of the protocol
              as a whole. As a foundational pillar of the ecosystem, Passport
              sales help us fund operations of the nation as well as investment
              into communities part of the Republic. As such, a 5% fee on all
              secondary sales goes to The Sapien Nation Treasury to help sustain
              the ecosystem.
            </p>
            <p>
              The Passport takes NFT technology and deploys it in a truly unique
              way, using non-fungible tokens to create a form of decentralized,
              digital identity that you can carry with you anywhere in the
              metaverse. Unlike many NFTs that act simply as a token that gates
              access to an online community, NFT Passports not only introduce a
              variety of other utilities, they are also designed to be
              interoperable across any community in the Sapien ecosystem,
              helping form a shared infrastructure across these various
              communities.
            </p>
            <p>
              With your NFT Passport in hand, you can immediately begin telling
              your story in the metaverse. Through the communities you join, you
              can build your reputation to be whatever you want. Whether you’re
              an artist, writer, developer, or community leader, you can bring
              your talents and skills to communities that matter and be
              recognized for your efforts with stamps and titles on your
              Passport that you can share proudly with others as you carry your
              Passport across the many communities you choose to be a part of.
            </p>
            <p>
              Being among the first passport holders in history comes with its
              own perks, like early access to the Sapien protocol and direct
              contact with the Sapien team to make sure your voice is heard as
              we build this new metaverse together. You’ll have not only the
              opportunity to join the many communities we’re bringing on board,
              but also the ability to start your own communities on our platform
              where you can launch your own social currency, fund and be funded
              by other communities, and use the passport as a tool to help your
              community thrive.
            </p>
            <p>
              Sapien Passports come customized with some of the most unique NFT
              art out there. Each passport will have a 1 of 1 avatar of a figure
              from history to help us remember and honor the past as we build
              the future. No procedurally generated figures like most NFT
              projects, instead you get to participate in the formation of this
              collection by choosing a figure from history to be your avatar and
              picking the image of them you’d like to use as the base for the
              machine learning art.
            </p>
            <p>
              Most importantly, by acquiring one of the first passports to ever
              exist, you’ll be joining the ranks of builders, innovators,
              entrepreneurs, and leaders who are already on board as founding
              members of the Sapien Nation. You will have direct access to bring
              your voice to the foundation of the first digital nation in the
              world. This is our opportunity to make our mark and make a
              difference.
            </p>

            <h5 className="font-extrabold text-center">
              Join us and claim your place in history.
            </h5>

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
                <br />
                <li>
                  Dan Tarman <br />
                  PR Advisor
                  <br />
                  <a
                    href="mailto: dtarman@perceptualadvisors.com"
                    className="underline"
                  >
                    dtarman@perceptualadvisors.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
