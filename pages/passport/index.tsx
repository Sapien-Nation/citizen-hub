import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// components
import { Head } from 'components/common';

// tailwind ui
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';

// utils
import { preloadImages } from 'utils/homepage';

// components
import { Footer } from 'components/navigation';

const roadMap = [
  {
    initialBatch: '1,500',
    maxSupply: '10,000',
    initialPrice: '0.25 ETH',
    nftSale: 'February 28th, 2022',
    mintDate: 'March 30, 2022',
  },
];

// types
import type { NextPage } from 'next';

const PassportPage: NextPage = () => {
  return (
    <>
      <Head
        title="Passport"
        description="Sapien is building the world’s first sovereign digital nation, a Republic of DAOs powered by Sapien’s first-of-its-kind NFT passport."
        image="/landing/Human.png"
      />
      <main
        id="main"
        data-scroll-container
        className="bg-neutral-900 text-white"
      >
        <section className="tiles tiles--perspective max-w-6xl -mt-10 min-h-screen flex flex-col justify-center align-center mx-auto px-8">
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
                  backgroundImage: "url('landing/Harriet_Tunman.png')",
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
                  backgroundImage: "url('landing/Rachel_Carson.png')",
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
            className="content__title md:text-8xl text-4xl font-extrabold drop-shadow-lg md:filter-none"
            data-scroll
            data-scroll-speed="2"
          >
            Choose Your Avatar and Blaze a Path Forward
          </h2>
          <p className="text-lg md:text-3xl font-bold z-10">
            The NFT Passport is the tool to navigate next-gen communities in the
            metaverse.
          </p>
        </section>
        <section
          data-scroll
          data-scroll-speed="2"
          className="max-w-6xl relative gap-6 flex flex-col mx-auto justify-center mt-24 mb-36 px-8"
        >
          <p className="sm:text-2xl text-xl">
            The future is murky, but it’s easier to see the path forward when
            you’re standing on the shoulders of giants. The collective
            achievements and contributions of our heroes from history have
            brought us to where we stand now.
          </p>
          <p className="sm:text-2xl text-xl">
            As we embark on this journey of building the future, we’re looking
            back at where we came from with avatars of our favorite historical
            figures to help us blaze a new path forward as we launch the Sapien
            Tribe, the world’s first Digital Nation in the metaverse.
          </p>
          <p className="sm:text-2xl text-xl">
            Celebrate history with an avatar of one of your favorite historical
            figures and join us in our mission to empower people to reclaim
            their individual and collective agency.
          </p>
          <p className="sm:text-2xl text-xl">
            The NFT Passport is a new class of digital asset that represents a
            holder’s citizenship within a Sovereign Tribe. <br /> <br /> (Read
            more in the
            <Link href="/The_Purple_Paper_v1.1.pdf">
              <a
                target="_blank"
                className="text-sapien-80 ml-2 underline font-extrabold"
              >
                Purple Paper
              </a>
            </Link>
            ).
          </p>
        </section>
        <div
          data-scroll
          data-scroll-speed="1"
          className="relative flex justify-center mx-8 lg:mx-0 mt-24 mb-36"
        >
          <div className="px-8 py-12 lg:max-w-6xl rounded-xl bg-gradient-to-r from-sapien to-sapien-40 shadow-xl shadow-sapien/50">
            <h2 className="text-xl font-bold sm:text-3xl mb-12">
              The Sapien Tribe Passport is a unique NFT with unparalleled
              utility. As a holder, you will have the opportunity to:
            </h2>
            <ul className="list-disc sm:text-2xl text-xl mb-12">
              <li className="ml-6 mb-2">
                Choose a photo of one of your favorite historical figures to
                mint a 1-of-1 NFT
              </li>
              <li className="ml-6 mb-2">
                Add to a bespoke, limited art collection generated with Machine
                Learning
              </li>
              <li className="ml-6 mb-2">
                Get early access to the Sapien platform and powerful utilities
                within the ecosystem
              </li>
              <li className="ml-6 mb-2">
                Become a Founding Member of the Sapien Tribe when you sign your
                passport
              </li>
            </ul>

            <div className="flex flex-col mb-12">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-extrabold text-black uppercase tracking-wider"
                          >
                            Initial Batch
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-extrabold text-black uppercase tracking-wider"
                          >
                            Max Supply
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-extrabold text-black uppercase tracking-wider"
                          >
                            Initial Price
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-extrabold text-black uppercase tracking-wider"
                          >
                            NFT Sale
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-extrabold text-black uppercase tracking-wider"
                          >
                            Mint Date
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {roadMap.map((date, index) => (
                          <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {date.initialBatch}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {date.maxSupply}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {date.initialPrice}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {date.nftSale}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {date.mintDate}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <Link href="https://discord.gg/DVDe3ZwuYR">
              <a
                target="_blank"
                className="border font-extrabold justify-center px-2 py-3 mt-12 rounded-md text-white md:py-3 md:text-xl md:px-8"
              >
                Join the Whitelist
              </a>
            </Link>
          </div>
        </div>
        <section
          data-scroll
          data-scroll-speed="1"
          className="max-w-6xl relative gap-6 flex flex-col mx-auto justify-center mt-24 mb-24 px-8"
        >
          <h2 className="text-4xl text-end md:text-6xl font-extrabold">
            Liquid{' '}
            <span className="pb-3 bg-clip-text text-transparent bg-gradient-to-r from-sapien to-sapien-40">
              Citizenship
            </span>
            .
          </h2>
          <p className="text-lg">
            The Sapien Tribe Passport is an essential tool for finding the right
            people around the globe to unite and lead the first digital nation
            in the metaverse. NFT Passports can be signed or unsigned: Unsigned
            Passports are free to transfer or trade, whereas Signed Passports
            are non-transferable and tied to a wallet address.
          </p>
          <p className="text-lg">
            Passport holders will have the opportunity to sign their passports
            with the <i>Declaration of Sovereignty</i>, a seminal document
            outlining the rights of <i>Sapien Tribe</i> citizens, or at the
            <i>Constitutional Convention</i>, a holder exclusive event to ratify
            the governance framework of the <i>Sapien Tribe</i>. Upon signature,
            the holder will become a Founding Member of the Sapien Tribe and the
            passport will become non-transferable.
          </p>
          <p className="text-lg">
            Every passport holder will have to choose between the market value
            of their passport and the social value of participation in the
            <i>Sapien Tribe</i>.
          </p>
        </section>

        <section
          data-scroll
          data-scroll-speed="1"
          className="max-w-6xl relative gap-6 flex flex-col mx-auto justify-center mb-48 px-8"
        >
          <h2 className="text-4xl text-end md:text-6xl font-extrabold">
            <span className="pb-3 bg-clip-text text-transparent bg-gradient-to-r from-sapien to-sapien-40">
              Passport Utilities
            </span>
          </h2>
          <div className="w-full px-4">
            <div className="w-full p-8 mx-auto bg-neutral-800 text-white rounded-2xl">
              <Disclosure defaultOpen>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex mb-6 justify-between w-full px-4 py-2 text-sm font-medium text-left text-sapien bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span className="text-lg font-extrabold">Identity</span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'transform rotate-180' : ''
                        } w-5 h-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="mb-6 px-4 gap-6 flex flex-col pt-4 pb-2 text-lg text-white">
                      <p>
                        Identity is a fundamental part of participating in any
                        community. Proof of ownership of an NFT passport serves
                        as a basis for identity but certain types of
                        participation require varying degrees of personal
                        information to be shared (e.g. an age-restricted event
                        might require one to share one’s age to enter).{' '}
                      </p>
                      <p>
                        In order to facilitate all types of interactions and to
                        preserve privacy, the NFT passport will implement a
                        “share-only-what-you-need” identity system based on
                        Zero-knowledge proofs so that each individual can
                        participate fully while only sharing private information
                        with trusted entities.{' '}
                      </p>
                      <p>
                        Each Tribe can determine what information must be shared
                        publicly in order to participate within their community.
                        This information can include personal information
                        voluntarily shared by an individual as well as a record
                        of their interactions contained within a social ledger.
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="mb-6 flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-sapien bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span className="text-lg font-extrabold">
                        Social Ledger
                      </span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'transform rotate-180' : ''
                        } w-5 h-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="mb-6 px-4 gap-6 flex flex-col pt-4 pb-2 text-lg text-white">
                      <p>
                        The social ledger will be a record of social
                        interactions associated with an NFT passport. This
                        record can include positive and negative interactions,
                        and these interactions can be recorded by any individual
                        or Tribe.
                      </p>
                      <p>
                        Interactions on the social ledger will be recorded
                        privately by default and only made public at the
                        discretion of the individual. Certain communities may
                        require public display of certain sections of the social
                        ledger for participation. For example, a Tribe may
                        require public display of all interactions recorded
                        within other communities that it trusts. A Tribe may
                        also choose to accept or deny submissions to the social
                        ledger from other communities.
                      </p>
                      <p>
                        The social ledger is a key component of the network of
                        trust facilitated by the passport — this network of
                        trust is enhanced and given tangible value by an access
                        control layer.
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="mb-6 flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-sapien bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                      <span className="text-lg font-extrabold">
                        Access Control
                      </span>
                      <ChevronUpIcon
                        className={`${
                          open ? 'transform rotate-180' : ''
                        } w-5 h-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="mb-6 px-4 gap-6 flex flex-col pt-4 pb-2 text-lg text-white">
                      <p>
                        Access control on the NFT passport will be managed by a
                        system of titles associated with certain privileges
                        within a given Tribe. This system is designed to
                        facilitate the complex hierarchy of roles that is
                        essential for the functioning of complex organizations.
                      </p>
                      <p>
                        The access control layer is being developed with
                        interoperability of the physical and digital worlds in
                        mind to support the communities of the future which,
                        whether physically or digitally native will need a
                        strong presence in both worlds. The NFT passport can be
                        used to gate access to physical spaces and events or a
                        wide variety of digital resources and tools that
                        facilitate the operations of a Tribe, including the
                        powerful new economic primitives being introduced to the
                        Sapien ecosystem.
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          </div>
        </section>
        <section
          data-scroll
          data-scroll-speed="2"
          className="max-w-6xl relative gap-6 flex flex-wrap mx-auto justify-center mt-24 mb-36 px-8"
        >
          <h2 className="text-4xl text-end md:text-6xl font-extrabold">
            New to{' '}
            <span className="pb-3 bg-clip-text text-transparent bg-gradient-to-r from-sapien to-sapien-40">
              web3
            </span>
            ?
          </h2>
          <p className="text-lg">
            We are calling all thought leaders, sensemakers, and changemakers to
            join us on the journey of building the Sapien Nation. If you are an
            individual or organization looking to make an impact, email us at{' '}
            <b>passports@sapien.network</b> to see how we can collaborate.
          </p>
          <Link href="https://discord.gg/DVDe3ZwuYR">
            <a
              target="_blank"
              className="mt-12 border font-extrabold justify-center px-2 py-3 rounded-md text-white md:py-3 md:text-xl md:px-8"
            >
              Join our Community
            </a>
          </Link>
        </section>
        <div data-scroll data-scroll-speed="1" className="w-full lg:mb-44">
          <Footer />
        </div>
      </main>
    </>
  );
};

const PassportPageProxy = () => {
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();
  const containerRef = useRef(null);

  useEffect(() => {
    if (window) {
      Promise.allSettled([preloadImages('.tiles__line-img')]).then(() => {
        setIsLoading(false);
      });
    }
  }, []);

  return (
    <>
      <Head title="Passport" />
      {isLoading ? null : <PassportPage />}
    </>
  );
};

export default PassportPageProxy;
