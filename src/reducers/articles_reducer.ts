import { handleActions } from 'redux-actions';
import * as Actions from '../constants/actions';

const initialState: ArticlesStoreState = [{
  id: 0,
  text: ''
}];

export default handleActions<ArticlesStoreState, IArticleItemData>({
  [Actions.ITEMS_HAS_ERRORED]: (state, action) => {
    console.log(action);
    return [{
      ...action.payload,
    }, ...state];
  },

  [Actions.ITEMS_IS_LOADING]: (state, action) => {
    return [{
      ...action.payload,
    }, ...state];
  },

  [Actions.ITEMS_FETCH_DATA_SUCCESS]: (state, action) => {
    return [
      ...state,
      action.payload
    ];
  },
}, initialState);

