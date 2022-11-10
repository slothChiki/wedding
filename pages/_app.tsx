import { FC } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import StyleImport from './views/common/styleImport';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, viewport-fit=cover"
                />
            </Head>
            <StyleImport />
            <Component {...pageProps} />
        </>
    );
};

export default MyApp;
// export default wrapper.withRedux(MyApp);
