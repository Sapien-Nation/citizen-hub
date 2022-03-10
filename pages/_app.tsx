import AOS from 'aos';
import dynamic from 'next/dynamic';
import { SWRConfig } from 'swr';
import { useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ThemeProvider } from 'next-themes';
import { Web3ReactProvider } from '@web3-react/core';

// api
import axios from 'api';

// components
import { AppLayout } from 'components';
import { ErrorView, ToastContainer } from 'components/common';
import Web3ReactManager from 'components/Web3ReactManager';

// context
import { ToastProvider } from 'context/toast';

// styles
import '../styles/index.css';
import '../styles/aos.scss';

// providers
import { AuthenticationProvider } from 'context/user';

// types
import type { AppProps } from 'next/app';

// utils
import getLibrary from 'utils/web3';

const Web3Provider = dynamic(() => import('components/provider'), {
  ssr: false,
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3Provider getLibrary={getLibrary}>
        <ThemeProvider defaultTheme="dark" attribute="class">
          <ErrorBoundary FallbackComponent={ErrorView}>
            <SWRConfig
              value={{
                provider: () => new Map(),
                errorRetryCount: 0,
                fetcher: (url: string) =>
                  axios(url)
                    .then(({ data }) => data)
                    .catch(({ response }) => {
                      if (response.data.error) {
                        return Promise.reject(response.data.error);
                      }
                      return Promise.reject(response.data);
                    }),
                revalidateOnFocus: false,
              }}
            >
              <ToastProvider>
                <AuthenticationProvider>
                  <AppLayout>
                    <Web3ReactManager>
                      <Component {...pageProps} />
                    </Web3ReactManager>
                  </AppLayout>
                </AuthenticationProvider>
                <ToastContainer />
              </ToastProvider>
            </SWRConfig>
          </ErrorBoundary>
        </ThemeProvider>
      </Web3Provider>
    </Web3ReactProvider>
  );
};

export default MyApp;
