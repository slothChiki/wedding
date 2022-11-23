import { NextPage } from 'next';
import React from 'react';
import * as weddingReducer from '../../../../../modules/reducer/wedding';
import { useDispatch } from 'react-redux';
import { HeaderManu } from '../../../../../src/enums/wedding.enum';

interface Props {}
const Main: NextPage<Props> = ({}) => {
    const dispatch = useDispatch();
    const goHeaderMenu = (menu: HeaderManu) => {
        dispatch(weddingReducer.headerMenuChange(menu));
    };
    return (
        <>
            영화 소개 메인메뉴
            
        </>
    );
};

export default Main;
