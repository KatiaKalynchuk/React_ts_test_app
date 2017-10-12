import { combineReducers, Reducer } from 'redux';
import articles_reducer from './articles_reducer';

export interface RootState {
  articles_reducer: ArticlesStoreState;
}

export default combineReducers<RootState>({
  articles_reducer
});
