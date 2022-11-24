import { MainManu } from '../../src/enums/wedding.enum';
import { ErrorCode } from '../../dist/core/exception/errorCode';
import { BoardListApi } from '../../src/domain/board/api/board-list.api';

// const GET_BOARD = 'board/getBoard';
// const GET_BOARD_SUCCESS = 'board/getBoard_SUCCESS';
// const GET_BOARD_FAILURE = 'board/getBoard_FAILURE';

const PUT_BOARD = 'board/putBoard';
const PUT_BOARD_SUCCESS = 'board/putBoard_SUCCESS';
const PUT_BOARD_FAILURE = 'board/putBoard_FAILURE';

const HEADER_MENU_CHANGE = 'HEADER_MENU_CHANGE';

interface IParam {
    type: string;
    param: any;
}

type State = {
    current_action: string;
    boardList: BoardListApi[];
    apiResult: {
        putBoardResult: ErrorCode;
    };
};

const initialState: State = {
    current_action: 'default',
    boardList: [],
    apiResult: {
        putBoardResult: ErrorCode.DEFAULT_ERROR,
    },
};

type BoardAction = IParam;

function board(state = initialState, action: BoardAction) {
    switch (action.type) {
        // case GET_BOARD:
        //     return {
        //         ...state,
        //         current_action: action.type,
        //     };
        // case GET_BOARD_SUCCESS:
        //     return {
        //         ...state,
        //         current_action: action.type,
        //         boardList: action.param.data,
        //     };
        // case GET_BOARD_FAILURE:
        //     return {
        //         ...state,
        //         current_action: action.type,
        //     };

        case PUT_BOARD:
            return {
                ...state,
                current_action: action.type,
            };
        case PUT_BOARD_SUCCESS:
            return {
                ...state,
                current_action: action.type,
                apiResult: {
                    putBoardResult: ErrorCode.SUCCESS,
                },
            };
        case PUT_BOARD_FAILURE:
            return {
                ...state,
                current_action: action.type,
                apiResult: {
                    putBoardResult: action.param.code,
                },
            };

        case HEADER_MENU_CHANGE:
            return {
                ...state,
                currentAction: action.type,
                headerMenu: action.param,
            };
        default:
            return state;
    }
}
export default board;
