import { NextPage } from 'next';
import React from 'react';
import * as weddingReducer from '../../../../../modules/reducer/wedding';
import { useDispatch } from 'react-redux';
import { BannerManu } from '../../../../../src/enums/wedding.enum';

interface Props {}
const HeaderMenu: NextPage<Props> = ({}) => {
    const dispatch = useDispatch();
    const goBannerMenu = (menu: BannerManu) => {
        dispatch(weddingReducer.bannerMenuChange(menu));
    };
    return (
        <>
            <div className="banner-menu">
                <ul className="menu-list">
                    <li>
                        <div
                            onClick={() => goBannerMenu(BannerManu.MOVIE_INFO)}
                        >
                            영화 소개
                        </div>
                    </li>
                    <li>
                        <div onClick={() => goBannerMenu(BannerManu.LOCATION)}>
                            상영관 안내
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default HeaderMenu;
