import { Dispatch } from 'redux';
import * as constants from '../constants';
import * as api from '../api';
import { PropertyI, PropertyStatusE } from '../types';

interface FetchPropertiesStartI {
  type: constants.FETCH_PROPERTIES_START;
}

export function fetchPropertiesStart(): FetchPropertiesStartI {
  return {
    type: constants.FETCH_PROPERTIES_START
  };
}

interface FetchPropertiesDoneI {
  type: constants.FETCH_PROPERTIES_DONE;
  payload: PropertyI[];
}

export function fetchPropertiesDone(
  properties: PropertyI[]
): FetchPropertiesDoneI {
  return {
    type: constants.FETCH_PROPERTIES_DONE,
    payload: properties
  };
}

interface FetchPropertiesErrorI {
  type: constants.FETCH_PROPERTIES_ERROR;
}

export function fetchPropertiesError(): FetchPropertiesErrorI {
  return {
    type: constants.FETCH_PROPERTIES_ERROR
  };
}

export function fetchProperties(): any {
  return async (dispatch: Dispatch) => {
    dispatch(fetchPropertiesStart());
    try {
      const response = await fetch(api.PropertyListUrl.toString());
      const dataInJson = await response.json();
      dispatch(fetchPropertiesDone(dataInJson));
    } catch (e) {
      console.warn(e);
      dispatch(fetchPropertiesError());
    }
  };
}

interface ChangePropertyFilterI {
  type: constants.CHANGE_PROPERTY_FILTER;
  payload: PropertyStatusE | 'ALL';
}

export function changePropertyFilter(
  filter: PropertyStatusE | 'ALL'
): ChangePropertyFilterI {
  return {
    type: constants.CHANGE_PROPERTY_FILTER,
    payload: filter
  };
}

export type PropertyActionsT =
  | FetchPropertiesStartI
  | FetchPropertiesDoneI
  | FetchPropertiesErrorI
  | ChangePropertyFilterI;
