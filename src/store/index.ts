import { createStore, combineReducers, AnyAction } from 'redux';
import { adminInfoReducer } from './admin/reducers';
import { errorReducer } from './error/reducers';
import { loadingReducer } from './loading/reducers';
import { loadingBarReducer } from 'react-redux-loading-bar';
import { sessionReducer } from './session/reducers';
import middleware from '../middleware';
//combine reducers

const rootReducer = combineReducers({
    adminInfo: adminInfoReducer,
    error: errorReducer,
    loading: loadingReducer,
    loadingBar: loadingBarReducer,
    session: sessionReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore<RootState, AnyAction, any, any>(
    rootReducer,
    middleware,
);
