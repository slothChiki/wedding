import { NextPage, NextPageContext } from 'next';
import { useEffect } from 'react';
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
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="crossorigin"
                />
                <link
                    rel="preload"
                    as="style"
                    href="https://fonts.googleapis.com/css2?family=Dosis:wght@400;500&amp;display=swap"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Dosis:wght@400;500&amp;display=swap"
                    media="print"
                />
                <noscript>
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css2?family=Dosis:wght@400;500&amp;display=swap"
                    />
                </noscript>
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="crossorigin"
                />
                <link
                    rel="preload"
                    as="style"
                    href="https://fonts.googleapis.com/css2?family=Great+Vibes&amp;display=swap"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Great+Vibes&amp;display=swap"
                    media="print"
                />
                <noscript>
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css2?family=Great+Vibes&amp;display=swap"
                    />
                </noscript>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/images/favicon/apple-touch-icon.png"
                ></link>
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/images/favicon/favicon-32x32.png"
                ></link>
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/images/favicon/favicon-16x16.png"
                ></link>
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
