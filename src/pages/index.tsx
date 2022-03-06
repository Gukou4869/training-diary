import type { NextPage } from 'next';
import Head from 'next/head';
import HomeContainer from '../screens/home/Home.Container';

const Home: NextPage = () => {
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
            <HomeContainer />
        </>
    );
};

export default Home;
