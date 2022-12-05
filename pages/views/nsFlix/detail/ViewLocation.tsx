import { NextPage } from 'next';
import NaverMap from 'pages/views/nsFlix/detail/location/NaverMap';
import React from 'react';
import ParkingNotice from 'pages/views/nsFlix/detail/location/ParkingNotice';
import LocationShare from 'pages/views/nsFlix/detail/location/LocationShare';

interface Props {}
const ViewLocation: NextPage<Props> = ({}) => {
    return (
        <>
            <div className="location">
                <h2>예식 장소</h2>
                <NaverMap />
                <LocationShare />
                <ParkingNotice />
            </div>
        </>
    );
};
export default ViewLocation;
