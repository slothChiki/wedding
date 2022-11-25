import { NextPage } from 'next';
import { useEffect, useRef } from 'react';
import NaverMap from './NaverMap';
import LocationShare from './LocationShare';
import ParkingNotice from './ParkingNotice';

interface Props {
    aaa: string;
}
const Location: NextPage<any> = () => {
    return (
        <>
            <div className="card-location row">
                <NaverMap />
                <LocationShare />
                <ParkingNotice />
            </div>
        </>
    );
};
export default Location;
