const CARD_OPEN = "CARD_OPEN";

const initialState = {
  currentAction: "default(action)",
  aaa: "",
};

interface IParam {
  type: string;
  param: any;
}

type WeddingAction = IParam;

export default function wedding(state = initialState, action: WeddingAction) {
  switch (action.type) {
    case CARD_OPEN:
      return {
        ...state,
        currentAction: action.type,
        aaa: action.param.aaa,
      };
    default:
      return state;
  }
}
