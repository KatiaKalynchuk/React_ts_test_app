/** App model definitions **/

declare interface IArticleItemData {
  id: ArticleItemId;
  createdAt?: Date;
  name: string;
  imageUrl?: string;
  content: string
}

declare interface IUsersData {
  loggingIn?: boolean;
  user?: object
}

declare interface IUserData {
  loading?: boolean;
  item?: object;
  error?: object
}

declare interface ITodoItemData {
  id?: TodoItemId;
  text?: string;
  completed?: boolean;
}

declare type ArticleItemId = number;

declare type ArticlesStoreState = IArticleItemData[];


declare type UsersStoreState = IUsersData[];

declare type UserState = IUserData[];


declare type TodoItemId = number;

declare type TodoFilterType = 'SHOW_ALL' | 'SHOW_ACTIVE' | 'SHOW_COMPLETED';

declare type TodoStoreState = ITodoItemData[];

