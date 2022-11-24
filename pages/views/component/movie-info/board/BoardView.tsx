import { NextPage } from 'next';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../modules/reducer/rootReducer';
import { BoardListApi } from '../../../../../src/domain/board/api/board-list.api';

interface Props {
    boardList: BoardListApi[];
}
const BoardView: NextPage<Props> = ({ boardList = [] }) => {
    return (
        <>
            <div className="card-board">
                {boardList.map((v, i) => (
                    <a key={i}>
                        {v.idx} / {v.name}
                    </a>
                ))}
            </div>
        </>
    );
};
export default BoardView;
