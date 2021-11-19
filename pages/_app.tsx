import { SWRConfig } from 'swr';
import dynamic from 'next/dynamic';
import { ErrorBoundary } from 'react-error-boundary';

// types
import type { AppProps } from 'next/app';

// styles
import '../styles/index.css';

// components
const DynamicErrorView = dynamic<any>(
  () => import('components/common').then((mod) => mod.ErrorView) as any,
  { ssr: false }
);

// api
import axios from 'api';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ErrorBoundary FallbackComponent={DynamicErrorView}>
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
