import { Fragment } from 'react';
import { useTheme } from 'next-themes';

// next
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

// hooks
import { useAuth } from 'context/user';

// tailwind ui
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon, XIcon, SunIcon, MoonIcon } from '@heroicons/react/outline';

// utils
import { mergeClassNames } from 'utils/styles';

const navigation = [
  { name: 'Passport', href: '/passport', visible: true },
  { name: 'Protocol', href: '/protocol', visible: true },
  { name: 'Reserved List', href: '/reserved-list', visible: true },
  { name: 'Token', href: '/token', visible: false },
  {
    name: 'Purple Paper',
    href: '/The_Purple_Paper_v1.1.pdf',
    target: true,
    visible: true,
  },
  { name: 'Roadmap', href: '/roadmap', visible: true },
  { name: 'News', href: '/news', visible: true },
  { name: 'Team', href: '/team', visible: true },
];

const Navbar = () => {
  const { me } = useAuth();
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  return (
    <Disclosure
      as="nav"
      className="relative w-full shadow z-10 backdrop-blur-md bg-neutral-900/50 text-white"
    >
      {({ open }) => (
        <>
          <div className="max-w-6xl mx-auto py-2 px-2 sm:px-4 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex px-2 lg:px-0">
                <div className="shrink-0 flex items-center">
                  <Link href="/">
                    <a href="">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        className="pr-1 w-16"
                        src="/landing/logooutlined.svg"
                        alt="sapien"
                      />
                    </a>
                  </Link>
                </div>
                <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                  {navigation.map((nav) => (
                    <Fragment key={nav.href}>
                      {nav.target ? (
                        <Link href={nav.href}>
                          <a
                            target="_blank"
                            className={mergeClassNames(
                              router.asPath === nav.href
                                ? 'underline decoration-2 decoration-sapien'
                                : 'hover:text-gray-500',
                              'inline-flex items-center text-lg px-1 pt-1 font-extrabold'
                            )}
                          >
                            {nav.name}
                          </a>
                        </Link>
                      ) : (
                        <Link href={nav.href}>
                          <a
                            className={mergeClassNames(
                              router.asPath === nav.href
                                ? 'underline decoration-2 decoration-sapien'
                                : 'hover:text-gray-500',
                              'inline-flex items-center text-lg px-1 pt-1 font-extrabold'
                            )}
                          >
                            {nav.name}
                          </a>
                        </Link>
                      )}
                    </Fragment>
                  ))}
                </div>
              </div>
              <div className="flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden gap-2 lg:ml-7 lg:flex lg:items-center">
                <Link href="https://twitter.com/sapien_network" passHref>
                  <a
                    target="_blank"
                    className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-white hover:bg-gray-600 focus:outline-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </Link>
                <Link href="https://discord.gg/DVDe3ZwuYR" passHref>
                  <a
                    target="_blank"
                    className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-white hover:bg-gray-600 focus:outline-none"
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 71 55"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0)">
                        <path
                          d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"
                          fill="black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect width="71" height="55" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </Link>
                {/*<button
                  id="theme-toggle"
                  type="button"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="mr-4 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2"
                >
                  {theme === 'light' ? (
                    <MoonIcon className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <SunIcon className="h-5 w-5" aria-hidden="true" />
                  )}
                  </button>*/}
                {/* Profile dropdown */}
                {/* {me === null && (
                  <>
                    <Link href="/login">
                      <a className="inline-flex items-center px-4 py-2 font-extrabold text-md font-medium text-xl rounded-full shadow-sm shadow-[4px_4px_#eaeaea] dark:shadow-[4px_4px_#27272a] rounded-full border border-gray-400 hover:bg-gray-100 focus:outline-none">
                        Sign in
                      </a>
                    </Link>
                  </>
                )}
                {me && (
                  <>
                    <Menu as="div" className="relative ml-2 shrink-0">
                      <div>
                        <Menu.Button className="bg-white dark:bg-black rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                          <span className="sr-only">Open user menu</span>
                          {me.avatar ? (
                            <Image
                              alt={me.displayName}
                              src={me.avatar}
                              width={30}
                              height={30}
                              className="h-8 w-8 rounded-full"
                            />
                          ) : (
                            <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-gray-500">
                              <span className="text-sm font-medium leading-none">
                                {me.displayName[0]}
                              </span>
                            </span>
                          )}
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg py-1 bg-white dark:bg-black ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            <div className="border-b border-gray-200 px-4 py-2">
                              <div className="text-base font-medium">
                                {me.displayName}
                              </div>
                              <div className="text-sm font-medium">
                                {me.email}
                              </div>
                            </div>
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link href="/logout">
                                <a
                                  className={mergeClassNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm'
                                  )}
                                >
                                  Sign out
                                </a>
                              </Link>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </>
                )} */}
                {/* {me === undefined && (
                  <div className="animate-pulse flex items-center space-x-2">
                    <div className="h-8 w-32 bg-gray-300 rounded-full"></div>
                    <div className="rounded-full bg-gray-300 h-8 w-8"></div>
                  </div>
                )} */}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {navigation.map((nav) => (
                <Fragment key={nav.name}>
                  {nav.target ? (
                    <Disclosure.Button
                      as="a"
                      href={nav.href}
                      target="_blank"
                      className={mergeClassNames(
                        router.asPath === nav.href
                          ? 'bg-purple-50 border-purple-500 text-sapien-60'
                          : 'border-transparent text-white hover:bg-gray-800',
                        'block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                      )}
                    >
                      {nav.name}
                    </Disclosure.Button>
                  ) : (
                    <Disclosure.Button
                      as="a"
                      href={nav.href}
                      className={mergeClassNames(
                        router.asPath === nav.href
                          ? 'bg-purple-50 border-purple-500 text-sapien-60'
                          : 'border-transparent text-white hover:bg-gray-800',
                        'block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                      )}
                    >
                      {nav.name}
                    </Disclosure.Button>
                  )}
                </Fragment>
              ))}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              {me ? (
                <>
                  <div className="flex items-center px-4">
                    <div className="Wshrink-0">
                      {me.avatar ? (
                        <Image
                          alt={me.displayName}
                          src={me.avatar}
                          width={30}
                          height={30}
                          className="h-8 w-8 rounded-full"
                        />
                      ) : (
                        <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-gray-500">
                          <span className="text-sm font-medium leading-none text-white dark:text-black">
                            {me.displayName[0]}
                          </span>
                        </span>
                      )}
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-gray-800">
                        {me.displayName}
                      </div>
                      <div className="text-sm font-medium text-gray-500">
                        {me.email}
                      </div>
                    </div>
                    {/* <button
                      type="button"
                      className="ml-auto shrink-0 bg-white dark:bg-black p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button> */}
                    <Disclosure.Button
                      as="a"
                      href="/logout"
                      className="ml-auto shrink-0 px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                    >
                      Sign out
                    </Disclosure.Button>
                  </div>
                  <div className="mt-3 space-y-1">
                    {/* <Disclosure.Button className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">
                      Connect Wallet
                    </Disclosure.Button> */}
                  </div>
                </>
              ) : (
                <div className="gap-4 p-2 flex">
                  <Link href="https://twitter.com/sapien_network" passHref>
                    <a
                      target="_blank"
                      className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-white hover:bg-sapien-50 focus:outline-none"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                  </Link>
                  <Link href="https://discord.gg/DVDe3ZwuYR" passHref>
                    <a
                      target="_blank"
                      className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-white hover:bg-sapien-50 focus:outline-none"
                    >
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 71 55"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0)">
                          <path
                            d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"
                            fill="black"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect width="71" height="55" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </Link>
                </div>
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
