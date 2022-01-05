import { useState } from 'react';
import JsCookies from 'js-cookie';

import { Cookies } from 'components/common';

// assets
import { FullLogo } from 'assets';

const Footer = () => {
  const [hideBanner, setBannerVisibilty] = useState<Boolean>(
    !Boolean(JsCookies.get('cookiePolicyAccepted'))
  );

  const handleCookie = (accept: boolean) => {
    setBannerVisibilty(false);
    JsCookies.set('cookiePolicyAccepted', String(accept), { expires: 365 });
  };

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
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-xs text-gray-400">
            Copyright &copy; {new Date().getFullYear()} Sapien LLC. All rights
            reserved
          </p>
        </div>
      </div>
      {hideBanner && <Cookies handleCookie={handleCookie} />}
    </footer>
  );
};

export default Footer;
