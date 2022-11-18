import { NextPage } from 'next';
import { useEffect, useRef } from 'react';
import NaverMap from './location/NaverMap';
import LocationShare from './location/LocationShare';

interface Props {
    aaa: string;
}
const Location: NextPage<any> = () => {
    return (
        <>
            <div className="card-location row">
                <NaverMap />
                <LocationShare />
            </div>
        </>
    );
};
export default Location;
