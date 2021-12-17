// assets
import { FullLogo } from 'assets';

// tailwind ui
import { ArrowSmRightIcon } from '@heroicons/react/solid';

const Footer = () => {
  return (
    <footer
      className="bg-white border-t-2 border-gray-200"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-4 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div>
              <FullLogo />
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 sm:flex sm:items-center sm:justify-between text-center">
          <p className="text-xs text-gray-400">
            Copyright &copy; {new Date().getFullYear()} Sapien LLC. All rights
            reserved
          </p>
          <div className="text-xs mt-5 sm:mt-0">
            <p className="text-gray-900 inline-block">
              We use cookies for better service.
            </p>
            <button className="text-purple-500 inline-block">
              &nbsp; Accept
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
