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
  { name: 'Team', href: '/team', visible: true },
  { name: 'Protocol', href: '/protocol', visible: true },
  { name: 'Reserved List', href: '/reserved-list', visible: true },
];

const Navbar = () => {
  const { me } = useAuth();
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  return (
    <Disclosure
      as="nav"
      className="relative w-full shadow z-10 backdrop-blur-md"
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
                        className="pr-6 w-20"
                        src="/images/logo.png"
                        alt="sapien"
                      />
                    </a>
                  </Link>
                </div>
                <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                  {navigation.map((nav) => (
                    <Fragment key={nav.href}>
                      {nav.visible && (
                        <Link href={nav.href}>
                          <a
                            className={mergeClassNames(
                              router.asPath === nav.href
                                ? 'underline decoration-2 decoration-sapien'
                                : 'hover:text-gray-500',
                              'inline-flex items-center text-2xl px-1 pt-1 font-extrabold'
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
              <div className="hidden lg:ml-7 lg:flex lg:items-center">
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
                {me === null && (
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
                    {/*<button className="inline-flex items-center px-4 py-2 border text-sm font-medium rounded-full py-2 px-6 shadow-sm hover:bg-sapien-60 hover:text-white dark:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                      Connect Wallet
                    </button>*/}
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
                )}
                {me === undefined && (
                  <div className="animate-pulse flex items-center space-x-2">
                    <div className="h-8 w-32 bg-gray-300 rounded-full"></div>
                    <div className="rounded-full bg-gray-300 h-8 w-8"></div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {navigation.map((nav) => (
                <Fragment key={nav.name}>
                  {nav.visible && (
                    <Disclosure.Button
                      as="a"
                      href={nav.href}
                      className={mergeClassNames(
                        router.asPath === nav.href
                          ? 'bg-purple-50 border-purple-500 text-sapien-60'
                          : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800',
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
                <div className="space-y-1">
                  <Disclosure.Button
                    as="a"
                    href="/login"
                    className={mergeClassNames(
                      router.asPath === '/login'
                        ? 'bg-purple-50 border-purple-500 text-sapien-60'
                        : 'border-transparent  text-gray-500 hover:bg-gray-100 hover:border-gray-300 hover:text-gray-800',
                      'block px-4 py-2 text-base font-medium'
                    )}
                  >
                    Login
                  </Disclosure.Button>
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
