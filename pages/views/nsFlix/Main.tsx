import { NextPage } from 'next';
import Nav from './main/Nav';
import React, { useEffect, useRef, useState } from 'react';
import PlayMovie from './main/PlayMovie';
import Footer from './main/Footer';
import Slider from './main/Slider';
import Top10Slider from './main/Top10Slider';
import {
    posterPhotoList,
    studioPhotoList,
} from '../../../src/domain/nsflix/variable/photo-list';
import { actorList } from '../../../src/domain/nsflix/variable/actor-list';
import PopupDetail from './detail/PopupDetail';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../modules/reducer/rootReducer';
import { SliderType } from '../../../src/enums/wedding.enum';

interface Props {}
const Main: NextPage<Props> = ({}) => {
    const state = useSelector((state: RootState) => state.wedding);
    const dispatch = useDispatch();
    const showModal = state.showModal;

    const studioList = studioPhotoList;
    const actors = actorList;
    const posterList = posterPhotoList;

    // const [containerY, setContainerY] = useState(0);
    // TODO - 바디 고정

    return (
        <>
            <div
                className={`container ${showModal ? 'modal' : ''}`}
                // style={showModal ? {}}
            >
                <Nav />
                <PlayMovie />

                <section>
                    <div className="content-list">
                        <Slider
                            list={actors}
                            title={'우리 결혼합니다!'}
                            key={'wedding-introduce'}
                            sliderType={SliderType.ACTOR}
                        />
                    </div>
                    {/* 슬라이드 10개로 잘라야 함*/}
                    <div className="content-list">
                        <Top10Slider
                            title={'우리의 TOP 10 콘텐츠'}
                            key={'top10'}
                        />
                    </div>
                    <div className="content-list">
                        <Slider
                            list={posterList}
                            title={'한국의 콘텐츠'}
                            key={'korea'}
                            sliderType={SliderType.CONTENTS}
                        />
                    </div>
                    <div className="content-list">
                        <Slider
                            list={posterList}
                            title={'해외의 콘텐츠'}
                            key={'national'}
                            sliderType={SliderType.CONTENTS}
                        />
                    </div>
                    <div className="content-list">
                        <Slider
                            title={'스튜디오가 만든 콘텐츠'}
                            key={'studio'}
                            sliderType={SliderType.IMG}
                            list={studioList}
                        />
                    </div>
                    {/*<div className="content-list">*/}
                    {/*    <Slider*/}
                    {/*        list={posterList}*/}
                    {/*        title={'호러/스릴러 시리즈'}*/}
                    {/*        key={'horror'}*/}
                    {/*        sliderType={SliderType.CONTENTS}*/}
                    {/*    />*/}
                    {/*</div>*/}
                    {/*<div className="content-list">*/}
                    {/*    <Slider*/}
                    {/*        list={posterList}*/}
                    {/*        title={'코미디 시리즈'}*/}
                    {/*        key={'comedy'}*/}
                    {/*        sliderType={SliderType.CONTENTS}*/}
                    {/*    />*/}
                    {/*</div>*/}
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
