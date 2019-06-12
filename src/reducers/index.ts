import { StoreStateI } from '../types';
import { PropertyActionsT } from '../actions';
import {
  FETCH_PROPERTIES_START,
  FETCH_PROPERTIES_DONE,
  FETCH_PROPERTIES_ERROR
} from '../constants';

export const initialState = {
  propertyFilter: 'default',
  propertyList: [],
  propertyListStatus: 'initial',
};

export function propertiesReducer(
  state: StoreStateI = initialState,
  action: PropertyActionsT
): StoreStateI {
  switch (action.type) {
    case FETCH_PROPERTIES_START:
      return {
        ...state,
        propertyListStatus: 'loading'
      };
    case FETCH_PROPERTIES_DONE:
      return {
        ...state,
        propertyListStatus: 'done'
      };
    case FETCH_PROPERTIES_ERROR:
      return {
        ...state,
        propertyListStatus: 'error'
      };
  }
  return state;
}
