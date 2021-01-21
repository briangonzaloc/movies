import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
	router: connectRouter(history)
});

const middlewares = [routerMiddleware(history), sagaMiddleware];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

export const store = createStore(
	rootReducer,
	composeEnhancer(applyMiddleware(...middlewares))
);

export function* rootSagas() {
	yield all([]);
}

sagaMiddleware.run(rootSagas);
