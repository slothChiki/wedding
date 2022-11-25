import { NextPage } from 'next';
import React from 'react';
import { useDispatch } from 'react-redux';
import { MainManu } from '../../../../src/enums/wedding.enum';
import { useRouter } from 'next/router';

interface Props {}
const HeaderMenu: NextPage<Props> = ({}) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const goHeaderMenu = (menu: MainManu) => {
        let path = '';
        switch (menu) {
            case MainManu.THEATER_INFO: {
                path = '/theater-info';
                break;
            }
            case MainManu.MOVIE_INFO:
            default: {
                path = '/movie-info';
                break;
            }
        }
        router.push(path);
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
                        <div
                            onClick={() => goHeaderMenu(MainManu.THEATER_INFO)}
                        >
                            상영관 안내
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default HeaderMenu;
