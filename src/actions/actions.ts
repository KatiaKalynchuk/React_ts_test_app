import { createAction } from 'redux-actions';
import * as Actions from '../constants/actions';

export const addArticle = createAction<IArticleItemData>(Actions.ADD_ARTICLE);

export const itemsHasErrored = createAction(Actions.ITEMS_HAS_ERRORED, (hasErrored: boolean) => ({hasErrored}));
export const itemsIsLoading = createAction(Actions.ITEMS_IS_LOADING, (isLoading: boolean) => ({isLoading}));
export const itemsFetchDataSuccess = createAction(Actions.ITEMS_FETCH_DATA_SUCCESS, (items) => ({items}));

export function itemsFetchData(url: string): any {
  return (dispatch) => fetchAsync(url, dispatch);
}

async function fetchAsync (url, dispatch) {
  let data;
  let response;
  dispatch(itemsIsLoading(true));
  try {
    response = await fetch(url);
    console.log('data', response);
    data = await response.json();
    console.log('respons',data);
    dispatch(itemsFetchDataSuccess(data));
  } catch (error) {
    console.log('data', error);
    dispatch(itemsHasErrored(true));
  }
}
