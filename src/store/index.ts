import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { propertiesReducer } from '../reducers/index';

const store = createStore(propertiesReducer, applyMiddleware(thunk));

export default store;
