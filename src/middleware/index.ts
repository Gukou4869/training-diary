import logger from './logger'; // DEV ONLY
import thunk from 'redux-thunk';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../store/index';
import { applyMiddleware } from 'redux';

const middleware =
    process.env.NODE_ENV === 'development'
        ? applyMiddleware<ThunkDispatch<RootState, null, AnyAction>, RootState>(
              thunk,
              logger,
          )
        : applyMiddleware<ThunkDispatch<RootState, null, AnyAction>, RootState>(
              thunk,
          );

export default middleware;
