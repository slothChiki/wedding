import { NextPage } from 'next';
import StillCut from './album/StillCut';
import PhotoSwiper from './album/PhotoSwiper';
import React, { useState } from 'react';
import { NavMenu } from '../../../../src/enums/wedding.enum';
import NavBar from './NavBar';
import Introduce from '../Introduce';
import Album from './Album';
import Board from './Board';

interface Props {
    aaa: string;
}
const MovieInfo: NextPage<any> = () => {
    const [step, setStep] = useState(NavMenu.ALBUM);
    return (
        <>
            <div className="wrap-movie">
                <h2>Navbar</h2>
                <NavBar />
                <div className="contents">
                    {step === NavMenu.CAST ? (
                        <>
                            {' '}
                            <h2>Groom & Bride</h2>
                            <Introduce />
                        </>
                    ) : step === NavMenu.ALBUM ? (
                        <>
                            <Album />
                        </>
                    ) : step === NavMenu.BOOKING ? (
                        <>booking</>
                    ) : step === NavMenu.REVIEW ? (
                        <>
                            <h2>Board</h2>
                            <Board />
                        </>
                    ) : null}
                </div>
            </div>
        </>
    );
};
export default MovieInfo;
