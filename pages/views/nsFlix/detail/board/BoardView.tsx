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
            <div className="boardlist">
                <ul>
                    {boardList.map((v, i) => (
                        <a key={`board_${i}}`}>
                            <li>
                                <dl className='board-one'>
                                    <dt>{v.name}</dt>
                                    <dd> {v.contents}</dd>
                                </dl>
                            </li>
                        </a>
                    ))}
                </ul>
            </div>
        </>
    );
};
export default BoardView;
