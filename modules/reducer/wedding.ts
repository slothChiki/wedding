import { BannerManu } from '../../src/enums/wedding.enum';

const SET_INIT = 'SET_INIT';
const BANNER_MENU_CHANGE = 'BANNER_MENU_CHANGE';

interface IParam {
    type: string;
    param: any;
}

type State = {
    currentAction: string;
    bannerMenu: BannerManu;
};
const initialState: State = {
    currentAction: 'default(action)',
    bannerMenu: BannerManu.MOVIE_INFO,
};

export const initDetailInfo = (param) => ({
    type: SET_INIT,
    param: param,
});

export const bannerMenuChange = (param) => ({
    type: BANNER_MENU_CHANGE,
    param: param,
});

type WeddingAction = IParam;

function wedding(state = initialState, action: WeddingAction) {
    switch (action.type) {
        case SET_INIT:
            return {
                ...state,
                currentAction: action.type,
                bannerMenu: action.param,
            };
        case BANNER_MENU_CHANGE:
            return {
                ...state,
                currentAction: action.type,
                bannerMenu: action.param,
            };
        default:
            return state;
    }
}
export default wedding;
