import { SWRConfig } from 'swr';
import dynamic from 'next/dynamic';
import { ErrorBoundary } from 'react-error-boundary';

// api
import axios from 'api';

// components
import { ErrorView } from 'components/common';

// styles
import '../styles/index.css';

// types
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ErrorBoundary FallbackComponent={ErrorView}>
    <SWRConfig
      value={{
        provider: () => new Map(),
        errorRetryCount: 0,
        fetcher: (url: string) =>
          axios(url)
            .then(({ data }) => data)
            .catch(({ response }) => Promise.reject(response.data.error)),
        revalidateOnFocus: false,
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  </ErrorBoundary>
);

export default MyApp;
