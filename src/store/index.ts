import { loadingBarReducer } from "react-redux-loading-bar";
import { AnyAction, combineReducers, createStore } from "redux";
import middleware from "../middleware";
import calendarDateReducer from "./date/reducers";
import errorReducer from "./error/reducers";
import loadingReducer from "./loading/reducers";
import sessionReducer from "./session/reducers";
// combine reducers

const rootReducer = combineReducers({
    calenderDate: calendarDateReducer,
    error: errorReducer,
    loading: loadingReducer,
    loadingBar: loadingBarReducer,
    session: sessionReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const store = createStore<RootState, AnyAction, any, any>(rootReducer, middleware);
