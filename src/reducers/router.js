/**
 * A custom router reducer to support an Immutable store.
 * See: https://github.com/gajus/redux-immutable#using-with-react-router-redux
 */
import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

const initialState = fromJS({
  location: null,
});

export default (state = initialState, action) => {
  switch(action.type) {
    case LOCATION_CHANGE:
      return state.merge({ location: action.payload });

    default:
      return state;
  }
};
