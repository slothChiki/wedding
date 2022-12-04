import { NextPage } from 'next';
import { useEffect, useRef } from 'react';
import Location from '../../nsFlix/detail/location/Location';
import ParkingNotice from '../../nsFlix/detail/location/ParkingNotice';

interface Props {
    aaa: string;
}
const TheaterInfo: NextPage<any> = () => {
    return (
        <>
            <div className="card-location row">
                <Location />
                <ParkingNotice />
            </div>
        </>
    );
};
export default Location;
