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
import PopupDetail from './main/PopupDetail';

interface Props {
}
const Main: NextPage<Props> = ({ }) => {
   
    const studioList = studioPhotoList;

    return (
        <>
            {' '}
            <div className="container">
                                <PopupDetail />
                <Nav />
                <PlayMovie />
                <section>
                    <div className="content-list">
                        <Slider
                            title={'스튜디오가 만든 콘텐츠'}
                            key={'studio'}
                            list={studioList}
                        />
                    </div>
                    {/* 슬라이드 10개로 잘라야 함*/}
                    <div className="content-list">
                        <Top10Slider
                            title={'오늘 한국의 TOP 10 콘텐츠'}
                            list={studioList}
                            key={'top10'}
                        />
                    </div>
                    <div className="content-list">
                        <Slider
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
