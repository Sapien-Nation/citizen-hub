import Link from 'next/link';
import { useState } from 'react';
// tailwind ui
import { Disclosure } from '@headlessui/react';
import { CheckCircleIcon, ChevronDownIcon } from '@heroicons/react/solid';
import { ShieldExclamationIcon } from '@heroicons/react/outline';
import { ethers } from 'ethers';

// assets
import { Ethereum, Metamask } from 'assets';

// api
import { reservePassport } from 'api/passportPurchase';

// components
import { LottiePlayer } from 'components/common';

//constants
import { ToastType } from 'constants/toast';

import { injected } from 'connectors';

// context
import { useToast } from 'context/toast';

// hooks
import { useWeb3React } from 'hooks/web3';

// utils
import { displayAddress } from 'utils/web3';
import { mergeClassNames } from 'utils/styles';
import { Checkbox } from 'components/fields';

interface Props {
  onBuy: () => void;
  isSoldOut: boolean;
  distributionId: string;
  amount?: number;
}

const PurchaseView = ({
  onBuy,
  isSoldOut,
  distributionId,
  amount = 0.15,
}: Props) => {
  const [checked, setChecked] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const toast = useToast();

  const { deactivate, account, activate, active, chainId } = useWeb3React();

  const handleConnectWallet = () => {
    if (typeof window.ethereum === 'undefined') {
      toast({
        message: 'Please install MetaMask',
      });

      return;
    }
    active ? deactivate() : activate(injected);
  };

  const handleBuyPassport = async () => {
    setIsFetching(true);
    const provider = new ethers.providers.Web3Provider(
      (window as any).ethereum
    );
    const signer = provider.getSigner();
    try {
      const tx = await signer.sendTransaction({
        to: process.env.NEXT_PUBLIC_SAPIEN_WALLET_ADDRESS,
        value: ethers.utils.parseEther(amount.toString()),
      });
      const receipt = await tx.wait();

      if (receipt.transactionHash && receipt.status) {
        await reservePassport({
          amount: amount,
          units: 'ETHER',
          type: 'METAMASK',
          address: account,
          distributionId: distributionId,
        });

        toast({
          message: 'Transaction successful',
          type: ToastType.Success,
        });
        onBuy();
      }
    } catch (e) {
      if (e.code === 'INSUFFICIENT_FUNDS') {
        toast({
          message: 'Not enough balance in the wallet!',
        });
      } else {
        toast({
          message: e.message || 'error',
        });
      }
    }
    setIsFetching(false);
  };

  if (isFetching) {
    return (
      <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden text-left">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="https://images.newindianexpress.com/uploads/user/imagelibrary/2021/11/27/w1200X800/Metaverse_is_Coming.jpg"
            alt="People working on laptops"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-purple-900 mix-blend-multiply" />
        </div>
        <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8 flex flex-col items-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl flex items-center">
            <ShieldExclamationIcon className="w-16 mr-2 text-red-500" />{' '}
            Don&lsquo;t reload this screen
          </h1>
          <LottiePlayer lottie="https://assets9.lottiefiles.com/packages/lf20_crp2jplv.json" />
          <p className="mt-6 text-xl text-white font-semibold animate-pulse">
            Purchase in process...
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-gray text-left">
        <div className="max-w-2xl mx-auto pb-24 px-4 sm:px-6 lg:max-w-6xl lg:px-8">
          {active && (
            <div className="rounded-md bg-green-50 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <CheckCircleIcon
                    className="h-5 w-5 text-sapien"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-green-800">
                    Your wallet address is:{' '}
                    {active ? (
                      <span className="font-bold">
                        {displayAddress(account)}
                      </span>
                    ) : (
                      ''
                    )}
                  </p>
                </div>
              </div>
            </div>
          )}
          <form className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
            <section
              aria-labelledby="cart-heading"
              className="lg:col-span-7 bg-neutral-800 rounded-lg p-8"
            >
              <h2 id="cart-heading" className="sr-only">
                Passport in your shopping cart
              </h2>

              <div>
                <div className="border-b pb-6 border-gray-200 flex items-center justify-between">
                  <h2 className="text-xl font-medium text-white">
                    Buy a Passport
                  </h2>
                  <span className="text-xl font-medium text-white flex items-center">
                    {' '}
                    <span className="mr-2">0.15 ETH</span> <Ethereum />
                  </span>
                </div>
                <p className="text-gray-400 text-lg pt-4">
                  The Sapien NFT Passport contains a 1-of-1 stylized historical
                  figure and functions as an all-in-one tool to participate in a
                  social network of DAOs. Read more about the NFT Passport{' '}
                  <a
                    href="https://www.sapien.network/news/why-nft-passports"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sapien-60"
                  >
                    here
                  </a>
                </p>
                <p className="text-gray-400 text-lg pt-4">
                  Join ranks of builders, innovators, entrepreneurs, and leaders
                  who are already on board as Founding Members of the Sapien
                  Nation. You will have direct access to bring your voice to the
                  foundation of the first digital nation in the world. This is
                  your opportunity to make your mark and make a difference.
                </p>
                <div className="w-full">
                  <div className="w-full mt-5 mx-auto bg-neutral-800 text-white rounded-2xl">
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="mb-6 flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-left text-sapien bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                            <span className="text-lg font-extrabold">
                              Benefits
                            </span>
                            <ChevronDownIcon
                              className={`${
                                open ? 'transform rotate-180' : ''
                              } w-5 h-5 text-purple-500`}
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="mb-6 gap-6 flex flex-col pt-4 pb-2">
                            <h3 className="font-bold text-gray-300 text-xl">
                              1-of-1 Historical Avatar
                            </h3>
                            <p className="text-gray-400 text-lg">
                              Each NFT passport contains a stylized 1-of-1
                              portrait of a historical figure. Elevate and
                              immortalize your heroes from the past as we blaze
                              a path forward in the Sapien Nation.
                            </p>

                            <h3 className="font-bold text-gray-300 text-xl">
                              Launch your own DAO
                            </h3>
                            <p className="text-gray-400 text-lg">
                              Every passport holder in the Sapien Nation will
                              have early access to the Tribe Protocol to
                              experiment with launching their own DAO.
                            </p>

                            <h3 className="font-bold text-gray-300 text-xl">
                              Become a Founder of the{' '}
                              <span className="italic">Sapien Nation</span>
                            </h3>
                            <p className="text-gray-400 text-lg">
                              Holders can choose to{' '}
                              <span className="italic">sign</span> their
                              passports, at which point the NFT becomes
                              non-transferrable, identifies you publicly as a{' '}
                              <span className="italic">Founding Member</span>,
                              and unlocks additional utilities.
                            </p>

                            <h3 className="font-bold text-gray-300 text-xl">
                              Founding Member Utility I: Launch Social
                              Currencies
                            </h3>
                            <p className="text-gray-400 text-lg">
                              Founding Members will be able to launch their own
                              social currencies and receive UBI from the{' '}
                              <span className="italic">Sapien Nation</span> to
                              invest in communities that matter to them.
                            </p>

                            <h3 className="font-bold text-gray-300 text-xl">
                              Founding Member Utility II: Identity
                            </h3>
                            <p className="text-gray-400 text-lg">
                              Sapien NFT Passports create a form of
                              decentralized digital identity, and will utilize
                              zero-knowledge proofs to protect your information
                              and share only what you need to with communities.
                            </p>

                            <h3 className="font-bold text-gray-300 text-xl">
                              Founding Member Utility III: Social Ledger
                            </h3>
                            <p className="text-gray-400 text-lg">
                              The Passport will record achievements,
                              contributions, and other interactions with DAOs in
                              the <span className="italic">Sapien Nation</span>{' '}
                              to let you tell your story in the Metaverse.
                            </p>

                            <h3 className="font-bold text-gray-300 text-xl">
                              Founding Member Utility IV: Access
                            </h3>
                            <p className="text-gray-400 text-lg">
                              Founders will be able to use the NFT passport to
                              manage roles and permissions on the Sapien Tribe
                              Protocol and may utilize the passport to access
                              community events, merchandise, and other gated
                              perks.
                            </p>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </div>
                </div>
              </div>
            </section>

            {/* Order summary */}
            <section
              aria-labelledby="summary-heading"
              className="lg:col-span-5"
            >
              <div className="bg-neutral-800 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0">
                <h2
                  id="summary-heading"
                  className="text-lg font-medium text-gray-400"
                >
                  Purchase Summary
                </h2>

                <dl className="mt-6 space-y-4">
                  <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                    <dt className="text-base font-medium text-white">
                      Total cost
                    </dt>
                    <dd className="text-base font-medium text-white flex items-center">
                      {' '}
                      <span className="mr-2">0.15 ETH</span>{' '}
                      <Ethereum width={15} />
                    </dd>
                  </div>
                </dl>

                {active && (
                  <div className="mt-6">
                    {isSoldOut ? (
                      <h1 className="mt-3 max-w-lg mx-auto text-md font-light py-4 text-gray-500 sm:text-xl md:mt-5">
                        Passports are sold out.
                      </h1>
                    ) : (
                      <div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center mb-4">
                            <input
                              name="terms"
                              type="checkbox"
                              onChange={(event) => {
                                setChecked(event.target.checked);
                              }}
                              checked={checked}
                              className="h-4 w-4 text-sapien focus:ring-purple-500 border-gray-600 rounded"
                              aria-invalid="true"
                            />
                            <label
                              htmlFor="terms"
                              className={`ml-2 block text-xs`}
                            >
                              I have read and agree to the{' '}
                              <Link passHref href="/terms">
                                <a
                                  className="text-blue-500"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  Terms & Conditions
                                </a>
                              </Link>{' '}
                            </label>
                          </div>
                        </div>
                        <button
                          disabled={isFetching || checked === false}
                          type="button"
                          className={mergeClassNames(
                            checked === false ? 'cursor-not-allowed' : '',
                            isFetching
                              ? 'cursor-not-allowed'
                              : 'cursor-pointer',
                            'w-full bg-sapien border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-sapien-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-sapien-80'
                          )}
                          onClick={handleBuyPassport}
                        >
                          {isFetching ? 'Purchasing...' : `Purchase`}
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="flex justify-center">
                <button
                  type="button"
                  className="relative flex items-center mt-8 shine bg-gradient-to-r from-sapien to-sapien-40 font-extrabold justify-center px-2 py-3 m rounded-md text-white md:py-3 md:text-xl md:px-8"
                  onClick={handleConnectWallet}
                >
                  {active ? (
                    'Disconnect Wallet'
                  ) : (
                    <>
                      <Metamask width={30} className="mr-2" />
                      Connect Your Wallet
                    </>
                  )}
                </button>
              </div>
            </section>
          </form>
        </div>
      </div>
    </>
  );
};

export default PurchaseView;
