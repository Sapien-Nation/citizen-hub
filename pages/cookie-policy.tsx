// components
import { Head } from 'components/common';

// types
import { NextPage } from 'next';

const CookiePolicy: NextPage = () => (
  <>
    <Head title="Blog">
      <meta content="Cookie Policy" name="description" />
    </Head>
    <div className="max-w-6xl mx-auto px-2 py-10 sm:px-6 lg:px-8">
      <h1 className="text-gray-600 text-xl font-semibold">Cookie Policy</h1>
      <p className="whitespace-pre-line leading-relaxed text-lg lg:text-left text-gray-600 mt-6">
        {`At Sapien, we value your privacy. This Sapien website and other related Sapien products that can be accessed through this website use cookies. Cookies are used to manage your login session, improve user experience, and to provide analytics on the use of our website and related products. Therefore, we may share your site usage data, but not your personal information, with our analytics partners.
          `}
      </p>
      <p className="whitespace-pre-line leading-relaxed text-lg lg:text-left text-gray-600 mt-6">
        All of the cookies Sapien uses are secure cookies that can only be
        transmitted over an encrypted connection, HTTPS. You can control and/or
        delete cookies if you wish. You can delete all cookies already on your
        computer and you can set most browsers to prevent them from being
        stored. However, if you disable all cookies, then you may not be able to
        utilize this site and/or many of its features. By clicking “Accept” or
        continuing to use this site, you are indicating that you understand
        Sapien’s cookie policy and its terms. Please refer to{' '}
        <a
          className="underline"
          href="https://common.sapien.network/terms.html"
          target="_blank"
          rel="noreferrer"
        >
          Sapien’s privacy
        </a>{' '}
        policy for more information.
      </p>
    </div>
  </>
);

export default CookiePolicy;
