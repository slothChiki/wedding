import { MainManu } from '../../src/enums/wedding.enum';

const SET_INIT = 'SET_INIT';
const HEADER_MENU_CHANGE = 'HEADER_MENU_CHANGE';

interface IParam {
    type: string;
    param: any;
}

type State = {
    currentAction: string;
};

const initialState: State = {
    currentAction: 'default(action)',
};

export const initDetailInfo = (param) => ({
    type: SET_INIT,
    param: param,
});

export const headerMenuChange = (param) => ({
    type: HEADER_MENU_CHANGE,
    param: param,
});

type WeddingAction = IParam;

function wedding(state = initialState, action: WeddingAction) {
    switch (action.type) {
        case SET_INIT:
            return {
                ...state,
                currentAction: action.type,
            };
        case HEADER_MENU_CHANGE:
            return {
                ...state,
                currentAction: action.type,
            };
        default:
            return state;
    }
}
export default wedding;
