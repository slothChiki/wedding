import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { BoardListApi } from '../../../../../src/domain/board/api/board-list.api';
import BoardOne from './BoardOne';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../modules/reducer/rootReducer';
import { BoardPageDto } from '../../../../../src/domain/board/api/board-page.dto';

interface Props {
    changePage: any;
    v: number;
    isOn: boolean;
}
const Pagination: NextPage<Props> = ({ changePage, v = 0, isOn = false }) => {
    return (
        <>
            <li>
                <div
                    className={`page ${isOn ? 'on' : ''}`}
                    onClick={() => {
                        changePage(v);
                    }}
                >
                    {v}
                </div>
            </li>
        </>
    );
};
export default Pagination;
