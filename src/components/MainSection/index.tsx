import * as React from 'react';
import * as Actions from '../../actions/actions';
import * as style from './style.css';

export namespace MainSection {
  export interface IProps {
    articles: IArticleItemData[];
    actions: typeof Actions;
  }
}

export class MainSection extends React.Component<MainSection.IProps, {}> {

  constructor(props?: MainSection.IProps, context?: any) {
    super(props, context);
  }

  render() {

    return (
      <section className={style.main}>
        <h1 className={style.h1}>This is the main page</h1>
      </section>
    );
  }
}
