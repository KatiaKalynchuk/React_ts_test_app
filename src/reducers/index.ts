import { combineReducers, Reducer } from 'redux';
import articles_reducer from './articles_reducer';
import authentication_reducer from './authentication_reducer';
import user_reducer from './users_reducer';
import todos_reducer from '../routes/Todo/reducers/todos_reducer'

export interface RootState {
  articles_reducer: ArticlesStoreState;
  authentication_reducer: UsersStoreState;
  user_reducer: UserState;
  todos_reducer: TodoStoreState;
}

export default combineReducers<RootState>({
  articles_reducer,
  authentication_reducer,
  user_reducer,
  todos_reducer
});
