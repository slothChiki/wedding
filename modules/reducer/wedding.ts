const CARD_OPEN = 'CARD_OPEN';
const SET_INIT = 'SET_INIT';
const initialState = {
    currentAction: 'default(action)',
    aaa: '',
};

interface IParam {
    type: string;
    param: any;
}

export const initDetailInfo = (param) => ({
    type: SET_INIT,
    param: param,
});

type WeddingAction = IParam;

export default function wedding(state = initialState, action: WeddingAction) {
    switch (action.type) {
        case CARD_OPEN:
            return {
                ...state,
                currentAction: action.type,
                aaa: action.param.aaa,
            };
        case SET_INIT:
            return {
                ...state,
                currentAction: action.type,
                aaa: action.param.aaa,
            };
        default:
            return state;
    }
}
