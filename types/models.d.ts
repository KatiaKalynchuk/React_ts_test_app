/** TodoMVC model definitions **/

declare interface ArticleItemData {
  id?: ArticleItemId;
  text?: string;
  completed?: boolean;
}

declare type ArticleItemId = number;

declare type ArticleFilterType = 'SHOW_ALL' | 'SHOW_ACTIVE' | 'SHOW_COMPLETED';

declare type ArticlesStoreState = ArticleItemData[];
