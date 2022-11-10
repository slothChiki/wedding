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
    //                 <NextScript />
    //
    //             </body>
    //         </Html>
    //     );
    // }
}
