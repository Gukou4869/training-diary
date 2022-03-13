import type { NextPage } from 'next';
import * as React from 'react';
import { connect, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../store/index';
import Head from 'next/head';
import AuthLoading from '@/components/loading/auth/AuthLoading';
import HomeContainer from '../screens/home/Home.Container';

interface HomeProps {
    authLoaging: boolean;
}

const Home: NextPage<HomeProps> = ({ authLoaging }) => {
    const test = useSelector((state: RootState) => state.loading.authLoading);
    return (
        <>
            <Head>
                <title>Tralog</title>
                <meta
                    name="description"
                    content="This is training log app created by gukou4869"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AuthLoading loading={test} />
            <HomeContainer />
        </>
    );
};

const MapStateToProps = (store: RootState) => {
    return {
        authLoading: store.loading.authLoading,
    };
};
const MapDispatchToProps = (
    dispatch: ThunkDispatch<RootState, null, AnyAction>,
) => {
    return {};
};

export default connect(MapStateToProps, MapDispatchToProps)(Home);
