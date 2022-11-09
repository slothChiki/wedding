import { FC } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '/public/css/all.css';
import '/public/css/brands.css';
import '/public/css/fontawesome.css';
import '/public/css/regular.css';
import '/public/css/solid.css';
import '/public/css/svg-with-js.css';
import '/public/css/v4-shims.css';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, viewport-fit=cover"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export default MyApp;
// export default wrapper.withRedux(MyApp);
