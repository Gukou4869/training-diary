import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import { configureStore } from '@reduxjs/toolkit';
import { adminInfoReducer } from './admin/reducers';
import { errorReducer } from './error/reducers';
import { loadingReducer } from './loading/reducers';
import { sessionReducer } from './session/reducers';
import { RootState } from './store.d';
import middleware from '../middleware';
// combine reducers

const rootReducer = combineReducers({
  adminInfo: adminInfoReducer,
  error: errorReducer,
  loading: loadingReducer,
  loadingBar: loadingBarReducer,
  session: sessionReducer,
});

const store: RootState = configureStore({
  reducer: rootReducer,
});

export default store;
