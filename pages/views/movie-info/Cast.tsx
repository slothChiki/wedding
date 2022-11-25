import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import Account from './introduce/Account';

interface Props {
    aaa: string;
}
const Cast: NextPage<any> = () => {
    return (
        <>
            <div className="card-introduce">
                <ul className="dear-list row">
                    <li className="dear col-md-6">
                        <dl className="actor">
                            <dd className="pic">
                                <img src={'/images/groom.jpg'} />
                            </dd>
                            <dd className="role">주연</dd>
                            <dd className="name">안상민</dd>
                            <dd className="more-info">인삿말 보기</dd>
                        </dl>
                    </li>
                    <li className="dear col-md-6">
                        <dl className="actor">
                            <dd className="pic">
                                <img src={'/images/bride.jpg'} />
                            </dd>
                            <dd className="role">주연</dd>
                            <dd className="name">나연</dd>
                            <dd className="more-info">인삿말 보기</dd>
                        </dl>
                    </li>
                </ul>
            </div>
        </>
    );
};
export default Cast;
