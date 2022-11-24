import { NextPage } from 'next';
import React from 'react';
import * as weddingReducer from '../../../../../modules/reducer/wedding';
import { useDispatch } from 'react-redux';
import { MainManu } from '../../../../../src/enums/wedding.enum';

interface Props {}
const HeaderMenu: NextPage<Props> = ({}) => {
    const dispatch = useDispatch();
    const goHeaderMenu = (menu: MainManu) => {
        dispatch(weddingReducer.headerMenuChange(menu));
    };
    return (
        <>
            <div className="header-menu">
                <ul className="menu-list">
                    <li>
                        <div onClick={() => goHeaderMenu(MainManu.MOVIE_INFO)}>
                            영화 소개
                        </div>
                    </li>
                    <li>
                        <div onClick={() => goHeaderMenu(MainManu.LOCATION)}>
                            상영관 안내
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default HeaderMenu;
