/*
 * User Actions
 */

// these are fake for now
export const CHECK_LOGIN_STATUS = () => {
  return (dispatch) => {
    if (localStorage.getItem('auth-token')) {
      return dispatch(LOGIN(true));
    } else {
      return dispatch(LOGIN(false));
    }
  };
}

export const LOGIN = (success = true) => {
  return (dispatch) => {
    dispatch(LOGIN_REQUEST());
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (success) {
          dispatch(LOGIN_SUCCESS({
            id: 1,
            name: 'Eden Test Clinician',
            email: 'test@edenhealth.com',
            username: 'clinician_eden_test',
          }));
          localStorage.setItem('auth-token', true);
          resolve();
        } else {
          dispatch(LOGIN_FAILURE());
          reject();
        }
      }, 100);
    });
  };
};

export const LOGIN_REQUEST = () => ({ type: 'LOGIN_REQUEST' });
export const LOGIN_SUCCESS = (user) => ({ type: 'LOGIN_SUCCESS', user });
export const LOGIN_FAILURE = () => ({ type: 'LOGIN_FAILURE' });

export const LOGOUT = (success = true) => {
  return (dispatch) => {
    dispatch(LOGOUT_REQUEST());
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (success) {
          dispatch(LOGOUT_SUCCESS());
          localStorage.removeItem('auth-token');
          resolve();
        } else {
          dispatch(LOGOUT_FAILURE());
          reject();
        }
      }, 100);
    });
  };
};

export const LOGOUT_REQUEST = () => ({ type: 'LOGOUT_REQUEST' });
export const LOGOUT_SUCCESS = () => ({ type: 'LOGOUT_SUCCESS' });
export const LOGOUT_FAILURE = () => ({ type: 'LOGOUT_FAILURE' });

export const UserActions = {
  CHECK_LOGIN_STATUS,
  LOGIN,
  LOGOUT,
};
