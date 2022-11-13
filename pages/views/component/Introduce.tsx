import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import Account from './introduce/Account';

interface Props {
    aaa: string;
}
const Introduce: NextPage<any> = () => {
    return (
        <>
            <div className="card-introduce">
                <ul className="dear-list row">
                    <li className="dear col-md-6">
                        <div>상민</div>
                        <div>
                            <img src={'/images/groom.jpg'} />
                        </div>
                        <p>안녕하세요 안상민입니다.</p>
                        <Account />
                        <div className="account">
                            <div className="kakao">
                                {' '}
                                <Link href={'#'}>kakao send</Link>
                            </div>
                            <div className="toss">
                                {' '}
                                <Link href={'#'}>toss send</Link>
                            </div>
                            <div className="copy">
                                {' '}
                                <Link href={'#'}>account copy</Link>
                            </div>
                        </div>
                    </li>
                    <li className="dear col-md-6">
                        <div>나연</div>
                        <div>
                            <img src={'/images/bride.jpg'} />
                        </div>
                        <p>안녕하세요 박나연입니다.</p>
                    </li>
                </ul>
            </div>
        </>
    );
};
export default Introduce;
