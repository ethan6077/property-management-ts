import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { propertiesReducer } from '../reducers/index';

const store = createStore(
  propertiesReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
