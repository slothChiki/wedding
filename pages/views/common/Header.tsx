import { NextPage, NextPageContext } from 'next';
import React, { useEffect } from 'react';
import Metainfo from './MetaInfo';
import Head from 'next/head';

interface Props {}
const Header: NextPage<Props> = ({}) => {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="format-detection" content="telephone=no" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
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
