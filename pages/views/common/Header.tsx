import { NextPage, NextPageContext } from 'next';
import React, { useEffect } from 'react';
import Metainfo from './MetaInfo';
import Head from 'next/head';
import NaverMap from '../component/location/script/NaverMapScript';
import SendScript from '../component/introduce/SendScript';
import KakaoSdk from '../component/location/script/KakaoSdk';

interface Props {}
const Header: NextPage<Props> = ({}) => {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="format-detection" content="telephone=no" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

                {/* 네이버 지도 */}
                <NaverMap />
                {/* 카카오네비 */}
                <KakaoSdk />
                <script
                    src="https://t1.kakaocdn.net/kakao_js_sdk/2.0.1/kakao.js"
                    integrity="sha384-geDMoEPQD/YUg5vIzKYMrqDwvs/7jrTormn7E/g4EqLSSAssbMDTe0n+bc+hkAyi"
                    crossOrigin="anonymous"
                ></script>
                {/*<SendScript />*/}
            </Head>
            <Metainfo />
        </>
    );
};

export async function getServerSideProps(ctx: NextPageContext) {
    const server_prop = JSON.parse(JSON.stringify(ctx.query));
    const props: Props = {
        aaa: server_prop.aaa as any,
    };
    return { props };
}
export default Header;
