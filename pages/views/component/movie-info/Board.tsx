import { NextPage, NextPageContext } from 'next';
import React, { useEffect } from 'react';
import InputComment from './board/InputComment';
import { useDispatch } from 'react-redux';
import { load } from '../../../../modules/load';
import BoardView from './board/BoardView';
import wrapper from '../../../../modules/store/store';
import * as weddingReducer from '../../../../modules/reducer/wedding';
import { MainManu } from '../../../../src/enums/wedding.enum';
import { BoardListApi } from '../../../../src/domain/board/api/board-list.api';

interface Props {
    boardList: BoardListApi[];
}
const Board: NextPage<any> = ({ boardList }: Props) => {
    const dispatch = useDispatch();

    return (
        <>
            board
            <div className="card-board">
                <BoardView boardList={boardList} />
                <InputComment />
            </div>
        </>
    );
};
export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async (res) => {
        const server_prop = JSON.parse(JSON.stringify(res.query));
        const props: Props = {
            boardList: server_prop.boardList as any,
        };
        store.dispatch(weddingReducer.initDetailInfo(MainManu.MOVIE_INFO));
        return { props };
    },
);
export default Board;
