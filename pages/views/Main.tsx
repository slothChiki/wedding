import { NextPage, NextPageContext } from 'next';
import React, { useEffect, useState } from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import Banner from './component/movie-info/Banner';
import NavBar from './component/movie-info/NavBar';
import Introduce from './component/Introduce';
import Location from './component/theater-info/Location';
import Board from './component/movie-info/Board';
import PopupImage from './component/PopupImage';
import PopupShare from './component/PopupShare';
import Album from './component/movie-info/Album';
import { ImageDto } from '../../src/domain/wedding/dto/image.dto';
import wrapper from '../../modules/store/store';
import * as weddingReducer from '../../modules/reducer/wedding';
import { useDispatch, useSelector } from 'react-redux';
import { HeaderManu, NavMenu } from '../../src/enums/wedding.enum';
import HeaderMenu from './component/movie-info/banner/HeaderManu';
import { RootState } from '../../modules/reducer/rootReducer';
import wedding from '../../modules/reducer/wedding';
import MovieInfo from './component/movie-info/MovieInfo';

interface Props {
    aaa: string;
}
const Main: NextPage<any> = ({ aaa }) => {
    const [ImageInfo, setImage] = useState(new ImageDto({}));
    const state = useSelector((state: RootState) => state.wedding);
    const dispatch = useDispatch();

    const mainView = state.headerMenu;


    return (
        <>
            <Header />
            <div className="container">
                <div className="wrap">
                    <Header />
                    <HeaderMenu />
                    {mainView == HeaderManu.MOVIE_INFO ? (
                        <MovieInfo />
                    ) : (
                        <TheaterInfo />
                    )}
                    <PopupImage />
                </div>
            </div>
        </>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async (res) => {
        const server_prop = JSON.parse(JSON.stringify(res.query));
        const props: Props = {
            aaa: server_prop.aaa as any,
        };
        store.dispatch(weddingReducer.initDetailInfo(HeaderManu.MOVIE_INFO)); // 안되넹... ㅜㅜ
        return { props };
    },
);
export default Main;
