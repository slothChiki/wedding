import React, { FC, useEffect } from 'react';
import type { AppProps } from 'next/app';
import wrapper from '../modules/store/store';
import Head from 'next/head';
import '../public/font/font.css';
import '../public/css/index.css';
import '../public/css/component.css';
import '../public/css/modal.css';
import '../public/css/detail.css';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules/reducer/rootReducer';
import * as weddingReducer from '../modules/reducer/wedding';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state.wedding);
    const showModal = state.showModal;
    useEffect(() => {
        window.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });
    }, []);
    // 뒤로가기 조절 //////////////////////////////////////////////////////////////////////
    const backBtn = (event) => {
        event.preventDefault();
        if (showModal) {
            dispatch(weddingReducer.modalOff({}));
            event.preventDefault();
            return;
        } else {
            return window.history.back();
        }
    };
    useEffect(() => {
        if (showModal) {
            window.addEventListener('popstate', (event) => {
                backBtn(event);
            });
        }
        window.removeEventListener('popstate', (event) => {
            backBtn(event);
        });
    }, [showModal]);

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
                />
                <meta charSet="UTF-8" />
                <meta name="format-detection" content="telephone=no" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="NSFLIX" />
                <meta property="og:image" content="/images/icon/logo.png" />
                <meta property="og:title" content="최고의 감동: NSFLIX" />
                <meta
                    property="og:description"
                    content="2023. 1. 7 (토) 14:00 중앙컨벤션센터"
                />
                <title>최고의 감동: NSFLIX</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
};

// export default MyApp;
export default wrapper.withRedux(MyApp);
