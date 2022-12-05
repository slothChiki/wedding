import { NextPage } from 'next';
import { useEffect, useRef } from 'react';
import NaverMap from './NaverMap';
import LocationShare from './LocationShare';

interface Props {
    aaa: string;
}
const ParkingNotice: NextPage<any> = () => {
    return (
        <>
            <div className="parking">
                주차장 주차등록 반드시 하세요!
                1층 카페와 축의대에서 하실 수 있습니다.
            </div>
        </>
    );
};
export default ParkingNotice;
