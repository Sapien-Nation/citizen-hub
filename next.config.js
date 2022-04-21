/** @type {import('next').NextConfig} */
const { withSentryConfig } = require('@sentry/nextjs');

const ContentSecurityPolicy = `
  default-src 'self';
  object-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' *.googletagmanager.com *.google-analytics.com *.youtube.com *.ytimg.com;
  child-src *.youtube.com *.ytimg.com;
  style-src 'self' 'unsafe-inline' *.googleapis.com;
  img-src * blob: data:;
  connect-src * 'self' blob: data:;
  font-src data: 'self' *.gstatic.com *.amazonaws.com;
`;
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, ''),
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'same-origin',
  },
];

const moduleExports = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    domains: ['d1bdmh0gdusw0k.cloudfront.net', 'via.placeholder.com'],
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: '/purchase-api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_URL}/api/v3/passportPurchase/:path*`,
      },
      {
        source: '/passport-api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_URL}/api/v3/passport/:path*`,
      },
      {
        source: '/ml-api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_URL}/api/v3/ml/:path*`,
      },
      {
        source: '/user-api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_AUTH_URL}/api/v3/user/:path*`,
      },
      {
        source: '/auth-api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_AUTH_URL}/api/v3/auth/:path*`,
      },
    ];
  },
};

const sentryWebpackPluginOptions = {
  org: 'sapien-network',
  project: process.env.NEXT_PUBLIC_SENTRY_PROJECT_NAME,
  authToken: process.env.NEXT_PUBLIC_SENTRY_AUTH_TOKEN,
  silent: true,
};

module.exports = process.env.NEXT_PUBLIC_SENTRY_AUTH_TOKEN
  ? withSentryConfig(moduleExports, sentryWebpackPluginOptions)
  : moduleExports;
