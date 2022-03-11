import Link from 'next/link';

// types
import { NextPage } from 'next';

// components
import { Head, VideoPlayer } from 'components/common';

const Roadmap: NextPage = () => {
  return (
    <>
      <Head
        title="Roadmap"
        description="We’ll be publicly posting key dates each quarter as we carve out our path for the Tribal Renaissance. Stay tuned for updates!"
        image="/images/Sapien_Logo.png"
      />
      <div className="max-w-6xl mx-auto px-8 sm:px-6 lg:px-8 my-12">
        <h1>
          <span className="mt-2 max-w-prose block text-3xl text-center leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            We’ll be publicly posting key dates each quarter as we carve out our
            path for the Tribal Renaissance. Stay tuned for updates!
          </span>
        </h1>
        <div className="max-w-6xl mx-auto px-8 sm:px-6 lg:px-8 my-12">
          <ul className="list-disc sm:text-2xl text-xl mb-12">
            <li className="ml-6 mb-2">
              <span className="font-extrabold">November 5, 2021</span>
              <ul className="list-disc sm:text-2xl text-xl mb-12">
                <li className="ml-6 mb-2">
                  Development of the NFT Passport primitive
                </li>
                <li className="ml-6 mb-2">
                  <i>First Congress of the Sapien Nation</i> (see our{' '}
                  <Link
                    href="https://twitter.com/sapien_network/status/1459204059068518403"
                    passHref
                  >
                    <a target="_blank" className="underline">
                      Recap
                    </a>
                  </Link>
                  !)
                </li>
              </ul>
            </li>
            <li className="ml-6 mb-2">
              <span className="font-extrabold">January 31, 2022</span>
              <ul className="list-disc sm:text-2xl text-xl mb-12">
                <li className="ml-6 mb-2">
                  <i>Purple Paper</i> v1 release (
                  <Link
                    href="https://www.sapien.network/The_Purple_Paper_v1.1.pdf"
                    passHref
                  >
                    <a target="_blank" className="underline">
                      Read
                    </a>
                  </Link>
                  )
                </li>
              </ul>
            </li>
            <li className="ml-6 mb-2">
              <span className="font-extrabold">March 14, 2022</span>
              <ul className="list-disc sm:text-2xl text-xl mb-12">
                <li className="ml-6 mb-2">
                  NFT Passport Whitelist Presale Begins
                </li>
              </ul>
            </li>
            <li className="ml-6 mb-2">
              <span className="font-extrabold">March 17, 2022</span>
              <ul className="list-disc sm:text-2xl text-xl mb-12">
                <li className="ml-6 mb-2">NFT Passport Public Sale Begins</li>
              </ul>
            </li>
            <li className="ml-6 mb-2">
              <span className="font-extrabold">April 20, 2022</span>
              <ul className="list-disc sm:text-2xl text-xl mb-12">
                <li className="ml-6 mb-2">Sapien NFT Passport Mint Day</li>
                <li className="ml-6 mb-2">
                  Early Access to the Tribe Protocol
                </li>
              </ul>
            </li>
            <hr></hr>
            <li className="ml-6 mb-2 mt-12">
              <span className="font-extrabold">
                The Dawn of Tribal Sovereignty
              </span>
              <ul className="list-disc sm:text-2xl text-xl mb-12">
                <li className="ml-6 mb-2">
                  Declaration of Sovereignty release{' '}
                </li>
                <li className="ml-6 mb-2">
                  Second Congress of the Sapien Nation (Exclusive for holders)
                </li>
                <li className="ml-6 mb-2">
                  Development of the <i>Sapien Nation Sovereign</i> (Token)
                </li>
              </ul>
            </li>
            <li className="ml-6 mb-2">
              <span className="font-extrabold">The Awakening of the Tribe</span>
              <ul className="list-disc sm:text-2xl text-xl mb-12">
                <li className="ml-6 mb-2">
                  Development of Community Titles on Passports
                </li>
                <li className="ml-6 mb-2">
                  Development of Social Ledger on Passport
                </li>
                <li className="ml-6 mb-2">
                  Development of Community Passports
                </li>
              </ul>
            </li>
            <li className="ml-6 mb-2">
              <span className="font-extrabold">The Tribal Renaissance</span>
              <ul className="list-disc sm:text-2xl text-xl mb-12">
                <li className="ml-6 mb-2">
                  The founding of the first Tribe Hall
                </li>
                <li className="ml-6 mb-2">
                  <i>Sapien Nation Constitutional Convention</i> (Exclusive for
                  holders)
                </li>
                <li className="ml-6 mb-2">
                  The Foundation of Tribal Metaphilosophy
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Roadmap;
