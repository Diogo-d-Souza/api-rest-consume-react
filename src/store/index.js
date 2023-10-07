import { createStore } from 'redux';
import rootReduces from './modules/rootReduces';

const store = createStore(rootReduces);

export default store;
