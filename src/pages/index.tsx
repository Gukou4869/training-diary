import type { NextPage } from 'next';
import { AnimatePresence } from 'framer-motion';
import * as React from 'react';
import { useState } from 'react';
import Head from 'next/head';
import Header from '@/components/header/Header';
import Modal from '@/components/modal/Box/ModalBox';
import Login from '@/components/modal/body/login/Login';
import googleLogin from '@/services/auth/GoogleLogin';

const Home: NextPage = () => {
    const [open, setOpen] = useState(false);
    const [checked, setChecked] = useState(false);
    const handleToggle = (): void => {
        setOpen(prevState => !prevState);
    };
    const handleToggleChecked = () => {
        setChecked(prevState => !prevState);
    };
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
            <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
                onExitComplete={() => null}
            >
                {open && (
                    <Modal
                        open={open}
                        handleClose={handleToggle}
                        children={
                            <Login
                                checked={checked}
                                handleChecked={handleToggleChecked}
                                handleGoogleLogin={googleLogin}
                            />
                        }
                    />
                )}
            </AnimatePresence>
            <Header handleToggleOpen={handleToggle}></Header>
        </>
    );
};

export default Home;
