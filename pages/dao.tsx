import Link from 'next/link';

// components
import { Head } from 'components/common';

// types
import { NextPage } from 'next';

const DAOPage: NextPage = () => {
  return (
    <>
      <Head title="DAO" description="" />
      <div className="max-w-6xl mx-auto my-8">
        <div className="py-12 lg:px-8 px-6">
          <div className="mt-24 max-w-lg mx-auto lg:max-w-none">
            <div className="relative flex mb-12">
              <div className="px-8 py-12">
                <h4 className="text-2xl sm:text-3xl font-extrabold">
                  Rabbit Hole Studios DAO
                </h4>
                <p className="mt-3 text-xl sm:text-2xl whitespace-pre-line text-justify">
                  <Link href="https://rabbitholestudios.org/">
                    <a
                      target="_blank"
                      className="text-xl sm:text-2xl text-sapien-60 hover:text-sapien-80"
                    >
                      Rabbit Hole Studios DAO
                    </a>
                  </Link>{' '}
                  is a collective of artists, musicians and digital media
                  creators on a mission to create a more decentralized and
                  equitable record label called &apos;The Hidden Hare&apos; that
                  offers buyers of their NFTs exclusive access to private
                  parties, concerts and festivals at their community arts center
                  in Athens, GA. They&apos;re building a token-gated digital art
                  gallery that features VR-live streaming of their weekly public
                  events like song circles, open mic nights and the monthly open
                  jams. &quot;We are thrilled to be working with Sapien Network
                  to build out our smart contract DAO with a built-in NFT
                  marketplace and a collective governance model that returns the
                  power, often usurped by executives and middlemen, back to the
                  artists who deserve it most.&quot; - Nick Bradfield, Rabbit
                  Hole Studios DAO Founder.
                </p>
              </div>
            </div>

            <div className="relative flex mb-12">
              <div className="px-8 py-12">
                <h4 className="text-2xl sm:text-3xl font-extrabold">
                  Harambe DAO
                </h4>
                <p className="mt-3 text-xl sm:text-2xl whitespace-pre-line text-justify">
                  <Link href="https://www.theharambefoundation.com/">
                    <a
                      target="_blank"
                      className="text-xl sm:text-2xl text-sapien-60 hover:text-sapien-80"
                    >
                      The Harambe DAO
                    </a>
                  </Link>{' '}
                  is a community committed to providing resources for gorilla
                  and wildlife conservation projects. Their mission: To work
                  with organizations and individuals worldwide to address issues
                  around gorilla captivity, to bring awareness to the rangers
                  and individuals who have direct contact with gorillas in
                  various locations across the African rainforest, and to assist
                  in the overall preservation of life. &quot;Harambe means
                  family… to come together, to work as one. Through this DAO, we
                  will achieve the unimaginable. There is no obstacle that
                  cannot be conquered as a community.&quot; - Heather
                  Marderosian, Harambe Foundation CEO & Founder.
                </p>
              </div>
            </div>

            <div className="relative flex mb-12">
              <div className="px-8 py-12">
                <h4 className="text-2xl sm:text-3xl font-extrabold">
                  JournoDAO
                </h4>
                <p className="mt-3 text-xl sm:text-2xl whitespace-pre-line text-justify">
                  <Link href="https://journodao.xyz/">
                    <a
                      target="_blank"
                      className="text-xl sm:text-2xl text-sapien-60 hover:text-sapien-80"
                    >
                      JournoDAO
                    </a>
                  </Link>{' '}
                  JournoDAO is on a mission to buy a newspaper alongside the
                  communities it serves and use Web3 tools to improve it to
                  serve those communities better. To prepare for this mission,
                  we are building an incubator for projects that transform and
                  rethink the journalism ecosystem using tools such as
                  decentralized newsrooms, on-chain reporting, tokenized
                  ownership, and peer-to-peer distribution.
                </p>
              </div>
            </div>

            <div className="relative flex mb-12">
              <div className="px-8 py-12">
                <h4 className="text-2xl sm:text-3xl font-extrabold">
                  Afropolitan DAO
                </h4>
                <p className="mt-3 text-xl sm:text-2xl whitespace-pre-line text-justify">
                  <Link href="https://afropolitangroup.com/">
                    <a
                      target="_blank"
                      className="text-xl sm:text-2xl text-sapien-60 hover:text-sapien-80"
                    >
                      Afropolitan DAO
                    </a>
                  </Link>{' '}
                  is focused on community as a service for the African Diaspora.
                  They are building the future of a progressive black community,
                  which is global and decentralized. Their mission: to help one
                  billion Afropolitans unleash their maximum potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DAOPage;
