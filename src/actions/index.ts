import * as constants from '../constants';

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
}

export function fetchPropertiesDone(): FetchPropertiesDoneI {
  return {
    type: constants.FETCH_PROPERTIES_DONE
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

export type PropertyActions =
  | FetchPropertiesStartI
  | FetchPropertiesDoneI
  | FetchPropertiesErrorI;
