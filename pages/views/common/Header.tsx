import { NextPage, NextPageContext } from 'next';
import { useEffect } from 'react';
import Metainfo from './MetaInfo';
import Head from 'next/head';
import NaverMap from '../component/location/NaverMapScript';

interface Props {}
const Header: NextPage<Props> = ({}) => {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="format-detection" content="telephone=no" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

                {/* 네이버 지도 */}
                <script src="../../docs/js/jquery-1.9.1.js"></script>
                <script
                    type="text/javascript"
                    src="../../docs/js/examples-base.js"
                ></script>
                <script
                    type="text/javascript"
                    src="../../docs/js/highlight.min.js"
                ></script>
                <script
                    type="text/javascript"
                    src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=2qbc932mh5"
                ></script>
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="../../docs/css/examples-base.css"
                />
                {/* 네이버 지도 */}
                <NaverMap />
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
