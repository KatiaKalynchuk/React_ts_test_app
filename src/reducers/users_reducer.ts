import * as userConstants from '../constants/actions';
import { handleActions } from 'redux-actions';

const initialState: UserState = [{
  loading: false,
  item: [],
  error: []
}];

export default handleActions<UserState, IUserData>({
  [userConstants.GETALL_REQUEST]: (state, action) => {
    return [{
      ...action.payload,
    }, ...state];
  },
  [userConstants.GETALL_SUCCESS]: (state, action) => {
    return [{
      ...action.payload,
    }, ...state];
  },
  [userConstants.GETALL_FAILURE]: (state, action) => {
    console.log(action);
    return [{
      ...action.payload,
    }, ...state];
  },
}, initialState)
