import { NextPage } from 'next';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { Navigation } from '../../../../src/enums/wedding.enum';
// import Kakao from './KakaoSdk'

interface Props {
    aaa: string;
}
const LocationShare: NextPage<any> = () => {
    useEffect(() => {
        const jsKey = "9465e2e289de83befa54172bf23c2929";

        // SDK는 한 번만 초기화해야 한다.
        // 중복되는 초기화를 막기 위해 isInitialized()로 SDK 초기화 여부를 판단한다.
        if (!window.Kakao.isInitialized()) {
            // JavaScript key를 인자로 주고 SDK 초기화
            window.Kakao.init(jsKey);
            // SDK 초기화 여부를 확인하자.
            console.log(window.Kakao.isInitialized());

        }
    }, []);

    // const { Kakao } = window.Kakao;
    const startNavigation = () => {
        console.log('카카오네비');
        
        Kakao.Navi.start({
            name: '중앙컨벤션센터',
            x: 35.8836624,
            y: 128.5959743,
            coordType: 'wgs84',
        });
    };

    const weddingHallName = '중앙컨벤션센터';
    return (
        <>
            <div className="location-navi  col-md-6">
                <div id="wrap" className="share">
                    <h2>네비게이션 - 모바일만 지원됩니다.</h2>
                    <div
                        className="navi"
                        key="navi-1"
                    >
                        <Link href={`tmap://search?name=${weddingHallName}`}>
                            티맵
                        </Link>
                    </div>
                    <div
                        className="navi"
                        onClick={startNavigation}
                        key="navi-2"
                    >
                        카카오
                    </div>
                    <div
                        className="navi"
                        key="navi-3"
                    >
                        <Link href={`nmap://search?query=${encodeURIComponent(weddingHallName)}&appname=http://localhost:3000`}>
                            네이버 길찾기
                        </Link>
                    </div>

                </div>
            </div>
        </>
    );
};
export default LocationShare;
