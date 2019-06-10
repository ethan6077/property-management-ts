import { IStoreState } from '../types';
import { PropertyActions } from '../actions';
import { FETCH_PROPERTIES_START, FETCH_PROPERTIES_DONE, FETCH_PROPERTIES_ERROR } from '../constants';

export function propertiesReducer(state: IStoreState, action: PropertyActions): IStoreState {
  switch (action.type) {
    case FETCH_PROPERTIES_START:
      return {
        ...state,
        propertyListStatus: 'loading',
      };
    case FETCH_PROPERTIES_DONE:
      return {
        ...state,
        propertyListStatus: 'done',
      };
    case FETCH_PROPERTIES_ERROR:
      return {
        ...state,
        propertyListStatus: 'error',
      };
  }
  return state;
}
