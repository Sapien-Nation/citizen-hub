import AOS from 'aos';
import { SWRConfig } from 'swr';
import { useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ThemeProvider } from 'next-themes';

// api
import axios from 'api';

// components
import { AppLayout } from 'components';
import { ErrorView, ToastContainer } from 'components/common';

// context
import { ToastProvider } from 'context/toast';

// styles
import 'video.js/dist/video-js.css';
import '../styles/index.css';
import '../styles/aos.scss';

// providers
import { AuthenticationProvider } from 'context/user';

// types
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    });
  }, []);

  return (
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
                <Component {...pageProps} />
              </AppLayout>
            </AuthenticationProvider>
            <ToastContainer />
          </ToastProvider>
        </SWRConfig>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default MyApp;
