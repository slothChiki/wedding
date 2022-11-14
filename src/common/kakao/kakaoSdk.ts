import { useEffect } from 'react';

declare global {
    interface Window {
        Kakao: any;
    }
}

function kakaoSDK() {
    useEffect(() => {
        if (!window.Kakao.isInitialized()) {
            window.Kakao.init(process.env.REACT_APP_KAKAO_JAVASCRIPT_APP_KEY);
        }
    }, []);
    return {
        kakaoNavigation: (
            name: string,
            latitude: number,
            longitude: number,
        ) => {
            window.Kakao.Navi.start({
                name,
                x: longitude,
                y: latitude,
                coordType: 'wgs84',
            });
        },
    };
}

export default kakaoSDK;
