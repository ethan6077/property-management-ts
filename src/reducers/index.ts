import { IStoreState } from '../types';
import { FETCH_PROPERTIES_START, FETCH_PROPERTIES_DONE, FETCH_PROPERTIES_ERROR } from '../constants';

export function propertiesReducer(state: IStoreState, action): IStoreState {
  switch (action.type) {
    case FETCH_PROPERTIES_START:
      return {
        ...state,
      };
  }
  return state;
}
