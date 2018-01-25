import * as userConstants from '../constants/actions';
import { handleActions } from 'redux-actions';

let user = JSON.parse(localStorage.getItem('user'));

const initialState: UsersStoreState = [{
  loggingIn: false,
  user: []
}];

export default handleActions<UsersStoreState, IUsersData>({
  [userConstants.LOGIN_REQUEST]: (state, action) => {
    return [{
      ...action.payload,
    }, ...state];
  },
  [userConstants.LOGIN_SUCCESS]: (state, action) => {
    return [{
      ...action.payload,
    }, ...state];
  },
  [userConstants.LOGIN_FAILURE]: (state, action) => {
    console.log(action);
    return [{
      ...action.payload,
    }, ...state];
  },
}, initialState)
