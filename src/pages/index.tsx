import type { NextPage } from 'next';
import * as React from 'react';
import { useSelector } from 'react-redux';
import Head from 'next/head';
import AuthLoading from '@/components/loading/auth/AuthLoading';
import { RootState } from '../store/store.d';
import HomeContainer from '../screens/home/Home.Container';

const Home: NextPage = () => {
  const loading: boolean = useSelector((state: RootState) => {
    return state.loading.authLoading;
  });
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
