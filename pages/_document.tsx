import Document, {
    DocumentContext,
    Head,
    Html,
    Main,
    NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import React from 'react';
import NaverMap from './views/nsFlix/detail/location/script/NaverMapScript';

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
                    <title>나연 상민 모바일 청첩장</title>
                    <script
                        src="https://t1.kakaocdn.net/kakao_js_sdk/2.0.1/kakao.js"
                        integrity="sha384-geDMoEPQD/YUg5vIzKYMrqDwvs/7jrTormn7E/g4EqLSSAssbMDTe0n+bc+hkAyi"
                        crossOrigin="anonymous"
                    />
                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
                        integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
                        crossOrigin="anonymous"
                        referrerPolicy="no-referrer"
                    />
                    <NaverMap />
                </Head>
                <body
                    onContextMenu={() => {
                        return false;
                    }}
                    onSelectCapture={() => {
                        return false;
                    }}
                    onDragStart={() => {
                        return false;
                    }}
                >
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
