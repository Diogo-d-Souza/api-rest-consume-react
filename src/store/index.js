import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReduces from './modules/rootReduces';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReduces, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
