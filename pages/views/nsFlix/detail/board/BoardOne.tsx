import { NextPage } from 'next';
import React from 'react';
import { BoardListApi } from '../../../../../src/domain/board/api/board-list.api';
import moment from 'moment';

interface Props {
    board: BoardListApi;
}
const BoardOne: NextPage<Props> = ({
    board = {
        name: '',
        contents: '',
        tel: '',
        regDate: null,
        idx: '',
    },
}) => {
    const date = moment(board.regDate).format('YY년 MM월 DD일');
    return (
        <>
            <li>
                <div className="board-one">
                    <div className="up">
                        <label>이름 </label> {board.name} <label>작성일 </label>{' '}
                        {date}
                    </div>
                    <div className="down"> {board.contents}</div>
                </div>
            </li>
        </>
    );
};
export default BoardOne;
