import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import Script from 'next/script';
import React from 'react';
import NaverMap from './views/theater-info/location/script/NaverMapScript';
import SendScript from './views/movie-info/introduce/SendScript';

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
    render() {
        return (
            // <Html data-dark='true'>
            <Html>
                <Head>
                    <script
                        src="https://t1.kakaocdn.net/kakao_js_sdk/2.0.1/kakao.js"
                        integrity="sha384-geDMoEPQD/YUg5vIzKYMrqDwvs/7jrTormn7E/g4EqLSSAssbMDTe0n+bc+hkAyi"
                        crossOrigin="anonymous"
                    />
                    <NaverMap />

                    {/*<SendScript />*/}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
