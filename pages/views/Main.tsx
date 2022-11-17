import { NextPage, NextPageContext } from 'next';
import React, { useEffect, useState } from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import Banner from './component/Banner';
import NavBar from './component/NavBar';
import Introduce from './component/Introduce';
import Location from './component/Location';
import Board from './component/Board';
import PopupImage from './component/PopupImage';
import PopupShare from './component/PopupShare';
import Album from './component/Album';
import { ImageDto } from '../../src/domain/wedding/dto/image.dto';
import wrapper from '../../modules/store/store';
import * as weddingReducer from '../../modules/reducer/wedding';
import { useDispatch } from 'react-redux';
import { initDetailInfo } from '../../modules/reducer/wedding';

interface Props {
    aaa: string;
}
const Main: NextPage<any> = ({ aaa }) => {
    const [ImageInfo, setImage] = useState(new ImageDto({}));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(weddingReducer.initDetailInfo('ssss'));
    }, []);

    return (
        <>
            <Header />
            <div className="container">
                <div className="wrap">
                    <Banner />
                    <h2>Navbar</h2>
                    <NavBar />
                    <h2>Groom & Bride</h2>
                    <Introduce />
                    <h2>Location</h2>
                    <Location />
                    <h2>Album</h2>
                    <Album />
                    <h2>Board</h2>
                    <Board />
                    <PopupImage />
                    <PopupShare />
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
        console.log(`안해?`);
        store.dispatch(weddingReducer.initDetailInfo(props.aaa));
        return { props };
    },
);
export default Main;
