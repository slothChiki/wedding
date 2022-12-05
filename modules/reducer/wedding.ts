import { PosterDto } from 'src/domain/nsflix/dto/nsflixs.dto';
import { ActorType, DetailType, ModalType } from 'src/enums/wedding.enum';

const SET_INIT = 'SET_INIT';
const MODAL_CHANGE = 'MODAL_CHANGE';
const DETAIL_DATA_CHOICE = 'DETAIL_DATA_CHOICE';
const CHOICE_MONEY_ACTOR = 'CHOICE_MONEY_ACTOR';

interface IParam {
    type: string;
    param: any;
}

type State = {
    currentAction: string;
    showModal: boolean;
    detailData: PosterDto;
    modalType: ModalType;
    sendingActor: ActorType;
};

const initialState: State = {
    currentAction: 'default(action)',
    showModal: false,
    detailData: { type: DetailType.IMG, src: '', name: '' },
    modalType: ModalType.POSTER,
    sendingActor: ActorType.NY,
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

export const choiceMoneyActor = (param) => ({
    type: CHOICE_MONEY_ACTOR,
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
                showModal: action.param.showModal,
                modalType: action.param.modalType,
            };

        case DETAIL_DATA_CHOICE:
            return {
                ...state,
                currentAction: action.type,
                detailData: action.param,
            };
        case CHOICE_MONEY_ACTOR:
            return {
                ...state,
                currentAction: action.type,
                sendingActor: action.param,
            };
        default:
            return state;
    }
}
export default wedding;
