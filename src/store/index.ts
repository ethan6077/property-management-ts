import { createStore } from 'redux';
import { initialState, propertiesReducer } from '../reducers/index';
import { PropertyActions } from '../actions';
import { IStoreState } from '../types';

const store = createStore(propertiesReducer, initialState);

export default store;
