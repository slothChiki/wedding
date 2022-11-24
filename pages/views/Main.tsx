import { NextPage } from 'next';
import React, { useState } from 'react';
import Header from './common/Header';
import PopupImage from './component/PopupImage';
import { ImageDto } from '../../src/domain/wedding/dto/image.dto';
import wrapper from '../../modules/store/store';
import * as weddingReducer from '../../modules/reducer/wedding';
import { useDispatch, useSelector } from 'react-redux';
import { MainManu } from '../../src/enums/wedding.enum';
import HeaderMenu from './component/movie-info/banner/HeaderManu';
import { RootState } from '../../modules/reducer/rootReducer';
import MovieInfo from './component/movie-info/MovieInfo';
import TheaterInfo from './component/theater-info/TheaterInfo';

interface Props {
    headerMenu: MainManu;
}
const Main: NextPage<Props> = ({ headerMenu }) => {
    const [ImageInfo, setImage] = useState(new ImageDto({}));
    const state = useSelector((state: RootState) => state.wedding);
    const dispatch = useDispatch();

    const mainView = state.headerMenu;

    return (
        <>
            <div className="container">
                <div className="wrap">
                    <HeaderMenu />
                    {mainView == MainManu.MOVIE_INFO ? (
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
            headerMenu: server_prop.headerMenu as any,
        };
        console.log('dma?');
        store.dispatch(weddingReducer.initDetailInfo(props.headerMenu));
        return { props };
    },
);
export default Main;
