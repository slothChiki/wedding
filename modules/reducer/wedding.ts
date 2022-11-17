const CARD_OPEN = 'CARD_OPEN';
const SET_INIT = 'SET_INIT';

interface IParam {
    type: string;
    param: any;
}

type State = {
    currentAction: string;
    aaa: string;
};
const initialState: State = {
    currentAction: 'default(action)',
    aaa: '',
};

export const initDetailInfo = (param) => ({
    type: SET_INIT,
    param: param,
});

type WeddingAction = IParam;

function wedding(state = initialState, action: WeddingAction) {
    switch (action.type) {
        case CARD_OPEN:
            return {
                ...state,
                currentAction: action.type,
                aaa: action.param,
            };
        case SET_INIT:
            console.log('안오냐고?');
            return {
                ...state,
                currentAction: action.type,
                aaa: action.param,
            };
        default:
            return state;
    }
}
export default wedding;
