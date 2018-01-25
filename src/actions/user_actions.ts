import { userService } from '../services/user_service.js';
import { history } from '../helpers/history';
import { createAction } from 'redux-actions';
import * as Actions from '../constants/actions';

export const userActions = {
  login,
  logout,
  getAll
};

export const loginRequest = createAction(Actions.LOGIN_REQUEST, (loginRequest: boolean) => ({loginRequest}));
export const loginSuccess = createAction(Actions.LOGIN_SUCCESS, (user) => ({user}));
export const loginFailure = createAction(Actions.LOGIN_FAILURE, (loginFailure: boolean) => ({loginFailure}));

export const getAllRequest = createAction(Actions.GETALL_REQUEST);
export const getAllSuccess = createAction(Actions.GETALL_SUCCESS, (users) => ({users}));
export const getAllFailure = createAction(Actions.GETALL_FAILURE, (getAllFailure: boolean) => ({getAllFailure}));

export function login(username: string, password: string): any {
  return dispatch => {
    dispatch(loginRequest(false));

    userService.login(username, password)
      .then(
        user => {
          dispatch(loginSuccess(user));
          history.push('/');
        })
      .catch(error => {
        console.log(error);
        dispatch(loginFailure(true));
      });
  };
}

function logout() {
  userService.logout();
  return { type: Actions.LOGOUT };
}

function getAll() {
  return dispatch => {
    dispatch(getAllRequest());

    userService.getAll()
      .then(users => dispatch(getAllSuccess(users)))
      .catch(error => {
        console.log(error);
          dispatch(getAllFailure(error));
        })
  };
}
