import React, { useEffect, useRef, useState } from 'react';
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
import { string } from 'yup';

const navigation = [
  { section: 'Home', href: '/' },
  { section: 'Purple Paper', href: '/The_Purple_Paper_v1.2.pdf' },
  {
    section: 'Sapien Nation',
    links: [
      {
        name: 'Passport',
        href: 'https://sapienteam.notion.site/The-Passport-Explained-aef635c4cbe7454cbc0f86ba44b6ffb1',
        target: '_blank',
      },
      { name: 'Reserved List', href: '/reserved-list' },
      //{ name: 'Token', href: '/token' },
      /*
      {
        name: 'The Tetrahedron',
        href: 'https://bit.ly/3xGGAHW',
        target: '_blank',
      },
      */
    ],
  },
  {
    section: 'logo',
    href: '/',
  },
  {
    section: 'For DAOs',
    links: [
      {
        name: 'Learn More',
        href: 'https://www.notion.so/sapienteam/How-do-DAOs-benefit-5204a248f3b64b11b656bc8fa4f5bbdf',
        target: '_blank',
      },
      {
        name: 'Join the Nation',
        href: 'https://4cnw27iuk8s.typeform.com/to/f8wIuHU7?typeform-source=www.google.com',
        target: '_blank',
      },
    ],
  },
  {
    section: 'Roadmap',
    href: 'https://sapienteam.notion.site/Roadmap-5c3ae8042a6c413581ead083c88ec446',
  },
  /*
  {
    section: 'About Us',
    links: [{ name: 'Team', href: '/team' }],
  },
  */
  { section: 'News', href: '/news' },
];

interface NavbarDropdown {
  section: string;
  links: Array<{ name: string; href: string; target?: string }>;
}

const NavbarDropdown = ({ section, links }: NavbarDropdown) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [isOpen]);

  return (
    <div className="flex items-center" ref={ref}>
      <div className="w-full">
        <button
          className="text-base lg:text-lg px-1 pt-1  hover:text-gray-500 w-full text-left pl-4 lg:pl-0 font-medium lg:font-extrabold md:mb-0 mb-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{section}</span>
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            className={`inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1 rotate-${
              isOpen[section] ? 180 : 0
            }`}
          >
            <path
              clipRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              fillRule="evenodd"
            ></path>
          </svg>
        </button>
        {isOpen && (
          <div className="absolute py-2 mt-2 bg-white rounded-md z-10 w-full lg:w-48">
            {links.map((link) => (
              <Link key={link.name} href={link.href}>
                <a
                  className="block px-4 py-2 mt-2 text-sm font-semibold md:mt-0 text-indigo-600 bg-white hover:bg-indigo-50 cursor-pointer"
                  target={link.target ?? '_self'}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

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
            <div className="flex md:justify-center justify-between h-16">
              <div className="flex px-2 lg:px-0">
                <div className="hidden lg:ml-[4.4rem] lg:flex lg:space-x-8">
                  {navigation.map((nav) => {
                    return nav.links ? (
                      <NavbarDropdown section={nav.section} links={nav.links} />
                    ) : (
                      <Link href={nav.href} key={nav.href}>
                        <a
                          className={mergeClassNames(
                            router.asPath.includes(nav.href)
                              ? 'decoration-2'
                              : 'hover:text-gray-500',
                            'inline-flex items-center text-lg px-1 pt-1 font-extrabold'
                          )}
                        >
                          {nav.section == 'logo' && (
                            <img
                              className="pr-1 pt-1 w-16 relative"
                              src="/landing/logooutlined.svg"
                              alt="sapien"
                            />
                          )}
                          {nav.section != 'logo' && nav.section}
                        </a>
                      </Link>
                    );
                  })}
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
                <Link
                  href="https://opensea.io/collection/sapien-nation-passport"
                  passHref
                >
                  <a
                    target="_blank"
                    className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-white hover:bg-gray-600 focus:outline-none"
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 90 90"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M45 0C20.151 0 0 20.151 0 45C0 69.849 20.151 90 45 90C69.849 90 90 69.849 90 45C90 20.151 69.858 0 45 0ZM22.203 46.512L22.392 46.206L34.101 27.891C34.272 27.63 34.677 27.657 34.803 27.945C36.756 32.328 38.448 37.782 37.656 41.175C37.323 42.57 36.396 44.46 35.352 46.206C35.217 46.458 35.073 46.71 34.911 46.953C34.839 47.061 34.713 47.124 34.578 47.124H22.545C22.221 47.124 22.032 46.773 22.203 46.512ZM74.376 52.812C74.376 52.983 74.277 53.127 74.133 53.19C73.224 53.577 70.119 55.008 68.832 56.799C65.538 61.38 63.027 67.932 57.402 67.932H33.948C25.632 67.932 18.9 61.173 18.9 52.83V52.56C18.9 52.344 19.08 52.164 19.305 52.164H32.373C32.634 52.164 32.823 52.398 32.805 52.659C32.706 53.505 32.868 54.378 33.273 55.17C34.047 56.745 35.658 57.726 37.395 57.726H43.866V52.677H37.467C37.143 52.677 36.945 52.299 37.134 52.029C37.206 51.921 37.278 51.813 37.368 51.687C37.971 50.823 38.835 49.491 39.699 47.97C40.284 46.944 40.851 45.846 41.31 44.748C41.4 44.55 41.472 44.343 41.553 44.145C41.679 43.794 41.805 43.461 41.895 43.137C41.985 42.858 42.066 42.57 42.138 42.3C42.354 41.364 42.444 40.374 42.444 39.348C42.444 38.943 42.426 38.52 42.39 38.124C42.372 37.683 42.318 37.242 42.264 36.801C42.228 36.414 42.156 36.027 42.084 35.631C41.985 35.046 41.859 34.461 41.715 33.876L41.661 33.651C41.553 33.246 41.454 32.868 41.328 32.463C40.959 31.203 40.545 29.97 40.095 28.818C39.933 28.359 39.753 27.918 39.564 27.486C39.294 26.82 39.015 26.217 38.763 25.65C38.628 25.389 38.52 25.155 38.412 24.912C38.286 24.642 38.16 24.372 38.025 24.111C37.935 23.913 37.827 23.724 37.755 23.544L36.963 22.086C36.855 21.888 37.035 21.645 37.251 21.708L42.201 23.049H42.219C42.228 23.049 42.228 23.049 42.237 23.049L42.885 23.238L43.605 23.436L43.866 23.508V20.574C43.866 19.152 45 18 46.413 18C47.115 18 47.754 18.288 48.204 18.756C48.663 19.224 48.951 19.863 48.951 20.574V24.939L49.482 25.083C49.518 25.101 49.563 25.119 49.599 25.146C49.725 25.236 49.914 25.38 50.148 25.56C50.337 25.704 50.535 25.884 50.769 26.073C51.246 26.46 51.822 26.955 52.443 27.522C52.605 27.666 52.767 27.81 52.92 27.963C53.721 28.71 54.621 29.583 55.485 30.555C55.728 30.834 55.962 31.104 56.205 31.401C56.439 31.698 56.7 31.986 56.916 32.274C57.213 32.661 57.519 33.066 57.798 33.489C57.924 33.687 58.077 33.894 58.194 34.092C58.554 34.623 58.86 35.172 59.157 35.721C59.283 35.973 59.409 36.252 59.517 36.522C59.85 37.26 60.111 38.007 60.273 38.763C60.327 38.925 60.363 39.096 60.381 39.258V39.294C60.435 39.51 60.453 39.744 60.471 39.987C60.543 40.752 60.507 41.526 60.345 42.3C60.273 42.624 60.183 42.93 60.075 43.263C59.958 43.578 59.85 43.902 59.706 44.217C59.427 44.856 59.103 45.504 58.716 46.098C58.59 46.323 58.437 46.557 58.293 46.782C58.131 47.016 57.96 47.241 57.816 47.457C57.609 47.736 57.393 48.024 57.168 48.285C56.97 48.555 56.772 48.825 56.547 49.068C56.241 49.437 55.944 49.779 55.629 50.112C55.449 50.328 55.251 50.553 55.044 50.751C54.846 50.976 54.639 51.174 54.459 51.354C54.144 51.669 53.892 51.903 53.676 52.11L53.163 52.569C53.091 52.641 52.992 52.677 52.893 52.677H48.951V57.726H53.91C55.017 57.726 56.07 57.339 56.925 56.61C57.213 56.358 58.482 55.26 59.985 53.604C60.039 53.541 60.102 53.505 60.174 53.487L73.863 49.527C74.124 49.455 74.376 49.644 74.376 49.914V52.812V52.812Z"
                        fill="black"
                      />
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {navigation.map((nav) => {
                if (nav.section != 'logo') {
                  return nav.links ? (
                    <NavbarDropdown section={nav.section} links={nav.links} />
                  ) : (
                    <Disclosure.Button
                      as="a"
                      href={nav.href}
                      key={nav.href}
                      className={mergeClassNames(
                        router.asPath === nav.href
                          ? 'bg-purple-50 border-purple-500 text-sapien-60'
                          : 'border-transparent text-white hover:bg-gray-800',
                        'block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                      )}
                    >
                      {nav.section}
                    </Disclosure.Button>
                  );
                }
              })}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
              {me ? (
                <>
                  <div className="flex items-center px-4">
                    <div className="Wshrink-0">
                      {me.avatar ? (
                        <Image
                          alt={me.username}
                          src={me.avatar}
                          width={30}
                          height={30}
                          className="h-8 w-8 rounded-full"
                        />
                      ) : (
                        <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-gray-500">
                          <span className="text-sm font-medium leading-none text-white dark:text-black">
                            {me.username[0]}
                          </span>
                        </span>
                      )}
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-gray-800">
                        {me.username}
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
