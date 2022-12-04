import { NextPage } from 'next';
import * as weddingReducer from '../../../../modules/reducer/wedding';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../modules/reducer/rootReducer';
import { PosterDto } from 'src/domain/nsflix/dto/nsflixs.dto';
import { DetailType, ModalType } from 'src/enums/wedding.enum';
import NaverMap from 'pages/views/nsFlix/detail/location/NaverMap';
import React from 'react';
import ParkingNotice from 'pages/views/nsFlix/detail/location/ParkingNotice';
import LocationShare from 'pages/views/nsFlix/detail/location/LocationShare';

interface Props {
}
const ViewLocation: NextPage<Props> = ({ }) => {
    return (
        <>
            <div className="location" >
                <NaverMap />
                <LocationShare />
                <ParkingNotice />
            </div>
        </>
    );

};
export default ViewLocation;
