import { ActorDto, PosterDto } from 'src/domain/nsflix/dto/nsflixs.dto';
import { DetailType } from 'src/enums/wedding.enum';

const SET_INIT = 'SET_INIT';
const MODAL_ON = 'MODAL_ON';
const MODAL_OFF = 'MODAL_OFF';
const DETAIL_IMG_CHOICE = 'DETAIL_IMG_CHOICE';
const DETAIL_CONTENTS_CHOICE = 'DETAIL_CONTENTS_CHOICE';
const DETAIL_ACTOR_CHOICE = 'DETAIL_ACTOR_CHOICE';

interface IParam {
    type: string;
    param: any;
}

type State = {
    currentAction: string;
    showModal: boolean;
    detailImage: string;
    detailContents: PosterDto;
    detailActor: ActorDto;
    detailType: DetailType;
};

const initialState: State = {
    currentAction: 'default(action)',
    showModal: false,
    detailImage: '',
    detailContents: {
        src: '',
        thumbSrc: '',
        date: '',
        name: '',
        category: '',
        comment1: '',
        comment2: '',
    },
    detailActor: {
        name: '',
        src: '',
        thumbSrc: '',
        photoList: [],
        bank: '',
        kakaoQr: '',
        account: '',
        toss: '',
        comment1: '',
        comment2: '',
    },
    detailType: DetailType.IMG,
};

export const initDetailInfo = (param) => ({
    type: SET_INIT,
    param: param,
});

export const modalOn = (param) => ({
    type: MODAL_ON,
    param: param,
});

export const modalOff = (param) => ({
    type: MODAL_OFF,
    param: param,
});

export const detailImgChoice = (param) => ({
    type: DETAIL_IMG_CHOICE,
    param: param,
});

export const detailContentsChoice = (param) => ({
    type: DETAIL_CONTENTS_CHOICE,
    param: param,
});

export const detailActorChoice = (param) => ({
    type: DETAIL_ACTOR_CHOICE,
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
        case MODAL_ON:
            return {
                ...state,
                currentAction: action.type,
                showModal: action.param.showModal,
                detailType: action.param.detailType,
            };

        case MODAL_OFF:
            return {
                ...state,
                currentAction: action.type,
                showModal: false,
            };

        case DETAIL_IMG_CHOICE:
            return {
                ...state,
                currentAction: action.type,
                detailImage: action.param,
            };
        case DETAIL_CONTENTS_CHOICE:
            return {
                ...state,
                currentAction: action.type,
                detailContents: action.param,
            };
        case DETAIL_ACTOR_CHOICE:
            return {
                ...state,
                currentAction: action.type,
                detailActor: action.param,
            };
        default:
            return state;
    }
}
export default wedding;
