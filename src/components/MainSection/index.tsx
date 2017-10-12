import * as React from 'react';
import * as Actions from '../../actions/actions';
import * as style from './style.css';
import { connect } from 'react-redux';

export namespace MainSection {
  export interface Props {
    articles: ArticleItemData[];
    actions: typeof Actions;
  }

  export interface State {
    filter: ArticleFilterType;
  }
}

export class MainSection extends React.Component<MainSection.Props, MainSection.State> {

  constructor(props?: MainSection.Props, context?: any) {
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
