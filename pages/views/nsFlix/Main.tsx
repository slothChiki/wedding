import { MainManu, PosterTyep } from '../../../src/enums/wedding.enum';
import { NextPage } from 'next';
import Nav from './component/Nav';
import React, { useEffect, useState } from 'react';
import PlayMovie from './component/PlayMovie';
import Footer from './component/Footer';
import Slider from './component/Slider';
import Top10Slider from './component/Top10Slider';
import { useMediaQuery } from 'react-responsive'

interface Props {
    headerMenu: MainManu;
}
const Main: NextPage<Props> = ({ }) => {
    const [movePx, setMovePx] = useState(1024);

    const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1024px) and (max-width: 1279px)" });
    const isTablet = useMediaQuery({  query: "(min-width: 768px) and (max-width: 1023px)"});
    // const isTabletOrMobile = useMediaQuery({ maxWidth: 1023 });
    const isMobileDevice = useMediaQuery({ query: "(max-width: 767px)"});

    useEffect(() => {
        if (isDesktopOrLaptop) {
            setMovePx(1024);
        } else if (isTablet) {
            setMovePx(768);
        }
        else if (isMobileDevice) {
            setMovePx(767);
        }
        else {
            setMovePx(767);
        }
    }, []);

    const studioList = [
        "/photo/photo_01.jpg",
        "/photo/photo_02.jpg",
        "/photo/photo_03.jpg",
        "/photo/photo_04.jpg",
        "/photo/photo_05.jpg",
        "/photo/photo_06.jpg",
        "/photo/photo_07.jpg",
        "/photo/photo_08.jpg",
        "/photo/photo_09.jpg",
        "/photo/photo_10.jpg",
        "/photo/photo_11.jpg",
        "/photo/photo_12.jpg",
        "/photo/photo_13.jpg",
        "/photo/photo_14.jpg",
        "/photo/photo_15.jpg",
        "/photo/photo_16.jpg",
        "/photo/photo_17.jpg",
        "/photo/photo_18.jpg",
        "/photo/photo_19.jpg",
        "/photo/photo_20.jpg"
    ];
    return (
        <>
            {' '}
            <div className='container'>
                <Nav />
                <PlayMovie />
                <section>
                    <div className="content-list">
                        <Slider movePx={movePx} title={'스튜디오가 만든 콘텐츠'} key={'studio'} list={studioList} position={PosterTyep.GENERAL} />
                    </div >

                    <div className="content-list">
                        <Top10Slider title={'오늘 한국의 TOP 10 콘텐츠'} list={studioList} key={'top10'} position={PosterTyep.TOP10} />

                    </div>

                    <div className="content-list">
                        <Slider movePx={movePx} title={'지금 뜨는 콘텐츠'} list={studioList} key={'upcontents'} position={PosterTyep.GENERAL} />
                    </div>
                </section>
                <Footer />
            </div>
        </>
    );
};
export default Main;
