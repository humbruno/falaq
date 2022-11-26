import 'styles/globals.scss';
import type { AppProps } from 'next/app';
import Header from 'components/Header';
import 'i18n/config';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
