import type { AppProps } from 'next/app';
import 'windi.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
