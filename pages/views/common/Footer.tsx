import { NextPage } from 'next';
import React from 'react';
import SendScript from '../movie-info/introduce/SendScript';
import Scripts from '../theater-info/location/script/Script';

interface Props {
    aaa: string;
}
const Footer: NextPage<any> = ({ aaa }) => {
    return (
        <>
            <script src="/scripts/jquery.min.js?ver=1.1.0"></script>
            <script src="/scripts/bootstrap.bundle.min.js?ver=1.1.0"></script>
            <script
                type="text/javascript"
                src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=2qbc932mh5"
            ></script>
            <script
                src="https://t1.kakaocdn.net/kakao_js_sdk/2.0.1/kakao.js"
                integrity="sha384-geDMoEPQD/YUg5vIzKYMrqDwvs/7jrTormn7E/g4EqLSSAssbMDTe0n+bc+hkAyi"
                crossOrigin="anonymous"
            ></script>
            <Scripts />
            <SendScript />
        </>
    );
};

export default Footer;
