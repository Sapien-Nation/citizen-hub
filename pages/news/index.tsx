/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const news = [
  {
    title: 'A Trip Through Time',
    quote:
      'We made the first avatars in a WeWork with my friend Kalani, using old Python notebooks from when he first started getting into deep learning.',
    excerpt: `When I joined Sapien, my first task was to create artwork for the first passport NFT collection (https://www.sapien.network/passport). While most NFT projects drop randomly generated, fairly homogenous collections, Sapien aspired to make each avatar highly individualized and meaningful. Unlike other projects, each person gets to be involved in the avatar creation process through selecting their historical figure as well as their avatar’s picture.`,
    date: 'San Francisco, CA. March 11, 2022.',
    source: '/news/a-trip-through-time',
    image: '/images/news/sapien_mlk_image_1.png',
    imageAlt: 'Sapien Avatar',
  },
  {
    title: 'How Do I Join the Whitelist?',
    quote:
      'Guarantee Yourself an Opportunity to Purchase a Sapien NFT Passport',
    excerpt: `We’re so excited to be launching our “Founding Members”
      edition of the Sapien Nation NFT passport. This edition is
      part of an exclusive batch of 1,000 NFT passports that
      will be sold at 0.25 ETH each. Each passport will contain
      a unique historical avatar to celebrate our shared past
      and blaze a new path forward.`,
    date: 'San Francisco, CA. March 8, 2022.',
    source: '/news/how-do-I-join-the-whitelist',
    image: '/images/news/whitelist-cover.png',
    imageAlt: 'Whitelist guide',
  },
  {
    title: 'Why NFT Passports?',
    quote:
      'Learn What an NFT Passport is and How They’re Helping Us Launch a DIgital Nation.',
    excerpt: `The Tribe Protocol (outlined in the Purple Paper) is a
    holistic solution designed to address a variety of social,
    economic, and digital issues that we face today. In the
    Purple Paper, this holistic solution is broken down into
    three key layers (or primitives), the social, the
    informational, and the economic.`,
    date: 'San Francisco, CA. March 7, 2022.',
    source: '/news/why-nft-passports',
    image: '/images/news/Avatars-Transition.gif',
    imageAlt: 'Sapien Avatar Transition',
  },
  {
    title:
      'Microsoft and eBay Veteran Latif Nathani Joins Sapien.Network as Chief Operating Officer',
    quote:
      'He will lead all aspects of the company’s day-to-day activities including product, operations, marketing, organizational development and culture',
    excerpt: `Sapien.Network, a Web 3.0 social network for the next
    generation of human connection using crypto, NFTs, and the
    metaverse, has appointed Latif Nathani as its Chief
    Operating Officer. Mr. Nathani is an experienced
    executive, innovator and investor with a proven track
    record of success. Prior to Sapien, Mr. Nathani held
    senior roles at eBay, Microsoft and Symantec. In his new
    role, Mr. Nathani will lead all aspects of the day-to-day
    activities including product, operations, marketing,
    organizational development and culture.`,
    date: 'San Francisco, CA. February 2, 2022.',
    source: '/news/latif-joins-sapien',
    image: '/images/team/Latif.jpeg',
    imageAlt: 'Latif Nathani',
  },
];

export default function Example() {
  return (
    <div>
      <div className="mx-auto py-12 px-4 sm:px-6 max-w-6xl lg:px-8 lg:py-24 bg-neutral-900">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-20 underline decoration-3 decoration-sapien">
          News
        </h2>
        <ul
          role="list"
          className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0"
        >
          {news.map(
            ({ date, excerpt, image, imageAlt, title, quote, source }) => (
              <li className="sm:py-8" key={source}>
                <div className="space-y-4 sm:grid sm:grid-cols-4 sm:items-start sm:gap-6 sm:space-y-0">
                  <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                    <img
                      className="object-cover shadow-lg rounded-lg max-w-sm mx-auto rounded-xl"
                      src={image}
                      alt={imageAlt}
                    />
                  </div>
                  <div className="sm:col-span-3">
                    <div className="space-y-4">
                      <div className="text-lg leading-6 font-medium space-y-1">
                        <h2 className="max-w-prose block text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl">
                          {title}
                        </h2>
                      </div>
                      <div className="text-lg">
                        <blockquote className="italic mt-4 text-xl tracking-wide text-white leading-8">
                          {quote}
                        </blockquote>
                      </div>
                      <div className="mt-3">
                        <p>{excerpt}</p>
                        <p className="text-sm text-gray-500 mt-2">
                          <time dateTime={date}>{date}</time>
                        </p>
                        <Link href={source}>
                          <a className="text-base font-semibold text-sapien-60 hover:text-sapien-80 mt-5 block">
                            Read full story
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}
