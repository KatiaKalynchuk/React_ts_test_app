import { combineReducers, Reducer } from 'redux';
import articles_reducer from './articles_reducer';
import authentication_reducer from './authentication_reducer';
import user_reducer from './users_reducer';

export interface RootState {
  articles_reducer: ArticlesStoreState;
}

export default combineReducers<RootState>({
  articles_reducer,
  authentication_reducer,
  user_reducer
});
