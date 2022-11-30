import { MainManu, PosterTyep } from '../../../src/enums/wedding.enum';
import { NextPage } from 'next';
import Nav from './main/Nav';
import React, { useEffect, useState } from 'react';
import PlayMovie from './main/PlayMovie';
import Footer from './main/Footer';
import Slider from './main/Slider';
import Top10Slider from './main/Top10Slider';
import { useMediaQuery } from 'react-responsive';
import { studioPhotoList } from '../../../src/domain/nsflix/variable/photo-list';
import PopupDetail from './detail/PopupDetail';
import { useDispatch, useSelector } from 'react-redux';
import wrapper from '../../../modules/store/store';
import * as weddingReducer from '../../../modules/reducer/wedding';
import { RootState } from '../../../modules/reducer/rootReducer';

interface Props {}
const Main: NextPage<Props> = ({}) => {
    const studioList = studioPhotoList;
    const state = useSelector((state: RootState) => state.wedding);
    const dispatch = useDispatch();
    const showModal = state.showModal;

    return (
        <>
            <div className={`container ${showModal ? 'modal' : ''}`}>
                <Nav />
                <PlayMovie />

                <section>
                    <div className="content-list">
                        <Slider
                            title={'내가 찜한 신랑신부 소개 콘텐츠'}
                            list={studioList}
                            key={'upcontents'}
                        />
                    </div>
                    {/* 슬라이드 10개로 잘라야 함*/}
                    <div className="content-list">
                        <Top10Slider
                            title={'나연이가 꼽은 TOP 10 콘텐츠'}
                            list={studioList}
                            key={'top10'}
                        />
                    </div>
                    <div className="content-list">
                        <Top10Slider
                            title={'상민이가 꼽은 TOP 10 콘텐츠'}
                            list={studioList}
                            key={'top10'}
                        />
                    </div>
                    <div className="content-list">
                        <Slider
                            title={'스튜디오가 만든 콘텐츠'}
                            key={'studio'}
                            list={studioList}
                        />
                    </div>
                </section>
                <Footer />
                <PopupDetail />
            </div>
        </>
    );
};
// export const getServerSideProps = wrapper.getServerSideProps(
//     (store) => async (res) => {
//         const server_prop = JSON.parse(JSON.stringify(res.query));
//         const props: Props = {
//             headerMenu: server_prop.headerMenu as any,
//         };
//         console.log('dma?');
//         store.dispatch(weddingReducer.initDetailInfo(props.headerMenu));
//         return { props };
//     },
// );
export default Main;
