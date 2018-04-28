import { Map } from 'immutable';

const initialState = Map({
  id: -1,
  name: '',
  email: '',
  username: '',
  isLoggedIn: false,
  isLoading: true,
  chatEngine: null,
});

export default function app(state = initialState, action = {}) {
  const { type, ...payload } = action;

  switch (type) {
    case 'LOGIN_REQUEST':
    case 'LOGOUT_REQUEST':
      return state.set('isLoading', true);

    case 'LOGIN_FAILURE':
    case 'LOGOUT_FAILURE':
      return state.set('isLoading', false);

    case 'LOGIN_SUCCESS':
      return state.merge(payload.user)
        .set('isLoggedIn', true)
        .set('isLoading', false);

    case 'LOGOUT_SUCCESS':
      return state
        .set('isLoggedIn', false)
        .set('isLoading', false)
        .set('chatEngine', null);

    default:
      return state;
  }
}
