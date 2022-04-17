import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../store/index";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <AnimatePresence exitBeforeEnter>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </AnimatePresence>
    );
}

export default MyApp;
