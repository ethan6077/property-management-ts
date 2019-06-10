import * as constants from '../constants';

interface IFetchPropertiesStart {
  type: constants.FETCH_PROPERTIES_START;
}

export function fetchPropertiesStart(): IFetchPropertiesStart {
  return {
    type: constants.FETCH_PROPERTIES_START,
  }
};

interface IFetchPropertiesDone {
  type: constants.FETCH_PROPERTIES_DONE;
}

export function fetchPropertiesDone(): IFetchPropertiesDone {
  return {
    type: constants.FETCH_PROPERTIES_DONE,
  }
};

interface IFetchPropertiesError {
  type: constants.FETCH_PROPERTIES_ERROR;
}

export function fetchPropertiesError(): IFetchPropertiesError {
  return {
    type: constants.FETCH_PROPERTIES_ERROR,
  }
};

export type PropertyActions = IFetchPropertiesStart | IFetchPropertiesDone | IFetchPropertiesError;
