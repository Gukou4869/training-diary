import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import { Provider } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { store } from '../store/index';
import { auth } from '../../firebase/firebase';
import '@/styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const router = useRouter();
  // firebase auth observer

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        router.push('/dashboard').catch((e) => {
          throw e;
        });
      } else {
        // User is signed out
        // ...
        router.push('/').catch((e) => {
          throw e;
        });
      }
    });
  }, [router]);

  return (
    <AnimatePresence exitBeforeEnter>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </AnimatePresence>
  );
};

export default MyApp;
