import { createAction } from 'redux-actions';
import * as Actions from '../constants/actions';
import * as fetchJsonp from 'fetch-jsonp';

export const addArticle = createAction<ArticleItemData>(Actions.ADD_ARTICLE);

export const itemsHasErrored = createAction(Actions.ITEMS_HAS_ERRORED, (hasErrored: boolean) => ({hasErrored}));
export const itemsIsLoading = createAction(Actions.ITEMS_IS_LOADING, (isLoading: boolean) => ({isLoading}));
export const itemsFetchDataSuccess = createAction(Actions.ITEMS_FETCH_DATA_SUCCESS, (items) => ({items}));

export function itemsFetchData(url: string): any {
  return (dispatch) => {

    let data = fetchAsync(url, dispatch);

    // fetchJsonp(url, {
    //   timeout: 10000,
    // })
    //   .then((response) => {
    //     dispatch(itemsIsLoading(false));
    //     console.log(response);
    //     return response
    //   }).then((json) => {
    //     dispatch(itemsFetchDataSuccess(json));
    // }).catch((error) => {
    //   console.log(error)
    //     dispatch(itemsHasErrored(true));
    // });
  };
}

async function fetchAsync (url, dispatch) {
  let data;
  let response;
  dispatch(itemsIsLoading(true));
  try {
    response = await fetchJsonp(url);
    data = await response.json();
    dispatch(itemsFetchDataSuccess(data));
  } catch (error) {
    dispatch(itemsHasErrored(true));
  }
}

