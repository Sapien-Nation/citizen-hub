// types
import type { AppProps } from 'next/app';

// styles
import '../styles/index.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
