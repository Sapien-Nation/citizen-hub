/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const people = [
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  // More people...
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
          <li className="sm:py-8">
            <div className="space-y-4 sm:grid sm:grid-cols-4 sm:items-start sm:gap-6 sm:space-y-0">
              <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                <img
                  className="object-cover shadow-lg rounded-lg max-w-sm mx-auto rounded-xl"
                  src="/images/news/Avatars-Transition.gif"
                  alt="Sapien Avatar Transition"
                />
              </div>
              <div className="sm:col-span-3">
                <div className="space-y-4">
                  <div className="text-lg leading-6 font-medium space-y-1">
                    <h2>
                      <span className="max-w-prose block text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                        Why NFT Passports?
                      </span>
                    </h2>
                  </div>
                  <div className="text-lg">
                    <blockquote className="italic mt-4 text-xl tracking-wide text-white leading-8">
                      Learn What an NFT Passport is and How They’re Helping Us
                      Launch a DIgital Nation.
                    </blockquote>
                  </div>
                  <div className="mt-3">
                    <p>
                      The Tribe Protocol (outlined in the Purple Paper) is a
                      holistic solution designed to address a variety of social,
                      economic, and digital issues that we face today. In the
                      Purple Paper, this holistic solution is broken down into
                      three key layers (or primitives), the social, the
                      informational, and the economic.
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      <time dateTime="March 7, 2022">
                        San Francisco, CA. March 7, 2022.
                      </time>
                    </p>
                    <Link href="/news/why-nft-passports">
                      <a className="text-base font-semibold text-sapien-60 hover:text-sapien-80 mt-5 block">
                        Read full story
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li className="sm:py-8">
            <div className="space-y-4 sm:grid sm:grid-cols-4 sm:items-start sm:gap-6 sm:space-y-0">
              <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                <img
                  className="object-cover shadow-lg rounded-lg max-w-sm mx-auto rounded-xl"
                  src="/images/team/Latif.jpeg"
                  alt="Latif Nathani"
                />
              </div>
              <div className="sm:col-span-3">
                <div className="space-y-4">
                  <div className="text-lg leading-6 font-medium space-y-1">
                    <h2>
                      <span className="max-w-prose block text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                        Microsoft and eBay Veteran Latif Nathani Joins
                        Sapien.Network as Chief Operating Officer
                      </span>
                    </h2>
                  </div>
                  <div className="text-lg">
                    <blockquote className="italic mt-4 text-xl tracking-wide text-white leading-8">
                      He will lead all aspects of the company’s day-to-day
                      activities including product, operations, marketing,
                      organizational development and culture
                    </blockquote>
                  </div>
                  <div className="mt-3">
                    <p>
                      Sapien.Network, a Web 3.0 social network for the next
                      generation of human connection using crypto, NFTs, and the
                      metaverse, has appointed Latif Nathani as its Chief
                      Operating Officer. Mr. Nathani is an experienced
                      executive, innovator and investor with a proven track
                      record of success. Prior to Sapien, Mr. Nathani held
                      senior roles at eBay, Microsoft and Symantec. In his new
                      role, Mr. Nathani will lead all aspects of the day-to-day
                      activities including product, operations, marketing,
                      organizational development and culture.
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      <time dateTime="March 7, 2022">
                        San Francisco, CA. February 2, 2022.
                      </time>
                    </p>
                    <Link href="/news/latif-joins-sapien">
                      <a className="text-base font-semibold text-sapien-60 hover:text-sapien-80 mt-5 block">
                        Read full story
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
