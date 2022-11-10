import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: [
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>,
                ],
            };
        } finally {
            sheet.seal();
        }
    }
    // render() {
    //     return (
    //         <Html>
    //             <Head>
    //                 <meta charSet="UTF-8" />
    //                 <meta name="format-detection" content="telephone=no" />
    //                 <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    //                 {/*<link*/}
    //                 {/*    href="https://hive-fn.qpyou.cn/markup/img/common/guide/swiper-bundle.min.css"*/}
    //                 {/*    rel="stylesheet"*/}
    //                 {/*></link>*/}
    //                 {/*<link*/}
    //                 {/*    href="https://hive-fn.qpyou.cn/markup/img/nft/marketplace/common_v5.min.css"*/}
    //                 {/*    rel="stylesheet"*/}
    //                 {/*></link>*/}
    //                 {/*/!* <link*/}
    //                 {/*    href="https://hive-fn.qpyou.cn/markup/img/nft/marketplace/ui_v2.min.css"*/}
    //                 {/*    rel="stylesheet"*/}
    //                 {/*></link> *!/*/}
    //                 {/*<link*/}
    //                 {/*    rel="stylesheet"*/}
    //                 {/*    href="https://hive-fn.qpyou.cn/markup/img/nft/marketplace/ui_v8.min.css"*/}
    //                 {/*></link>*/}
    //
    //                 <link
    //                     rel="preconnect"
    //                     href="https://fonts.gstatic.com"
    //                     crossOrigin="crossorigin"
    //                 />
    //                 <link
    //                     rel="preload"
    //                     as="style"
    //                     href="https://fonts.googleapis.com/css2?family=Dosis:wght@400;500&amp;display=swap"
    //                 />
    //                 <link
    //                     rel="stylesheet"
    //                     href="https://fonts.googleapis.com/css2?family=Dosis:wght@400;500&amp;display=swap"
    //                     media="print"
    //                 />
    //                 <noscript>
    //                     <link
    //                         rel="stylesheet"
    //                         href="https://fonts.googleapis.com/css2?family=Dosis:wght@400;500&amp;display=swap"
    //                     />
    //                 </noscript>
    //                 <link
    //                     rel="preconnect"
    //                     href="https://fonts.gstatic.com"
    //                     crossOrigin="crossorigin"
    //                 />
    //                 <link
    //                     rel="preload"
    //                     as="style"
    //                     href="https://fonts.googleapis.com/css2?family=Great+Vibes&amp;display=swap"
    //                 />
    //                 <link
    //                     rel="stylesheet"
    //                     href="https://fonts.googleapis.com/css2?family=Great+Vibes&amp;display=swap"
    //                     media="print"
    //                 />
    //                 <noscript>
    //                     <link
    //                         rel="stylesheet"
    //                         href="https://fonts.googleapis.com/css2?family=Great+Vibes&amp;display=swap"
    //                     />
    //                 </noscript>
    //                 <link
    //                     rel="apple-touch-icon"
    //                     sizes="180x180"
    //                     href="../public/images/favicon/apple-touch-icon.png"
    //                 ></link>
    //                 <link
    //                     rel="icon"
    //                     type="image/png"
    //                     sizes="32x32"
    //                     href="../public/images/favicon/favicon-32x32.png"
    //                 ></link>
    //                 <link
    //                     rel="icon"
    //                     type="image/png"
    //                     sizes="16x16"
    //                     href="../public/images/favicon/favicon-16x16.png"
    //                 ></link>
    //
    //                 {/*<noscript>*/}
    //                 {/*    <style type="text/css">*/}
    //                 {/*        [data-aos] {*/}
    //                 {/*        opacity: 1 !important;*/}
    //                 {/*        transform: translate(0) scale(1) !important;*/}
    //                 {/*    }*/}
    //                 {/*    </style>*/}
    //                 {/*</noscript>*/}
    //             </Head>
    //             <body>
    //                 <Main />
    //             </body>
    //             <NextScript />
    //             <script src="/scripts/jquery.min.js?ver=1.1.0"></script>
    //             <script src="/scripts/bootstrap.bundle.min.js?ver=1.1.0"></script>
    //             <script src="/scripts/aos.js?ver=1.1.0"></script>
    //             <script src="/scripts/ekko-lightbox.min.js?ver=1.1.0"></script>
    //             <script src="/scripts/main.js?ver=1.1.0"></script>
    //         </Html>
    //     );
    // }
}
