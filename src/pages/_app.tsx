import type { AppProps } from 'next/app';
import { AnimatePresence } from 'framer-motion';
import { Provider } from 'react-redux';
import { store } from '../store/index';
import '@/styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
    return (
        <AnimatePresence exitBeforeEnter>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </AnimatePresence>
    );
};

export default MyApp;
