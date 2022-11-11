import { NextPage } from 'next';
import { useEffect, useRef } from 'react';
import { Navigation } from '../../../../src/enums/wedding.enum';

interface Props {
    aaa: string;
}
const LocationShare: NextPage<any> = () => {
    const startNavigation = (navi: Navigation) => {
        let naviName = '';
        switch (navi) {
            case Navigation.TMAP:
                naviName = '티맵';
            case Navigation.KAKAO:
            default:
                naviName = '카카오';
        }
        console.log(navi);
    };
    return (
        <>
            <div className="location-navi  col-md-6">
                <div id="wrap" className="share">
                    <h2>네비게이션 - 모바일만 지원됩니다.</h2>
                    <div
                        onClick={() => {
                            startNavigation(Navigation.TMAP);
                        }}
                        className="navi-tmap"
                    >
                        티맵
                    </div>
                    <div
                        onClick={() => {
                            startNavigation(Navigation.KAKAO);
                        }}
                        className="navi-kakao"
                    >
                        카카오
                    </div>
                </div>
            </div>
        </>
    );
};
export default LocationShare;
