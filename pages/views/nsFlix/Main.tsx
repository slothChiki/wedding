import { NextPage } from 'next';
import Nav from './main/Nav';
import React, { useEffect } from 'react';
import PlayMovie from './main/PlayMovie';
import Footer from './main/Footer';
import Slider from './main/Slider';
import Top10Slider from './main/Top10Slider';
import {
    koreaList,
    nationalList,
    studioPhotoList,
    top10List,
} from '../../../src/domain/nsflix/variable/photo-list';
import { actorList } from '../../../src/domain/nsflix/variable/actor-list';
import PopupDetail from './detail/PopupDetail';
import { useSelector } from 'react-redux';
import { RootState } from '../../../modules/reducer/rootReducer';
import { SliderType } from '../../../src/enums/wedding.enum';
import Introduce from './main/Introduce';
import Head from 'next/head';

interface Props {}
const Main: NextPage<Props> = ({}) => {
    const state = useSelector((state: RootState) => state.wedding);
    const showModal = state.showModal;

    // TODO - 배포 전 주석 제거!!
    useEffect(() => {
        const msgList = [
            '%c개발자이신가요.........',
            '%c절 살려주세요... 여기 보지 마세요',
            '%c수치사 할 것 같네영....',
            '%c버그 제보 환영하지만',
            '%c이거 두 번 다시 건들고 싶지 않아요.',
            '%c추억으로 간직하게 해주세요.',
            '%c그치만 와주셔서 환영합니다~!!!!',
            '%c기술 공유, 한수 가르침 환영해용><',
        ];
        const css =
            "font-size: 2em; color: #ff0; background-color: #000;font-family: 'Noto Sans KR';";
        for (let msg of msgList) {
            setTimeout(() => {
                console.log(msg, css);
            }, 1000);
        }
    }, []);
    // const [containerY, setContainerY] = useState(0);
    // TODO - 바디 고정

    return (
        <>
            <Head>
                <meta property="og:image" content="/images/icon/logo.png" />
                <meta property="og:title" content="최고의 감동: NSFLIX" />
                <meta
                    property="og:description"
                    content="2023. 1. 7 (토) 14:00 중앙컨벤션센터"
                />
            </Head>
            <div
                className={`container ${showModal ? 'modal' : ''}`}
                // style={showModal ? {}}
            >
                <Nav />
                <PlayMovie />

                <section>
                    <div className="content-list">
                        <Introduce
                            list={actorList}
                            title={'우리 결혼합니다!'}
                            key={'wedding-introduce'}
                        />
                    </div>
                    {/* 슬라이드 10개로 잘라야 함*/}
                    <div className="content-list">
                        <Top10Slider
                            title={'우리의 TOP 10 콘텐츠'}
                            key={'top10'}
                            list={top10List}
                        />
                    </div>
                    <div className="content-list">
                        <Slider
                            list={koreaList}
                            title={'한국의 콘텐츠'}
                            key={'korea'}
                            sliderType={SliderType.CONTENTS}
                        />
                    </div>
                    <div className="content-list">
                        <Slider
                            list={nationalList}
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
                            list={studioPhotoList}
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
