import React, { FC } from 'react';
import type { AppProps } from 'next/app';
import wrapper from '../modules/store/store';
import Head from 'next/head';
import '../public/css/index.css';
import '../public/css/component.css';
import '../public/css/swiper.css';
import '../public/font/font.css';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
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
                <title>나연 상민 모바일 청첩장</title>
            </Head>
            <Component {...pageProps} />
        </>
    );
};

// export default MyApp;
export default wrapper.withRedux(MyApp);
