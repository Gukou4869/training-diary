import thunk, { ThunkDispatch } from 'redux-thunk';
import { AnyAction, applyMiddleware } from 'redux';
import { RootState } from '../store/store.d';
import logger from './logger';
// DEV ONLY

const middleware =
  process.env.NODE_ENV === 'development'
    ? applyMiddleware<ThunkDispatch<RootState, null, AnyAction>, RootState>(thunk, logger)
    : applyMiddleware<ThunkDispatch<RootState, null, AnyAction>, RootState>(thunk);

export default middleware;
