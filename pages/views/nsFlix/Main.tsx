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

interface Props {
    headerMenu: MainManu;
}
const Main: NextPage<Props> = ({}) => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1024px) and (max-width: 1279px)',
    });
    const isTablet = useMediaQuery({
        query: '(min-width: 768px) and (max-width: 1023px)',
    });
    // const isTabletOrMobile = useMediaQuery({ maxWidth: 1023 });
    const isMobileDevice = useMediaQuery({ query: '(max-width: 460px)' });
    const [movePx, setMovePx] = useState(
        isDesktopOrLaptop ? 1024 : isTablet ? 768 : isMobileDevice ? 460 : 1024,
    ); // TODO - 화면 크기 가져오기 시도해보자
    const studioList = studioPhotoList;

    return (
        <>
            {' '}
            <div className="container">
                <Nav />
                <PlayMovie />
                <section>
                    <div className="content-list">
                        <Slider
                            movePx={movePx}
                            title={'스튜디오가 만든 콘텐츠'}
                            key={'studio'}
                            list={studioList}
                        />
                    </div>
                    {/* 슬라이드 10개로 잘라야 함*/}
                    <div className="content-list">
                        <Top10Slider
                            movePx={movePx}
                            title={'오늘 한국의 TOP 10 콘텐츠'}
                            list={studioList}
                            key={'top10'}
                        />
                    </div>
                    <div className="content-list">
                        <Slider
                            movePx={movePx}
                            title={'지금 뜨는 콘텐츠'}
                            list={studioList}
                            key={'upcontents'}
                        />
                    </div>
                </section>
                <Footer />
            </div>
        </>
    );
};
export default Main;
