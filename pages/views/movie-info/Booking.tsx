import { NextPage } from 'next';
import React, { useState } from 'react';
import { ImageDto } from '../../../src/domain/wedding/dto/image.dto';
import wrapper from '../../../modules/store/store';
import * as weddingReducer from '../../../modules/reducer/wedding';
import { useDispatch, useSelector } from 'react-redux';
import { MainManu } from '../../../src/enums/wedding.enum';
import HeaderMenu from './banner/HeaderManu';
import { RootState } from '../../../modules/reducer/rootReducer';
import NavBar from './NavBar';

interface Props {
    headerMenu: MainManu;
}
const Booking: NextPage<Props> = ({ headerMenu }) => {
    const [ImageInfo, setImage] = useState(new ImageDto({}));
    const state = useSelector((state: RootState) => state.wedding);
    const dispatch = useDispatch();

    const mainView = state.headerMenu;

    return (
        <>
            <div className="container">
                <div className="wrap">
                    <HeaderMenu />
                    <div className="wrap-card">
                        <NavBar />
                        <div className="contents">예약</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Booking;
