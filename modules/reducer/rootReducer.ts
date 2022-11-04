import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import wedding from "./wedding";

/**
 * 리듀서 컴바인
 */
const rootReducer = (state: any, action: any) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    default: {
      const combineReducer = combineReducers({
        wedding,
      });
      return combineReducer(state, action);
    }
  }
};

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
