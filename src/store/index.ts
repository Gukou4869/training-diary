import { createStore, combineReducers, AnyAction } from 'redux';
import { adminInfoReducer } from './admin/reducers';
import { loadingBarReducer } from 'react-redux-loading-bar';
import { sessionReducer } from './session/reducers';
import middleware from '../middleware';
//combine reducers

const rootReducer = combineReducers({
    adminInfo: adminInfoReducer,
    loadingBar: loadingBarReducer,
    session: sessionReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore<RootState, AnyAction, any, any>(
    rootReducer,
    middleware,
);
