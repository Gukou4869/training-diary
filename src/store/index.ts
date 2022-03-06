import { createStore, combineReducers, AnyAction } from 'redux';
import middleware from '../middleware';
//combine reducers

const rootReducer = combineReducers({});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore<RootState, AnyAction, any, any>(
    rootReducer,
    middleware,
);
