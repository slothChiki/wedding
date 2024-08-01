import { BoardListApi } from './board-list.api';

export interface BoardPageDto {
    boardPage: number[];
    lists: Array<BoardListApi[]>;
}
