import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import { Provider } from 'react-redux';
import { store } from '../store/index';
import { auth } from '../../firebase/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    //auth observer
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                router.push('/dashboard');
            } else {
                // User is signed out
                // ...
                router.push('/');
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
}

export default MyApp;
