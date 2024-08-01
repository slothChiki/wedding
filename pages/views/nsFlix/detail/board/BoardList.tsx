import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { BoardListApi } from '../../../../../src/domain/board/api/board-list.api';
import BoardOne from './BoardOne';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../modules/reducer/rootReducer';
import { BoardPageDto } from '../../../../../src/domain/board/api/board-page.dto';
import Pagination from './Pagination';

interface Props {}
const BoardList: NextPage<Props> = ({}) => {
    const state = useSelector((state: RootState) => state.board);
    const boardList: BoardPageDto = state.boardList;

    const [page, setPage] = useState(1);
    const [lists, setLists] = useState(boardList.lists[0]);

    const changePage = (n: number) => {
        setPage(n);
        setLists(boardList.lists[n - 1]);
    };

    useEffect(() => {
        setLists(boardList.lists[page - 1]);
    }, [state.boardList]);

    return (
        <>
            <div className="board-list">
                <ul>
                    {lists
                        ? lists.map((v, i) => (
                              <BoardOne board={v} key={`board_${i}}`} />
                          ))
                        : null}
                </ul>
            </div>
            <div className="pagination">
                {/*TODO - 이후에 next prev 버튼 만들기*/}
                <ul>
                    {boardList.boardPage.map((v, i) => (
                        <Pagination
                            key={`paging_${v}`}
                            changePage={changePage}
                            v={v}
                            isOn={page == v}
                        />
                    ))}
                </ul>
            </div>
        </>
    );
};
export default BoardList;
