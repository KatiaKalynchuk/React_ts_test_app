/** App model definitions **/

declare interface IArticleItemData {
  id?: ArticleItemId;
  text?: string;
  completed?: boolean;
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
declare type ArticleItemId = number;

declare type ArticlesStoreState = IArticleItemData[];

declare type UsersStoreState = IUsersData[];

declare type UserState = IUserData[];
