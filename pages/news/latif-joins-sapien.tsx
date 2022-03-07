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
                Microsoft and eBay Veteran Latif Nathani Joins Sapien.Network as
                Chief Operating Officer
              </span>
            </h1>
            <blockquote className="italic text-center mt-4 text-xl tracking-wide text-white leading-8">
              He will lead all aspects of the company’s day-to-day activities
              including product, operations, marketing, organizational
              development and culture
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
                San Francisco, CA. February 2, 2022.
              </span>{' '}
              Sapien.Network, a Web 3.0 social network for the next generation
              of human connection using crypto, NFTs, and the metaverse, has
              appointed Latif Nathani as its Chief Operating Officer. Mr.
              Nathani is an experienced executive, innovator and investor with a
              proven track record of success. Prior to Sapien, Mr. Nathani held
              senior roles at eBay, Microsoft and Symantec. In his new role, Mr.
              Nathani will lead all aspects of the day-to-day activities
              including product, operations, marketing, organizational
              development and culture.
            </p>
            <p>
              Sapien is designed to enable people to reclaim control of their
              individual and collective digital personas through a system that
              is human-centric instead of algorithmically determined. Once fully
              launched, the Sapien platform will include community groups
              (‘tribes”) composed of “citizens” — collectively the Sapien Nation
              – which will be governed by first-of-its-kind NFT
              passport-holders.
            </p>
            <p>
              “The future of the internet is being built on Web 3.0 through
              blockchain technology, and as our Chief Operating Officer, Latif
              will be instrumental for us to execute on Sapien’s vision to be
              the social network of DAOs,” said Rob Giometti, co-founder and
              co-CEO Sapien Network. “Sapien’s goal is to create a scalable
              protocol that benefits human beings and our planet, in contrast to
              technology monopolies and financial structures that exploit people
              and our natural resources,” added Mr. Giometti.
            </p>
            <p>
              Sapien is creating a social network for decentralized autonomous
              organizations (DAO), which are entities represented by rules
              encoded as a computer program that are transparent, controlled by
              the DAO members, and not influenced by a centralized government.
              On Sapien, every community will be a DAO, which will be equipped
              with the tools to govern their own community, mint their own
              tokens and own their collective assets.
            </p>
            <p>
              “Sapien intends to become a new paradigm at the intersection of
              technology, community and commerce, that prioritizes people over
              algorithms and I am inspired to fully execute our strategy,” said
              Mr. Nathani. “Throughout my career I have always believed that
              technology should be harnessed to help advance the human
              condition, while safeguarding the environment and delivering
              strong returns to investors,” added Mr. Nathani.
            </p>
            <p>
              Added Ankit Bhatia, co-founder and co-CEO of Sapien: “We are
              thrilled to have Latif join us as we build social technologies
              that preserve our agency and put humans first. He brings with him
              decades of proven business experience that will help us scale our
              operations and position Sapien for rapid growth.”
            </p>
            <p>
              Most recently, Mr. Nathani was the CEO of eBay India where he grew
              its business to nearly $500 million in gross merchandise volume,
              more than 5 million customers and co-led its sale to Flipkart.
              Previously, he co-founded eMemories.com (one of the first online
              picture sharing services) and two enterprise businesses at
              Microsoft, where he served for 15 years. He also led global
              consumer product marketing at Symantec for a consumer base
              exceeding 100 million users, and he spearheaded the naming and
              launch of Norton 360. Mr. Nathani has three decades of technology
              industry experience. He graduated with an MBA from City University
              and B.S. (Computer Science) from the University of Arizona in
              1991.
            </p>

            <div>
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
