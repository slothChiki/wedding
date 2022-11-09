import { FC } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Global from 'public/style/main';
import All from'public/style/all';
import AllMin from'public/style/all-min';
import Aos from'public/style/aos';
import Regular from 'public/style/regular'
import RegularMin from 'public/style/regular-min'
import Bootstrap from'public/style/bootstrap';
import Brand from'public/style/brand';
import BrandMin from'public/style/brand-min';
import ekkoLightBox from'public/style/ekko-lightbox';
import Fontawesome from'public/style/fontawesome';
import FontawesomeMin from'public/style/fontawesome-min';
import Solid from'public/style/soild';
import SolidMin from'public/style/solid-min';
import SvgWithjs from'public/style/svg-with-js';
import SvgWithjsMin from'public/style/svg-with-js-min';
import V4Shims from'public/style/v4-shims';
import V4ShimsMin from'public/style/v4-shims-min';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, viewport-fit=cover"
                />
            </Head>
                <style jsx global> {Global} </style>
                <style jsx global> {All} </style>
                <style jsx global> {AllMin} </style>
                <style jsx global> {Regular} </style>
                <style jsx global> {RegularMin} </style>
                <style jsx global> {Aos} </style>
                <style jsx global> {Solid} </style>
                <style jsx global> {SolidMin} </style>
                <style jsx global> {Bootstrap} </style>
                <style jsx global> {Brand} </style>
                <style jsx global> {BrandMin} </style>
                <style jsx global> {ekkoLightBox} </style>
                <style jsx global> {Fontawesome} </style>
                <style jsx global> {FontawesomeMin} </style>
                <style jsx global> {SvgWithjs} </style>
                <style jsx global> {SvgWithjsMin} </style>
                <style jsx global> {V4Shims} </style>
                <style jsx global> {V4ShimsMin} </style>

            <Component {...pageProps} />
        </>
    );
};

export default MyApp;
// export default wrapper.withRedux(MyApp);
