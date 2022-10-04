import { useState } from 'react';
import JsCookies from 'js-cookie';
import Link from 'next/link';

import { Cookies } from 'components/common';

// hooks
import { useAuth } from 'context/user';

const Footer = () => {
  const { me } = useAuth();
  const [hideBanner, setBannerVisibilty] = useState<Boolean>(
    !Boolean(JsCookies.get('cookiePolicyAccepted'))
  );

  const handleCookie = (accept: boolean) => {
    setBannerVisibilty(false);
    JsCookies.set('cookiePolicyAccepted', String(accept), { expires: 365 });
  };

  return (
    <footer
      className="border-t border-gray-600 relative"
      aria-labelledby="footer-heading"
    >
      <div className="py-8 text-center">
        <p className="text-sm">
          Copyright &copy; {new Date().getFullYear()} Sapien DAO. All rights
          reserved
        </p>
        {me && (
          <Link href="/logout">
            <a className="inline-flex items-center text-md px-1 pt-1 font-extrabold hover:text-gray-500">
              Log Out
            </a>
          </Link>
        )}
        <p className="text-xs px-7 mt-4">
          The information on this website is for informational purposes only.
          Sapien does not guarantee the timeliness or completeness of the
          information contained on this website and the information contained
          within this website is subject to change without notice. This website
          may contain forward looking statements regarding Sapien’s intent or
          current business expectations and business model which are subject to
          revision, and Sapien does not undertake any obligation to publicly
          release the result of any revisions to these forward looking
          statements. Any and all information contained herein does not
          constitute any purchase or other advice, does not constitute an offer
          to purchase or sell, nor does it constitute a promotion or
          recommendation of any token or cryptocurrency or any other type of
          product
        </p>
      </div>

      {hideBanner && <Cookies handleCookie={handleCookie} />}
    </footer>
  );
};

export default Footer;
