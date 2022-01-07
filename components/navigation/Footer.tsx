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
      <div className="py-8 text-center">
        <p className="text-xs text-gray-400">
          Copyright &copy; {new Date().getFullYear()} Sapien LLC. All rights
          reserved
        </p>
      </div>
      {hideBanner && <Cookies handleCookie={handleCookie} />}
    </footer>
  );
};

export default Footer;
