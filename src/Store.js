import { applyMiddleware, createStore } from 'redux';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import reducer from './Reducers';

/**
 *  Used to add logs to browser console.
 *  Very helpful in debugging. Remove it if you
 *  do not need it.
 */
const loggerMiddleware = createLogger({ predicate: () => ({ logger: console, diff: true }) });

const middleware = [promise(), thunk, loggerMiddleware];

export default createStore(reducer, applyMiddleware(...middleware));
