import { NextPage } from 'next';
import React, { useState } from 'react';
import { NavMenu } from '../../../../src/enums/wedding.enum';
import NavBar from './NavBar';
import Introduce from '../Introduce';
import Album from './Album';
import Board from './Board';
import Main from 'pages/views/component/movie-info/main/Main';
interface Props {
    aaa: string;
}
const MovieInfo: NextPage<any> = () => {
    const [step, setStep] = useState(NavMenu.MAIN);
    return (
        <>
            <div className="wrap-movie">
                <NavBar setStep={setStep} />
                <div className="contents">
                    {step === NavMenu.MAIN ? (
                        <>
                            <Main />
                        </>
                    ) : step === NavMenu.CAST ? (
                        <>
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
