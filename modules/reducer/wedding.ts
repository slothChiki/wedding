import { PosterDto } from '../../dist/domain/nsflix/dto/nsflixs.dto';
import { DetailType } from '../../dist/enums/wedding.enum';

const SET_INIT = 'SET_INIT';
const MODAL_CHANGE = 'MODAL_CHANGE';
const DETAIL_DATA_CHOICE = 'DETAIL_DATA_CHOICE';

interface IParam {
    type: string;
    param: any;
}

type State = {
    currentAction: string;
    showModal: boolean;
    detailData: PosterDto;
};

const initialState: State = {
    currentAction: 'default(action)',
    showModal: false,
    detailData: { type: DetailType.IMG, src: '', name: '' },
};

export const initDetailInfo = (param) => ({
    type: SET_INIT,
    param: param,
});

export const modalChange = (param) => ({
    type: MODAL_CHANGE,
    param: param,
});

export const detailDataChoice = (param) => ({
    type: DETAIL_DATA_CHOICE,
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
        case MODAL_CHANGE:
            return {
                ...state,
                currentAction: action.type,
                showModal: action.param,
            };

        case DETAIL_DATA_CHOICE:
            return {
                ...state,
                currentAction: action.type,
                detailData: action.param,
            };
        default:
            return state;
    }
}
export default wedding;
