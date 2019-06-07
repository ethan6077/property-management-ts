import * as constants from '../constants';

export function fetchPropertiesStart() {
  return {
    type: constants.FETCH_PROPERTIES_START,
  }
};

export function fetchPropertiesDone() {
  return {
    type: constants.FETCH_PROPERTIES_DONE,
  }
};

export function fetchPropertiesError() {
  return {
    type: constants.FETCH_PROPERTIES_ERROR,
  }
};
