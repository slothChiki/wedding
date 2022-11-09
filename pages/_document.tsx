import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="format-detection" content="telephone=no" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    {/*<link*/}
                    {/*    href="https://hive-fn.qpyou.cn/markup/img/common/guide/swiper-bundle.min.css"*/}
                    {/*    rel="stylesheet"*/}
                    {/*></link>*/}
                    {/*<link*/}
                    {/*    href="https://hive-fn.qpyou.cn/markup/img/nft/marketplace/common_v5.min.css"*/}
                    {/*    rel="stylesheet"*/}
                    {/*></link>*/}
                    {/*/!* <link*/}
                    {/*    href="https://hive-fn.qpyou.cn/markup/img/nft/marketplace/ui_v2.min.css"*/}
                    {/*    rel="stylesheet"*/}
                    {/*></link> *!/*/}
                    {/*<link*/}
                    {/*    rel="stylesheet"*/}
                    {/*    href="https://hive-fn.qpyou.cn/markup/img/nft/marketplace/ui_v8.min.css"*/}
                    {/*></link>*/}

                    <link
                        href="https://fonts.googleapis.com/css?family=Work+Sans:400,300,600,400italic,700"
                        rel="stylesheet"
                        type="text/css"
                    />
                    <link
                        href="https://fonts.googleapis.com/css?family=Sacramento"
                        rel="stylesheet"
                    />
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
                </Head>
                <body>
                    <Main />
                </body>
                <NextScript />
            </Html>
        );
    }
}
