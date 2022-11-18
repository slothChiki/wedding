import { FC } from 'react';
import type { AppProps } from 'next/app';
import wrapper from '../modules/store/store';
import Head from 'next/head';
import '../public/css/main.css';
import '../public/css/common_my.css';
import '../public/css/examples-base.css';
import '../public/css/bootstrap.css';
import '../public/css/bootstrap.min.css';
import '../public/css/bootstrap.css';

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

// export default MyApp;
export default wrapper.withRedux(MyApp);
