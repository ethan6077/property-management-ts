import { createStore } from 'redux';
import { propertiesReducer } from '../reducers/index';

const store = createStore(propertiesReducer);

export default store;
