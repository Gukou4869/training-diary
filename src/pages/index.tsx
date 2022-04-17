import AuthLoading from "@/components/loading/auth/AuthLoading";
import { thunkAuthObserver } from "@/thunk/session/thunk";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeContainer from "../screens/home/Home.Container";
import { RootState } from "../store/store.d";

const Home: NextPage = () => {
    const loading: boolean = useSelector((state: RootState) => state.loading.authLoading);
    const dispatch = useDispatch();
    const authObserver = (): void => {
        if (localStorage.getItem("status")) {
            dispatch(thunkAuthObserver());
        }
    };
    useEffect(() => {
        authObserver();
    }, []);
    return (
        <>
            <Head>
                <title>Tralog</title>
                <meta name="description" content="This is training log app created by gukou4869" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AuthLoading loading={loading} />
            <HomeContainer />
        </>
    );
};

export default Home;
